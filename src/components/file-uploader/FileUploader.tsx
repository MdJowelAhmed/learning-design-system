'use client';

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { useDragDrop } from './hooks/useDragDrop';

import { useFileUpload } from './hooks/useFileUpload';
import { useFileValidation } from './hooks/useFileValidation';
import { cn } from '../../utils';
import type {
  FileUploaderContextValue,
  FileUploaderProps,
} from './FileUploader.types';
import type { ValidationError } from './utils/validateFile';

const FileUploaderContext = createContext<FileUploaderContextValue | null>(
  null,
);

export function useFileUploaderContext(): FileUploaderContextValue {
  const context = useContext(FileUploaderContext);
  if (!context) {
    throw new Error(
      'FileUploader compound sub-components must be used within <FileUploader>',
    );
  }
  return context;
}

export const FileUploader = forwardRef<HTMLDivElement, FileUploaderProps>(
  (
    {
      variant = 'default',
      size = 'md',
      multiple = true,
      disabled = false,
      accept,
      maxSize,
      minSize,
      maxFiles,
      allowDuplicates = false,
      files: controlledFiles,
      onFilesChange,
      onFileRemove,
      onValidationError,
      onUpload,
      uploadOnSelect = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [errors, setErrors] = useState<ValidationError[]>([]);

    const {
      files: internalFiles,
      addFiles: addInternalFiles,
      removeFile,
    } = useFileUpload({ onFilesChange, onFileRemove });

    const activeFiles = controlledFiles ?? internalFiles;

    const { validate } = useFileValidation({
      maxSize,
      minSize,
      maxFiles,
      accept,
      allowDuplicates,
      existingFiles: activeFiles,
    });

    const addFiles = useCallback(
      (newFiles: File[]) => {
        if (disabled) return;
        const { validFiles, errors: validationErrors } = validate(newFiles);

        if (validationErrors.length > 0) {
          setErrors(validationErrors);
          onValidationError?.(validationErrors);
        } else {
          setErrors([]);
        }

        if (validFiles.length > 0) {
          addInternalFiles(validFiles);
          if (uploadOnSelect && onUpload) {
            onUpload(validFiles);
          }
        }
      },
      [
        disabled,
        validate,
        onValidationError,
        addInternalFiles,
        uploadOnSelect,
        onUpload,
      ],
    );

    const { isDragging, dragProps } = useDragDrop({
      disabled,
      onDrop: addFiles,
    });

    const openFileDialog = useCallback(() => {
      if (!disabled) {
        inputRef.current?.click();
      }
    }, [disabled]);

    const clearErrors = useCallback(() => setErrors([]), []);

    const contextValue: FileUploaderContextValue = {
      variant,
      size,
      multiple,
      disabled,
      accept,
      maxSize,
      minSize,
      maxFiles,
      files: activeFiles,
      isDragging,
      errors,
      openFileDialog,
      removeFile,
      clearErrors,
      addFiles,
      inputRef,
    };

    return (
      <FileUploaderContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn('w-full space-y-4', className)}
          {...dragProps}
          {...props}
        >
          {children}
        </div>
      </FileUploaderContext.Provider>
    );
  },
);

FileUploader.displayName = 'FileUploader';
