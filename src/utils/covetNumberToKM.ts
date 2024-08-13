export const convertNumberToKMB = (num: number) => {
  if (num >= 10000) {
    return (num / 1000) + 'k';
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else {
    return num.toString();
  }
};
