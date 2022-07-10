import React from 'react';
import {
    setCustomText
} from 'react-native-global-props';
import App from '../../App';

const customTextProps = {
    style: {
        // fontFamily: "Assistant-Regular",
        color: '#FFFFFF'
    }
};
// Calling the functions and passing the custom props into their respective params
setCustomText(customTextProps);

const Main = () => {
    return (
        <App />
    );
};

export default Main;