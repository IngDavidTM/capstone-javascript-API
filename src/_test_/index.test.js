import displayCounter from '../modules/counterFile.js';
import numberOfComments from '../modules/counterFileComments.js';

beforeAll(() => {
  document.body.innerHTML = `  
  <div class="container">
    <header>
        <div class="logo">
            <h1>Logo Page</h1>
        </div>
        <nav class="nav-bar">
            <ul class="nav-bar-list">
                <li class="selected">Beef</li>
                <li>Pasta</li>
                <li>Seafood</li>
            </ul>
        </nav>
    </header>
    <main class="container-food-cards">
    </main>
    <div id="popSection">
      <section>
        <div class="popUpDiv">
          <div class="commentsContainer">
            <h4 id="numberOfComments"></h4>
          </div>
        </div>
      </section>
    </div>
    <footer>
        <h4>&copy; Created by Shedrack and David</h4>
    </footer>
  </div>
  `;
});

describe('Check counter all item function', () => {
  test('Should be show Beef (42) ', () => {
    const beefElement = document.querySelector('li');
    displayCounter(beefElement, 42);
    expect(beefElement.textContent).toEqual('Beef (42)');
  });
});

describe('Check counter all the comments', () => {
  test('Should be show Comments(29) ', () => {
    numberOfComments(29);
    const comments = document.getElementById('numberOfComments');
    expect(comments.textContent).toEqual('Comments(29)');
  });
});