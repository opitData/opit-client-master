import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { dominant, dominantDark } from '../../styles/SystemColor';
import PlusIcon from '../../assets/svg/plusIcon.svg';

export default (props) => {

    const {
        backgroundColor,
        size,
        iconColor,
        handlePress
    } = props;

    const plusIcon = () => {
        return {
            fontWeight: '180',
            textAlign: 'center',
            color: iconColor
        }
    }

    const buttonPlus = () => {
        return {
            width: size ? size : 50,
            height: size ? size : 50,
            shadowColor: dominant,
            shadowOpacity: 0.50,
            shadowRadius: 30,
            shadowOffset: { height: 10, width: 0 },
            position: 'absolute',
            bottom: 20,
            left: 20
        }
    }

    return (
        <TouchableOpacity
            style={buttonPlus()}
            onPress={handlePress}
        >
            <LinearGradient
                colors={[dominant, dominantDark]}
                style={[_styles().linearGradientBtn, _styles().iconPlus,]}
            >
                <PlusIcon
                    width={25}
                    height={25}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

const _styles = () => StyleSheet.create({
    viewPlus: {
        // marginLeft: '76%',
        backgroundColor: 'transparent'
    },

    place: {
        padding: 15,
        justifyContent: 'flex-end',
    },
    iconPlus: {
        height: 50,
        width: 50
    },
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})