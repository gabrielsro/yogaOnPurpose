export default (itemId) => {
  const target = document.getElementById(itemId);
  console.log(`resize ${itemId}`);
  console.log(target);

  const grid = document.getElementById("item");

  if (target.getAttribute("data-expanded") == "expanded") {
    //MATH
    const columz = window
      .getComputedStyle(grid)
      .gridTemplateColumns.split(" ").length;
    let position = +target.getAttribute("data-position");
    const place = (position += 1);

    const x = place / columz;
    const decimal = +x.toFixed(2).split(".")[1];

    if (columz == 1) {
      target.style.gridColumn = "1 / 1";
    }

    if (columz == 2) {
      if (decimal == 50) {
        target.style.gridColumn = "1/1";
      }
      if (decimal == 0) {
        target.style.gridColumn = "2/3";
      }
    }

    if (columz == 3) {
      if (decimal == 33) {
        target.style.gridColumn = "1/1";
      }
      if (decimal == 67) {
        target.style.gridColumn = "2/3";
      }
      if (decimal == 0) {
        target.style.gridColumn = "3/4";
      }
    }

    if (columz == 4) {
      if (decimal == 25) {
        target.style.gridColumn = "1/1";
      }
      if (decimal == 50) {
        target.style.gridColumn = "2/3";
      }
      if (decimal == 75) {
        target.style.gridColumn = "3/4";
      }
      if (decimal == 0) {
        target.style.gridColumn = "4/5";
      }
    }

    target.setAttribute("data-expanded", "collapsed");
    return;
  }

  const startAndEnd = window
    .getComputedStyle(target)
    .getPropertyValue("grid-column");

  console.log(startAndEnd);

  const targetStart = window
    .getComputedStyle(target)
    .getPropertyValue("grid-column-start");

  const targetEnd = window
    .getComputedStyle(target)
    .getPropertyValue("grid-column-end");

  console.log(targetStart);
  console.log(targetEnd);

  const columns = window
    .getComputedStyle(grid)
    .gridTemplateColumns.split(" ").length;
  target.style.gridColumn = `1 / span ${columns}`;
  target.setAttribute("data-expanded", "expanded");
};
