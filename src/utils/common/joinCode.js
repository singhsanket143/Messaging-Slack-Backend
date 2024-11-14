import { v4 as uuidv4 } from 'uuid';

let cachedCode = null;
let codeGeneratedAt = null;

export const joinCodeGenerator = () => {
  const currentTime = Date.now();

  // Check if the code is older than 24 hours
  if (!cachedCode || currentTime - codeGeneratedAt > 24 * 60 * 60 * 1000) {
    // Generate a new code, slice the first 8 characters
    cachedCode = uuidv4().replace(/-/g, '').slice(0, 8).toUpperCase();
    codeGeneratedAt = currentTime;
  }

  return cachedCode;
};
