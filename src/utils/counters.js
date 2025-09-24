export const updateCategoryCount = (categoryElement, count) => {
  if (!categoryElement) {
    return;
  }
  const label = categoryElement.dataset.label
    ? categoryElement.dataset.label
    : categoryElement.textContent.split('(')[0].trim();
  categoryElement.textContent = `${label} (${count})`;
};

export const updateCommentsCount = (count) => {
  const commentsHeader = document.getElementById('numberOfComments');
  if (commentsHeader) {
    commentsHeader.textContent = `Comments(${count})`;
  }
};
