import displayCounter  from './getfoods.js';

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
        <h4>&copy; Created by Microverse under CC license</h4>
    </footer>
  </div>
  `;
});

describe('Check counter count for all items on page', () => {
  test('The beef selector should signify  (42) ', () => {
    const beefElement = document.querySelector("li");
    displayCounter(beefElement, 42);
    expect(beefElement.textContent).toEqual('Beef (42)');
  });
});
