import React from 'react';
import { dark } from './SystemColor';
import { Bold } from './SystemFonts';

class StyleFuncs {

    returnDarkBtnStyle(width, height) {
        return {
            backgroundColor: dark,
            height: height ? height : 70,
            width: width ? width : '95%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
        }
    }

    returnDarkBtnStyleNoMargin(width, height) {
        return {
            backgroundColor: dark,
            height: height ? height : '0%',
            width: width ? width : '95%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0
        }
    }

}

export const retrurnRadioBtn = (backgroundColor) => {
    return {
        width: 25,
        height: 25,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor
    }
}

export default new StyleFuncs();