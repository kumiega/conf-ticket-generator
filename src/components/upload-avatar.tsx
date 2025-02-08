import { useDropzone } from 'react-dropzone';
import { UseFormSetValue } from 'react-hook-form';
import { useState } from 'react';
import Button from '@/components/button';

interface UploadAvatarProps {
  error?: string;
  setValue: UseFormSetValue<any>;
}

const UploadAvatar = ({ error, setValue }: UploadAvatarProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dropzoneError, setDropzoneError] = useState<string>('');

  const handleFile = (file: File | null) => {
    if (!file) {
      setImagePreview(null);
      setValue('avatar', null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
      setValue('avatar', file);
    };
    reader.readAsDataURL(file);
  };

  const handleDropRejected = () => {
    setDropzoneError('Please upload a JPG or PNG file under 500kB.');
  };

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => acceptedFiles.length > 0 && handleFile(acceptedFiles[0]),
    onDropRejected: handleDropRejected,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxSize: 500 * 1024, // 500KB
    multiple: false,
    noClick: !!imagePreview,
    useFsAccessApi: false,
  });

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleFile(null);
    setDropzoneError('');
  };

  const handleChangeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDropzoneError('');
    open();
  };

  return (
    <div className="w-full max-w-xl">
      <label htmlFor="avatar-upload" className="block text-lg font-medium mb-2">
        Upload Avatar
      </label>

      <div
        {...getRootProps({
          className: `
            border-2 border-dashed rounded-xl p-8
            flex flex-col items-center justify-center
            bg-neutral-300/10 transition-colors
            ${imagePreview ? '' : 'cursor-pointer'}
            ${isDragActive ? 'border-neutral-500' : 'border-neutral-700 hover:border-orange-500'}
          `,
        })}
        role="button"
        aria-label="Dropzone area for uploading an avatar"
        tabIndex={imagePreview ? -1 : 0}
      >
        <input
          {...getInputProps()}
          id="avatar-upload"
          className="hidden"
          aria-hidden="true"
          data-testid="avatar-input"
        />

        {imagePreview ? (
          <div className="relative flex flex-col gap-6 items-center justify-center">
            <img
              src={imagePreview}
              alt="Avatar preview"
              className="w-16 h-16 rounded-xl object-cover border border-neutral-600"
            />
            <div className="flex gap-2">
              <Button
                onClick={handleRemoveImage}
                variant="secondary"
                type="button"
                aria-label="Remove avatar image"
              >
                Remove Image
              </Button>
              <Button
                onClick={handleChangeImage}
                variant="secondary"
                type="button"
                aria-label="Change avatar image"
              >
                Change Image
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mx-auto max-w-fit p-4 bg-neutral-700 rounded-xl mb-5">
              <img
                src="./src/assets/images/icon-upload.svg"
                className="w-8 h-8"
                alt=""
                role="presentation"
              />
            </div>
            <p>Drop your photo here or click to upload</p>
          </div>
        )}
      </div>

      <div className="mt-2" role="status">
        {dropzoneError ? (
          <p className="text-red-500 text-sm" role="alert">
            {dropzoneError}
          </p>
        ) : error ? (
          <p className="text-orange-500 text-sm" role="alert">
            {error}
          </p>
        ) : (
          <p className="flex gap-2 items-center text-sm mt-3">
            <img
              src="./src/assets/images/icon-info.svg"
              className="w-6 h-6"
              alt=""
              role="presentation"
            />
            <span>Upload your photo (JPG or PNG, max size: 500kB)</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadAvatar;
