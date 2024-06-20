const str = " 1,510 ₾ ";
const num = parseFloat(str.replace(/[\s₾,]/g, ""));
console.log(num); // Output: 1510
