export function generatePreviewUrl(file: File): string | null {
  if (!file || !file.type.startsWith('image/')) return null;
  try {
    return URL.createObjectURL(file);
  } catch {
    return null;
  }
}

export function revokePreviewUrl(url: string | null | undefined): void {
  if (!url || !url.startsWith('blob:')) return;
  try {
    URL.revokeObjectURL(url);
  } catch {
    // Ignore revoke errors
  }
}
