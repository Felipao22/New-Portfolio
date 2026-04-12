export const getYearsOfExperience = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
