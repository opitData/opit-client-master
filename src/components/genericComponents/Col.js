import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => {
    const {
        direction,
        cols,
        style,
        children
    } = props;
    return (
        <>
            <View style={[_styles(cols, direction && direction).col, style]}>
                {children}
            </View>
        </>
    )
}

const _styles = (flex, direction) => StyleSheet.create(
    {
        col: {
            flex,
            direction
        }
    }
)
