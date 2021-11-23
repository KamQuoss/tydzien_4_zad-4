const toPLN = (value) =>
  parseFloat(value).toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

export default toPLN;
