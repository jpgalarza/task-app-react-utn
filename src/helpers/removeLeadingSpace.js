export const removeLeadingSpace = (text) => {
  if(text[0] === ' ') return text.trim();

  return text;
};