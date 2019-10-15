export const capitaliseString = string => {
  const capitalisedString = string.slice();
  return capitalisedString.charAt(0).toUpperCase() + capitalisedString.slice(1);
};

export const formatDate = date => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  };
  const formattedDate = new Date(date.slice()).toLocaleDateString(
    'en-GB',
    options
  );

  return formattedDate;
};
