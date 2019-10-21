import dayjs from 'dayjs';

export const capitaliseString = string => {
  const capitalisedString = string.slice();
  return capitalisedString.charAt(0).toUpperCase() + capitalisedString.slice(1);
};

export const formatDate = date => {
  return dayjs(date).format('D MMM YYYY, HH:mm');
};
