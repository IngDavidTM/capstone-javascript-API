const displayCounter = (foodChosen, count) => {
  foodChosen.innerHTML = `${foodChosen.textContent} (${count})`;
};

export default displayCounter;
