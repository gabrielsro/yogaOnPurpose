export default (stateSetter) => {
  const itemName = document.getElementById("itemName");
  const itemPrice = document.getElementById("itemPrice");
  if (itemName.value && itemPrice.value) {
    stateSetter("written");
    return;
  } else {
    stateSetter("addItem");
  }
};
