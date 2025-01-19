export const getFolderName = (image: string): string => {
  return image.replace(/[0-9]+\.png$/, '').replace(/\d+$/, '')
};