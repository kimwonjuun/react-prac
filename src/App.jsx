import React from 'react';

// 함수 안 {} 는 표현식으로 해석됨.
function Header(props) {
  // console.log('props', props, props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav({ topics, onChangeMode }) {
  //   console.log('topics', topics);
  const lis = [];

  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
    // console.log(topics);
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  // console.log('props', props);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
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
      <Header
        title="WEB"
        onChangeMode={() => {
          alert('Header');
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      />
      <Article title="WELCOME" body="Hello, WEB" />
    </div>
  );
}

export default App;
