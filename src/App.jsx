import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}
function Nav() {
  return (
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
  );
}
function Article() {
  return (
    <article>
      <h2>Welcom</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div>
      <Header title="react" />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
