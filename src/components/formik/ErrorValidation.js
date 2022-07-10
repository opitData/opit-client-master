import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import T from '../genericComponents/T'

const ErrorMessage = ({ errorValue }) => (

    <View style={styles.container}>
        {/* <Text style={styles.errorText}>{errorValue}</Text> */}
        <T
            style={styles.errorText}
            text={errorValue}
        />
    </View>

)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // width: '90%',
        marginHorizontal: 12,
        alignSelf: 'flex-start'
    },
    errorText: {
        marginLeft: 3
        ,
        color: 'red'
    }
})

export default ErrorMessage