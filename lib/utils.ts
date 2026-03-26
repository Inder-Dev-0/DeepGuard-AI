/**
 * Converts a File object to a Google Generative AI data part.
 */
export const fileToDataPart = async (file: File): Promise<any> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = (reader.result as string).split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.readAsDataURL(file);
  });
};

/**
 * Formats a number as a percentage string.
 */
export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

/**
 * Formats a file size in MB.
 */
export const formatFileSize = (bytes: number): string => {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};
