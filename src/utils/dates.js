import dayjs from 'dayjs';

const today = dayjs();

export const calculateDiffBetween = (unit, startDate, endDate = today) => {
  return dayjs(endDate).diff(dayjs(startDate), unit);
};

export const formatDaysToYearsMonthsAndDays = (days) => {
  const years = Math.floor(days / 365);
  const remainingDaysAfterYears = days % 365;

  const months = Math.floor(remainingDaysAfterYears / 30);
  const remainingDays = remainingDaysAfterYears % 30;

  let result = '';

  if (years > 0) {
    result += `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  if (months > 0) {
    if (result) result += ', ';
    result += `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  if (remainingDays > 0) {
    if (result) result += ' and ';
    result += `${remainingDays} ${remainingDays === 1 ? 'day' : 'days'}`;
  }

  return result || '0 days';
};

export const calculateDaysToNextMonthiversary = (startDate) => {
  const start = dayjs(startDate);

  let nextMonthiversary = start.add(1, 'month');
  while (nextMonthiversary.isBefore(today, 'day')) {
    nextMonthiversary = nextMonthiversary.add(1, 'month');
  }

  const daysToNext = nextMonthiversary.diff(today, 'day');
  return daysToNext;
};

export const calculateNextMonthiversaryNumber = (startDate) => {
  const start = dayjs(startDate);

  let monthsPassed = 0;
  let nextMonthiversary = start.add(1, 'month');

  while (nextMonthiversary.isBefore(today, 'day')) {
    nextMonthiversary = nextMonthiversary.add(1, 'month');
    monthsPassed++;
  }

  return monthsPassed + 1;
};

export const calculateNextAnniversaryNumber = (startDate) => {
  const start = dayjs(startDate);

  let yearsPassed = 0;
  let nextAnniversary = start.add(1, 'year');

  while (nextAnniversary.isBefore(today, 'day')) {
    nextAnniversary = nextAnniversary.add(1, 'year');
    yearsPassed++;
  }

  return yearsPassed + 1;
};

export const calculateAnnualMemo = (startDate) => {
  const start = dayjs(startDate);

  const anniversaryNumber = calculateNextAnniversaryNumber(startDate);
  const nextAnniversary = start.add(anniversaryNumber, 'year');

  const remainingDays = nextAnniversary.diff(today, 'day');

  const formattedMemoTime = withNumberSuffix(anniversaryNumber);

  return {
    remainingDays,
    formattedMemoTime,
  };
};

export const withNumberSuffix = (number) => {
  if (number >= 11 && number <= 13) {
    return `${number}th`;
  }

  const lastDigit = number % 10;
  if (lastDigit === 1) {
    return `${number}st`;
  } else if (lastDigit === 2) {
    return `${number}nd`;
  } else if (lastDigit === 3) {
    return `${number}rd`;
  } else {
    return `${number}th`;
  }
};
