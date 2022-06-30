export const TextFormater = text => {
  return text
    .toLowerCase()
    .replace(/\b(\w)/g, s => s.toUpperCase())
    .replace(/-/g, " ");
};
