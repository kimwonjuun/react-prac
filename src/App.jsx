import React from 'react';

// 함수 안 {} 는 표현식으로 해석됨.
function Header(props) {
  console.log('props', props, props.title);
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}
function Nav({ topics }) {
  const lis = [
    <li>
      <a href="/read/1">html</a>
    </li>,
    <li>
      <a href="/read/2">css</a>
    </li>,
    <li>
      <a href="/read/3">js</a>
    </li>,
  ];
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ];
  return (
    <div>
      <Header title="WEB" />
      <Nav topics={topics} />
      <Article title="WELCOME" body="Hello, WEB" />
    </div>
  );
}

export default App;
