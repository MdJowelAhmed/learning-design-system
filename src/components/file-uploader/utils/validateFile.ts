export interface FileValidationOptions {
  maxSize?: number; // bytes
  minSize?: number; // bytes
  maxFiles?: number;
  accept?: string | string[];
  allowDuplicates?: boolean;
  existingFiles?: Array<{ name: string; size: number }>;
}

export interface ValidationError {
  type: 'maxSize' | 'minSize' | 'accept' | 'maxFiles' | 'duplicate';
  message: string;
  file?: File;
}

export function validateFile(
  file: File,
  options: FileValidationOptions = {},
): ValidationError | null {
  const {
    maxSize,
    minSize,
    accept,
    allowDuplicates = false,
    existingFiles = [],
  } = options;

  // Max Size Validation
  if (maxSize && file.size > maxSize) {
    const formatSize = (bytes: number) =>
      `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
    return {
      type: 'maxSize',
      message: `File "${file.name}" exceeds maximum allowed size of ${formatSize(maxSize)}.`,
      file,
    };
  }

  // Min Size Validation
  if (minSize && file.size < minSize) {
    return {
      type: 'minSize',
      message: `File "${file.name}" is smaller than minimum required size.`,
      file,
    };
  }

  // Accept Type Validation
  if (accept) {
    const acceptList = Array.isArray(accept)
      ? accept
      : accept.split(',').map((s) => s.trim());
    const fileType = file.type;
    const fileExt = `.${file.name.split('.').pop()?.toLowerCase()}`;

    const isAccepted = acceptList.some((pattern) => {
      if (pattern.startsWith('.')) {
        return fileExt === pattern.toLowerCase();
      }
      if (pattern.endsWith('/*')) {
        const baseType = pattern.replace('/*', '');
        return fileType.startsWith(baseType);
      }
      return fileType === pattern;
    });

    if (!isAccepted) {
      return {
        type: 'accept',
        message: `File "${file.name}" format is not allowed.`,
        file,
      };
    }
  }

  // Duplicate File Validation
  if (
    !allowDuplicates &&
    existingFiles.some((f) => f.name === file.name && f.size === file.size)
  ) {
    return {
      type: 'duplicate',
      message: `File "${file.name}" has already been added.`,
      file,
    };
  }

  return null;
}
