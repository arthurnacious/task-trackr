export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join(".")
    .toUpperCase();
};

export const toTitleCase = (str: string) => {
  if (!str) return "";
  return str
    .toLowerCase() // Convert the entire string to lowercase
    .split(" ") // Split the string into words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter and concatenate with the rest
    )
    .join(" "); // Join the words back into a single string
};
