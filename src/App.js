import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
class App extends Component {
    state = {
        userInput: '',
    };

    inputChangeHandler = (event) => {
        this.setState({ userInput: event.target.value });
    };
    deleteCharHandler = (index) => {};
    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return (
                <Char
                    character={ch}
                    key={index}
                    onCLickedFn={() => this.deleteCharHandler(index)}
                />
            );
        });
        let userInputLength = null;
        if (this.state.userInput.length > 0) {
            userInputLength = (
                <p>
                    {this.state.userInput} length ={' '}
                    {this.state.userInput.length}
                </p>
            );
        }
        return (
            <div className='App'>
                <input
                    type='text'
                    onChange={this.inputChangeHandler}
                    value={this.state.userInput}
                />
                {userInputLength}
                <Validation inputLenght={this.state.userInput.length} />
                {charList}
            </div>
        );
    }
}

export default App;
