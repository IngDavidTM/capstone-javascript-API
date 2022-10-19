import displayCounter from '../modules/counterFile.js';

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