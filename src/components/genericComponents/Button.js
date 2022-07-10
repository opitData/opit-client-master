import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import { dominant } from "../../styles/SystemColor";
import styles from '../../styles/Styles';
import { Regular } from '../../styles/SystemFonts';
import T from './T';

export default (props) => {

    const {
        kind,
        handlePress,
        size,
        width,
        content,
        //outline button
        smallborderWidth,
        colorOutline,
        backgroundColor
    } = props;

    const sizeButton = () => {
        switch (size) {
            case 'large':
                return 55
            case "small":
                return 45
            default:
                return 50
        }
    }


    const linearGradientBtn = () => {

        return {
            height: sizeButton(),
            width: width && width,
            paddingHorizontal: 20,
            marginHorizontal: 10,
            //outline button
            borderColor: colorOutline ? colorOutline : null,
            borderWidth: smallborderWidth ? 0.5 : kind ? 1 : 0,
        }
    }

    const getColor = () => {
        switch (kind) {
            case 'outline':
                return ['transparent', 'transparent']
            default:
                return [backgroundColor ? backgroundColor : dominant, backgroundColor ? backgroundColor : '#FF6813']
        }
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={_styles().shaddow}
        >
            <LinearGradient colors={getColor()} style={[_styles().linearGradientBtn, linearGradientBtn()]}>
                {/* <Text style={[styles.noteTxt, _styles(colorOutline).txtBtn]}>
                    {content}
                </Text> */}
                <T
                    style={[styles.noteTxt, _styles(colorOutline).txtBtn]}
                    text={content}
                />
            </LinearGradient>
        </TouchableOpacity>
    )

}


const _styles = (colorOutline) => StyleSheet.create({
    shaddow: {
        shadowColor: dominant,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    txtBtn: {
        // fontWeight: 'bold',
        color: colorOutline ? colorOutline : 'white',
        fontFamily: Regular
    },

})