const displayData = (arr) => {
  const board = document.getElementById('food');
  board.innerHTML = '';

  arr.forEach((food) => {
    const item = document.createElement('Div');
    item.innerHTML = `img src=&{food.strMealT}`;
    item.id = food.idMeal;
    board.appendChild(item);
  });
};
