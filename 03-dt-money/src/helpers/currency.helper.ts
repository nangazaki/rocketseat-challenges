export const formatCurrency = (value: number) => {
  const currency = new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA",
  });

  return currency.format(value);
};