const formatDate = (dateInISOFormat: string): string =>
  Intl.DateTimeFormat('default', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(new Date(dateInISOFormat));

export default formatDate;
