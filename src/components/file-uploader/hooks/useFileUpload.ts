'use client';

import { useCallback, useState } from 'react';
import { generatePreviewUrl, revokePreviewUrl } from '../utils/generatePreview';
import type { UploadFileItem } from '../FileUploader.types';

export function useFileUpload({
  onFilesChange,
  onFileRemove,
}: {
  onFilesChange?: (files: UploadFileItem[]) => void;
  onFileRemove?: (file: UploadFileItem) => void;
} = {}) {
  const [files, setFiles] = useState<UploadFileItem[]>([]);

  const addFiles = useCallback(
    (newFiles: File[]) => {
      const items: UploadFileItem[] = newFiles.map((file) => ({
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'idle',
        progress: 0,
        previewUrl: generatePreviewUrl(file),
      }));

      setFiles((prev) => {
        const updated = [...prev, ...items];
        onFilesChange?.(updated);
        return updated;
      });
    },
    [onFilesChange],
  );

  const removeFile = useCallback(
    (id: string) => {
      setFiles((prev) => {
        const target = prev.find((f) => f.id === id);
        if (target) {
          if (target.previewUrl) revokePreviewUrl(target.previewUrl);
          onFileRemove?.(target);
        }
        const updated = prev.filter((f) => f.id !== id);
        onFilesChange?.(updated);
        return updated;
      });
    },
    [onFileRemove, onFilesChange],
  );

  const updateFileStatus = useCallback(
    (id: string, updates: Partial<UploadFileItem>) => {
      setFiles((prev) => {
        const updated = prev.map((item) =>
          item.id === id ? { ...item, ...updates } : item,
        );
        onFilesChange?.(updated);
        return updated;
      });
    },
    [onFilesChange],
  );

  const clearFiles = useCallback(() => {
    setFiles((prev) => {
      prev.forEach((f) => {
        if (f.previewUrl) revokePreviewUrl(f.previewUrl);
      });
      onFilesChange?.([]);
      return [];
    });
  }, [onFilesChange]);

  return {
    files,
    setFiles,
    addFiles,
    removeFile,
    updateFileStatus,
    clearFiles,
  };
}
