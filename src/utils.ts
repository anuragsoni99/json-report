export const formatKey = (key: string): string => {
  // Replace underscores with space
  let result = key.replace(/_/g, " ");

  // Insert space before capital letters (camelCase to words)
  result = result.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Capitalize first letter (sentence case)
  result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

  return result;
};
