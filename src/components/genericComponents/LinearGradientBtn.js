import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import React from "react";
import { dominant } from "../../styles/SystemColor";
import styles from '../../styles/Styles';
import T from "./T";

export default (props) => {

    const {
        handlePress,
        size,
        large,
        width,
        color,
        content,
        style
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
            marginHorizontal: 10
        }
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={style}
        >
            <LinearGradient colors={[dominant, '#FF6813']} style={[_styles.linearGradientBtn, linearGradientBtn()]}>
                {/* <Text style={[styles.noteTxt, _styles.txtBtn]}>
                    {content}
                </Text> */}
                <T
                    style={[styles.noteTxt, _styles.txtBtn]}
                    text={content}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

const _styles = StyleSheet.create({
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        // fontWeight: 'bold',
        color: 'white'
    },
    styleBtn: {
        width: 120,
        height: 50,
        paddingHorizontal: 20,
        marginHorizontal: 10
    }
})