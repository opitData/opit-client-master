import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles/Styles';
import i18 from '../../i18/i18n';

export default (props) => {
    const [value, setValue] = useState('');

    const handleChange = (value) => {
        setValue(value)
        props.setFormValuesFunc(props.field, value)
    }
    const handleBlur = (value) => {
        setValue(value)
        props.setFormValuesFunc(props.field, value)
    }
    const form = 'form'.toString();

    return (
        <TextInput
            onChangeText={(txt) => handleChange(txt)}
            onBlur={(txt) => handleBlur(txt)}
            value={props.formValues[props.field]}
            style={styles.input}
            placeholder={i18.t(`${form}.${props.field}`)}
            placeholderTextColor={'#FFFFFF99'}
        />
    )
}