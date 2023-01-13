import React from 'react';
import { useState } from 'react';

function Header(props) {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={function (event) {
                        event.preventDefault();
                        props.onChnageMode();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}
function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={'/read' + t.id}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChnageMode(event.target.id);
                    }}
                >
                    {t.title}
                </a>
            </li>
        );
    }
    return <ol>{lis}</ol>;
}
function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}
function App() {
    const [mode, setMode] = useState('WELCOME');
    const topics = [
        { id: 1, title: 'html', body: 'html is...' },
        { id: 2, title: 'css', body: 'css is...' },
        { id: 3, title: 'javascript', body: 'js is...' },
    ];
    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="hello, WEB" />;
    } else if (mode === 'READ') {
        content = <Article title="Read" body="hello, Read" />;
    }
    return (
        <div>
            <Header
                title="REACT"
                onChnageMode={function () {
                    setMode('WELCOME');
                }}
            />
            <Nav
                topics={topics}
                onChnageMode={(id) => {
                    setMode('READ');
                }}
            />
            {content}
        </div>
    );
}

export default App;
