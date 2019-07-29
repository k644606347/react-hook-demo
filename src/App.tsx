import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    let [ name, setName ] = useState('jiangyu3');

    useEffect((...args) => {
        console.log(args);
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    onClick={e => {
                        let result = window.prompt('请输入姓名:', name);
                        if (result) {
                            setName(result);
                        }
                    }}
                >
                    Your Name: {name}
                </a>
            </header>
        </div>
    );
}

export default App;
