import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => {
    const {
        children,
        direction,
        style
    } = props;
    return (
        <>
            <View style={[_styles(direction).row, style]}>
                {children}
            </View>
        </>
    )
}

const _styles = (direction) => StyleSheet.create(
    {
        row: {
            flexDirection: 'row',
            direction
        }
    }
)
