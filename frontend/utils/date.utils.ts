export const BASE_ANNIVERSARY_DATE = new Date(2025, 7, 31);

export const getAnniversaryNumber = (current: Date): number => {
  const yearsDiff =
    current.getFullYear() - BASE_ANNIVERSARY_DATE.getFullYear();
  const monthsDiff =
    current.getMonth() - BASE_ANNIVERSARY_DATE.getMonth();

  return yearsDiff * 12 + monthsDiff + 1;
};

export const getAnniversaryDate = (
  year: number,
  month: number
): Date => {
  const candidate = new Date(year, month, 31);

  if (candidate.getMonth() === month) {
    return candidate;
  }

  return new Date(year, month, 4);
};

export const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();