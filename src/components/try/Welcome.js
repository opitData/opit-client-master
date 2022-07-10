import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default (props) => {
    return (
        <>
            <SafeAreaView>
                <View style={{ backgroundColor: 'red', width: '100%', height: 50, alignSelf: 'center' }}>
                    <Text style={{ color: 'black' }}>
                        {props.name}
                    </Text>
                </View>
            </SafeAreaView>
        </>
    )
}