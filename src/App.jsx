import React from 'react';

function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <nav>
        <ol>
          <a href="/read/1">
            <li>html</li>
          </a>
          <a href="/read/2">
            <li>css</li>
          </a>
          <a href="/read/3">
            <li>js</li>
          </a>
        </ol>
      </nav>
      <article>
        <h2>Welcom</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
