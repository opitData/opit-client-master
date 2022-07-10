import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Plus from '../../assets/svg/Plus.js';

export default (props) => {

    const {
        handlePress
    } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={handlePress}
            style={_styles.closeIcon}
        >
            <Plus width={18} height={18} />
        </TouchableOpacity>
    )
}

const _styles = StyleSheet.create(
    {
        closeIcon: {
            width: 48,
            height: 48,
            borderRadius: 60,
            backgroundColor: '#3EA2FF',
            zIndex: 2,
            right: -7,
            top: -10,
            alignSelf: 'flex-end',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
)