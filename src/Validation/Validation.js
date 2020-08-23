import React from 'react';

const Validation = (props) => {
    let validationMessage = '';
    if (props.inputLenght > 0) {
        if (props.inputLenght < 8) {
            validationMessage = 'Text Too Short!';
        } else {
            validationMessage = 'Valid Text';
        }
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default Validation;
