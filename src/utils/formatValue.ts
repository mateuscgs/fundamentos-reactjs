const formatValue = (value: number): string =>
  Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
