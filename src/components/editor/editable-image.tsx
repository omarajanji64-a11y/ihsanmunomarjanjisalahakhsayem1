"use client";

import Image, { type ImageProps } from "next/image";
import { type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useImageEditor } from "@/components/editor/editor-provider";

type EditableImageProps = ImageProps & {
  imageId: string;
};

export function EditableImage({ imageId, src, className, onClick, ...props }: EditableImageProps) {
  const { getImageUrl, isEditorEnabled, openImageEditor } = useImageEditor();
  const fallbackUrl = typeof src === "string" ? src : src.src;
  const resolvedUrl = getImageUrl(imageId, fallbackUrl);

  const handleImageClick = (event: MouseEvent<HTMLImageElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !isEditorEnabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openImageEditor({ id: imageId, currentUrl: resolvedUrl });
  };

  return (
    <Image
      {...props}
      src={resolvedUrl}
      onClick={handleImageClick}
      className={cn(
        className,
        isEditorEnabled &&
          "cursor-pointer ring-2 ring-transparent ring-inset transition-all duration-150 hover:ring-primary/90"
      )}
      data-editable-image-id={imageId}
      title={isEditorEnabled ? `Editable image: ${imageId}` : undefined}
    />
  );
}
