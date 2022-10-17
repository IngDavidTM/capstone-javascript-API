const displayData = (arr) => {
  const board = document.getElementById("food");
  board.innerHTML = "";

  arr.forEach((food) => {
    const item = document.createElement("Div");
    item.innerHTML = `img src=&{food.strMealT}`;
  });
};
