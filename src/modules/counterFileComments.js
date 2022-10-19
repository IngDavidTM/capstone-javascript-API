const numberOfComments = async () => {
  const h4 = document.getElementById('numberOfComments');
  const count = document.querySelectorAll('.listOfComment');
  h4.innerHTML = `Comments(${count.length})`;
};

export default numberOfComments;