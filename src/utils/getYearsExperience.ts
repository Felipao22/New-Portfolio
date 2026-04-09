export const getYearsOfExperience = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
