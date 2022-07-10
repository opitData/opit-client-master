import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native';
import { Bold, Regular } from '../../styles/SystemFonts';
import T from './T';

export default (props) => {
    const {
        handlePress,
        content,
        color,
        fill,
        txtColor,
        size,
        width,
        borderRadius,
        accessibilityValue
    } = props;

    const sizeButton = () => {
        switch (size) {
            case 'large':
                return 55
            case "small":
                return 45
            case "x-small":
                return 38
            default:
                return 50
        }
    }

    const btnStyle = () => {
        return {
            height: sizeButton(),
            backgroundColor: fill ? color : 'transparent',
            borderColor: color,
            borderWidth: 1,
            borderRadius: borderRadius ? borderRadius : 15,
            width: width ? width : Dimensions.get('window').width / 2.5,
        }
    }

    const txtStyle = () => {
        return {
            color: fill ? 'black' : 'white',
            fontSize: PixelRatio.getFontScale() + 18
        }
    }

    return (
        <>
            <TouchableOpacity
                onPress={handlePress}
                style={[_styles().btn, btnStyle()]}
            // accessibilityValue={accessibilityValue}
            >
                {/* <Text style={[_styles().txt, txtStyle()]}>
                    {content}
                </Text> */}
                <T
                    style={[_styles().txt, txtStyle()]}
                    text={content}
                />
            </TouchableOpacity>
        </>
    )
}

const _styles = (color,) => StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    txt: {
        fontFamily: Bold,
        // fontWeight: 'bold',
        fontSize: PixelRatio.getFontScale() + 16
    }
})