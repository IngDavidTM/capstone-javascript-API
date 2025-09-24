import { fetchMealDetails } from '../api/mealsApi.js';
import { fetchCommentsForItem, submitCommentForItem } from '../services/commentsService.js';
import { updateCommentsCount } from '../utils/counters.js';

const popSection = document.getElementById('popSection');
let activeEscHandler = null;

const renderComments = (container, comments) => {
  container.innerHTML = '';
  comments.forEach((comment) => {
    const paragraph = document.createElement('p');
    paragraph.className = 'listOfComment';
    paragraph.textContent = `${comment.creation_date}  ${comment.username}: ${comment.comment}`;
    container.appendChild(paragraph);
  });
  updateCommentsCount(comments.length);
};

const createValidationError = (form) => {
  const error = document.createElement('p');
  error.className = 'error';
  error.textContent = 'Please fill all the requirements';
  form.appendChild(error);
  setTimeout(() => {
    error.remove();
  }, 3000);
};

const closeModal = () => {
  if (popSection) {
    popSection.innerHTML = '';
  }
  document.body.style.overflow = '';
  if (activeEscHandler) {
    document.removeEventListener('keydown', activeEscHandler);
    activeEscHandler = null;
  }
};

const attachCloseHandler = (button) => {
  button.addEventListener('click', closeModal);
};

const showMealModal = async (meal, itemIdentifier = meal.idMeal) => {
  if (!popSection) {
    return;
  }

  const mealDetails = await fetchMealDetails(meal.idMeal);

  popSection.innerHTML = '';
  document.body.style.overflow = 'hidden';

  const section = document.createElement('section');
  section.className = 'popUp';
  popSection.appendChild(section);

  const wrapper = document.createElement('div');
  wrapper.className = 'popUpDiv';
  section.appendChild(wrapper);

  section.addEventListener('click', (event) => {
    if (event.target === section) {
      closeModal();
    }
  });

  activeEscHandler = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
    }
  };
  document.addEventListener('keydown', activeEscHandler);

  const closeButton = document.createElement('button');
  closeButton.id = 'buttonX';
  closeButton.className = 'buttonX';
  closeButton.innerHTML = '<i class="fa-solid fa-xmark" ></i>';
  wrapper.appendChild(closeButton);
  attachCloseHandler(closeButton);

  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  wrapper.appendChild(mealImage);

  const mealTitle = document.createElement('h3');
  mealTitle.textContent = meal.strMeal;
  wrapper.appendChild(mealTitle);

  if (mealDetails) {
    const infoContainer = document.createElement('div');
    infoContainer.className = 'divP';
    wrapper.appendChild(infoContainer);

    const area = document.createElement('p');
    area.innerHTML = `<strong>Area:</strong> ${mealDetails.strArea}`;
    infoContainer.appendChild(area);

    const category = document.createElement('p');
    category.innerHTML = `<strong>Category:</strong> ${mealDetails.strCategory}`;
    infoContainer.appendChild(category);

    const scrollLink = document.createElement('a');
    scrollLink.href = '#instructions';
    scrollLink.className = 'scrollDown';
    scrollLink.innerHTML = '<i class="fa-solid fa-circle-chevron-down"></i>';
    wrapper.appendChild(scrollLink);

    const instructions = document.createElement('p');
    instructions.id = 'instructions';
    instructions.innerHTML = `<strong>Instructions:</strong> ${mealDetails.strInstructions}`;
    wrapper.appendChild(instructions);
  }

  const commentsSection = document.createElement('div');
  commentsSection.className = 'commentsContainer';
  wrapper.appendChild(commentsSection);

  const commentsHeader = document.createElement('h4');
  commentsHeader.id = 'numberOfComments';
  commentsHeader.textContent = 'Comments(0)';
  commentsSection.appendChild(commentsHeader);

  const commentsContainer = document.createElement('div');
  commentsContainer.id = 'divComments';
  commentsContainer.className = 'divComments';
  commentsSection.appendChild(commentsContainer);

  const addCommentHeader = document.createElement('h4');
  addCommentHeader.textContent = 'Add a comment';
  wrapper.appendChild(addCommentHeader);

  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" name="name" id="nameF" placeholder="Your name" maxlength="30">
    <textarea name="comment" id="textComment" cols="30" rows="5" placeholder="Your insights" maxlength="250"></textarea>
    <button id="submit" type="submit">Comment</button>
  `;
  wrapper.appendChild(form);

  const itemId = itemIdentifier ?? meal.idMeal;

  const loadComments = async () => {
    const comments = await fetchCommentsForItem(itemId);
    renderComments(commentsContainer, comments);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameField = document.getElementById('nameF');
    const commentField = document.getElementById('textComment');

    const username = nameField.value.trim();
    const comment = commentField.value.trim();

    if (!username || !comment) {
      createValidationError(form);
      return;
    }

    await submitCommentForItem(itemId, username, comment);
    form.reset();
    await loadComments();
  });

  await loadComments();
};

export default showMealModal;
