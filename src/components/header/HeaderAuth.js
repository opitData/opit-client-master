import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/Styles';
import FrameIcon from '../../assets/svg/FrameIcon.svg';


export default () => {

    return (
        <View style={[styles.row, styles.wrapHeader]}>
            <FrameIcon />
        </View>
    )
}
