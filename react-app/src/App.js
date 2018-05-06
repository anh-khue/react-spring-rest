import React, {Component} from 'react';
import logo from './logo.svg';
import springLogo from './spring-logo.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={springLogo} className="Spring-logo" alt="spring-logo"/>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Put a little Spring and React in your app</h1>
                </header>
                <p className="App-intro">
                    React for getting API from Microservices...
                </p>
            </div>
        );
    }
}

export default App;
