function excludingVatPrice(price, tax = .15){
    if (price === null) return -1
    return +((price/(1+tax)).toFixed(2));
  }

  console.log(excludingVatPrice(230), 200.00);
  console.log(excludingVatPrice(123), 106.96);