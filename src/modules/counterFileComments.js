const numberOfComments = async (count) => {
  const h4 = document.getElementById('numberOfComments');
  h4.innerHTML = `Comments(${count})`;
};

export default numberOfComments;