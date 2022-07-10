import React, { useRef } from 'react';
import {
    TextInput
}from 'react-native';

export default MyFormComponent = () => {

    const ref_input2 = useRef();
    const ref_input3 = useRef();

    return (
        <>
            <TextInput
                placeholder="Input1"
                autoFocus={true}
                returnKeyType="next"
                onSubmitEditing={() => ref_input2.current.focus()}
            />
            <TextInput
                placeholder="Input2"
                returnKeyType="next"
                onSubmitEditing={() => ref_input3.current.focus()}
                ref={ref_input2}
            />
            <TextInput
                placeholder="Input3"
                ref={ref_input3}
            />
        </>
    )
}
