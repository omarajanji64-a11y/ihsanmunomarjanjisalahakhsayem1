"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ImageOverrideMap = Record<string, string>;

type ImageEditPayload = {
  id: string;
  currentUrl: string;
};

type ImageEditorContextValue = {
  isEditorEnabled: boolean;
  getImageUrl: (id: string, fallbackUrl: string) => string;
  openImageEditor: (payload: ImageEditPayload) => void;
};

const ImageEditorContext = createContext<ImageEditorContextValue>({
  isEditorEnabled: false,
  getImageUrl: (_id, fallbackUrl) => fallbackUrl,
  openImageEditor: () => undefined,
});

export function useImageEditor() {
  return useContext(ImageEditorContext);
}

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editorMode, setEditorMode] = useState(false);
  const [overrides, setOverrides] = useState<ImageOverrideMap>({});

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [activeImageId, setActiveImageId] = useState<string | null>(null);
  const [activeImageFallbackUrl, setActiveImageFallbackUrl] = useState("");
  const [draftUrl, setDraftUrl] = useState("");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadEditorState = async () => {
      const [sessionResponse, imagesResponse] = await Promise.all([
        fetch("/api/editor/session", { cache: "no-store" }).catch(() => null),
        fetch("/api/editor/images", { cache: "no-store" }).catch(() => null),
      ]);

      if (!isMounted) {
        return;
      }

      if (sessionResponse?.ok) {
        const sessionPayload = (await sessionResponse.json()) as { authenticated?: boolean };
        setIsAdmin(Boolean(sessionPayload.authenticated));
      }

      if (imagesResponse?.ok) {
        const imagePayload = (await imagesResponse.json()) as { overrides?: ImageOverrideMap };
        setOverrides(imagePayload.overrides ?? {});
      }
    };

    void loadEditorState();

    return () => {
      isMounted = false;
    };
  }, []);

  const isEditorEnabled = isAdmin && editorMode;

  const closeImageEditor = () => {
    setActiveImageId(null);
    setActiveImageFallbackUrl("");
    setDraftUrl("");
    setSaveError(null);
  };

  const getImageUrl = (id: string, fallbackUrl: string) => overrides[id] ?? fallbackUrl;

  const openImageEditor = ({ id, currentUrl }: ImageEditPayload) => {
    if (!isEditorEnabled) {
      return;
    }
    const currentValue = overrides[id] ?? currentUrl;
    setActiveImageId(id);
    setActiveImageFallbackUrl(currentUrl);
    setDraftUrl(currentValue);
    setSaveError(null);
  };

  const handleToggle = () => {
    if (!isAdmin) {
      setIsAuthModalOpen(true);
      return;
    }

    setEditorMode((previous) => {
      const nextValue = !previous;
      if (!nextValue) {
        closeImageEditor();
      }
      return nextValue;
    });
  };

  const handleAuthenticate = async () => {
    setAuthError(null);
    setIsAuthenticating(true);

    try {
      const response = await fetch("/api/editor/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setAuthError(payload?.error ?? "Authentication failed.");
        return;
      }

      setIsAdmin(true);
      setEditorMode(true);
      setIsAuthModalOpen(false);
      setPassword("");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleSaveImage = async () => {
    if (!activeImageId) {
      return;
    }

    setSaveError(null);
    setIsSaving(true);

    try {
      const response = await fetch("/api/editor/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: activeImageId, imageUrl: draftUrl.trim() }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { overrides?: ImageOverrideMap; error?: string }
        | null;

      if (!response.ok) {
        setSaveError(payload?.error ?? "Could not save image URL.");
        return;
      }

      setOverrides(payload?.overrides ?? {});
      closeImageEditor();
    } finally {
      setIsSaving(false);
    }
  };

  const contextValue = useMemo<ImageEditorContextValue>(
    () => ({
      isEditorEnabled,
      getImageUrl,
      openImageEditor,
    }),
    [isEditorEnabled, overrides]
  );

  const currentImageUrl = activeImageId ? overrides[activeImageId] ?? activeImageFallbackUrl : "";

  return (
    <ImageEditorContext.Provider value={contextValue}>
      {children}

      <div className="fixed bottom-4 right-4 z-[120]">
        <Button
          type="button"
          size="sm"
          className={isEditorEnabled ? "bg-primary text-white" : "bg-[#1E102B]/90 text-white"}
          onClick={handleToggle}
        >
          Editor Mode {isEditorEnabled ? "On" : "Off"}
        </Button>
      </div>

      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-xl border border-white/15 bg-[#1E102B] p-5 text-white shadow-2xl">
            <h3 className="text-base font-semibold">Admin Authentication</h3>
            <p className="mt-1 text-sm text-white/70">Enter admin password to enable Editor Mode.</p>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-4 border-white/20 bg-black/20 text-white"
              placeholder="Admin password"
            />
            {authError && <p className="mt-2 text-sm text-red-300">{authError}</p>}
            <div className="mt-4 flex justify-end gap-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setIsAuthModalOpen(false);
                  setAuthError(null);
                  setPassword("");
                }}
              >
                Cancel
              </Button>
              <Button type="button" onClick={handleAuthenticate} disabled={isAuthenticating || password.length === 0}>
                {isAuthenticating ? "Checking..." : "Unlock"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {isEditorEnabled && activeImageId && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-xl border border-white/15 bg-[#1E102B] p-5 text-white shadow-2xl">
            <h3 className="text-base font-semibold">Edit Image URL</h3>
            <p className="mt-1 text-sm text-white/70">Image ID: {activeImageId}</p>
            <label className="mt-4 block text-xs font-medium uppercase tracking-wider text-white/60">
              Current URL
            </label>
            <p className="mt-1 break-all rounded-md border border-white/10 bg-black/20 p-2 text-xs text-white/80">
              {currentImageUrl}
            </p>

            <label className="mt-4 block text-xs font-medium uppercase tracking-wider text-white/60">
              New URL
            </label>
            <Input
              type="url"
              value={draftUrl}
              onChange={(event) => setDraftUrl(event.target.value)}
              className="mt-1 border-white/20 bg-black/20 text-white"
              placeholder="https://res.cloudinary.com/..."
            />
            {saveError && <p className="mt-2 text-sm text-red-300">{saveError}</p>}

            <div className="mt-4 flex justify-end gap-2">
              <Button type="button" variant="secondary" onClick={closeImageEditor}>
                Close
              </Button>
              <Button type="button" onClick={handleSaveImage} disabled={isSaving || draftUrl.trim().length === 0}>
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </ImageEditorContext.Provider>
  );
}
