import React, { useRef, useState } from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Keyboard,
    PixelRatio
} from 'react-native';
import { ligth } from '../../styles/SystemColor';

export default (props) => {

    const {
        setCodeNumber,
        codeNumber
    } = props;

    const inputRef = useRef([]);

    const handler = idx => e => {
        const next = inputRef.current[idx + 1];
        if (next) {
            next.focus()
        }
        if (idx + 1 === 6)
            Keyboard.dismiss()
    };

    const textInput = (index) =>
        <TextInput
            ref={el => inputRef.current[index] = el}
            onChange={handler(index)}
            key={index}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => setCodeNumber(value)}
            borderColor="#FFFFFF"
            selectionColor="#FFFFFF"
            autoFocus={index === 0}
            style={[_styles.textInput]}
            placeholderTextColor="#FFFFFF99"
        // returnKeyType={index != 5 && 'next'}
        />

    const threeTextInput = (initIndex) =>
        [...Array(3)].map((item, index) =>
            textInput(index + initIndex))


    return (
        <View style={_styles.rowInputs}>
            {threeTextInput(0)}
            <View style={_styles.space} />
            {threeTextInput(3)}
        </View>
    )
}

const _styles = StyleSheet.create(
    {
        space: {
            width: '5%'
        },
        rowInputs: {
            flexDirection: 'row',
            marginHorizontal: '1%',
            justifyContent: 'center',
            margin: 30
        },
        textInput: {
            // height: 40,
            width: '8%',
            color: ligth,
            borderBottomWidth: 1.5,
            fontSize: PixelRatio.getFontScale() + 23,
            textAlign: 'center',
            marginHorizontal: '2%',
        }
    }
)
