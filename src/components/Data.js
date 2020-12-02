const data = require("./../data/product_master.json");

data.map((option) => {
  // New properties to be added
  const newPropsObj = {
    value: 0,
    liked: false,
    addcart: false
  };

  // Assign new properties and return
  return Object.assign(option, newPropsObj);
});
console.log(data);

export default data;
