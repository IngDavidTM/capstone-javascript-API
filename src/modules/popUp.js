import addComment from './addComments.js';
import getComments from './getComments.js';

const popSection = document.getElementById('popSection');
const popUp = async (index) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
  const json = await data.json();
  const { meals } = json;
  const mealData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals[index].idMeal}`);
  const jsonMeal = await mealData.json();
  const specificMeal = jsonMeal.meals[0];
  const section = document.createElement('section');
  section.className = 'popUp';
  popSection.appendChild(section);
  const div = document.createElement('div');
  div.className = 'popUpDiv';
  section.appendChild(div);
  const button = document.createElement('button');
  button.id = 'buttonX';
  button.className = 'buttonX';
  button.innerHTML = '<i class="fa-solid fa-xmark" ></i>';
  div.appendChild(button);
  const imgs = document.createElement('img');
  imgs.src = meals[index].strMealThumb;
  div.appendChild(imgs);
  const h3 = document.createElement('h3');
  h3.innerHTML = meals[index].strMeal;
  div.appendChild(h3);
  const divP = document.createElement('div');
  divP.className = 'divP';
  div.appendChild(divP);
  const p1 = document.createElement('p');
  p1.innerHTML = `<strong>Area:</strong> ${specificMeal.strArea}`;
  divP.appendChild(p1);
  const p2 = document.createElement('p');
  p2.innerHTML = `<strong>Category:</strong> ${specificMeal.strCategory}`;
  divP.appendChild(p2);
  const divDown = document.createElement('a');
  divDown.href = '#instructions';
  divDown.className = 'scrollDown';
  divDown.innerHTML = '<i class="fa-solid fa-circle-chevron-down"></i>';
  div.appendChild(divDown);
  const p3 = document.createElement('p');
  p3.id = 'instructions';
  p3.innerHTML = `<strong>Instructions:</strong> ${specificMeal.strInstructions}`;
  div.appendChild(p3);
  const div1 = document.createElement('div');
  div1.className = 'commentsContainer';
  div.appendChild(div1);
  const h4 = document.createElement('h4');
  h4.id = 'numberOfComments';
  h4.innerHTML = 'Comments(0)';
  div1.appendChild(h4);
  const divComments = document.createElement('div');
  divComments.id = 'divComments';
  divComments.className = 'divComments';
  div1.appendChild(divComments);
  const h4Add = document.createElement('h4');
  h4Add.innerHTML = 'Add a comment';
  div.appendChild(h4Add);
  const form = document.createElement('form');
  form.innerHTML = '<input type="text" name="name" id="nameF" placeholder="Your name" maxlength="30"><textarea name="comment" id="textComment" cols="30" rows="5" placeholder="Your insights" maxlength="250"></textarea><button id="submit" type="submit">Comment</button>';
  div.appendChild(form);
  button.addEventListener('click', () => {
    popSection.innerHTML = '';
  });
  const submit = document.getElementById('submit');
  submit.addEventListener('click', async (e) => {
    e.preventDefault();
    const nameF = document.getElementById('nameF').value;
    const commentF = document.getElementById('textComment').value;
    if (nameF !== '' && commentF !== '') {
      document.getElementById('nameF').value = '';
      document.getElementById('textComment').value = '';
      addComment(index, nameF, commentF);
    } else {
      const error = document.createElement('p');
      error.className = 'error';
      error.innerHTML = 'Please fill all the requirements';
      setTimeout(() => {
        error.remove();
      }, 3000);
      form.appendChild(error);
      document.getElementById('textComment').insertAdjacentElement('afterend', error);
    }
  });
  await getComments(index);
};

export default popUp;