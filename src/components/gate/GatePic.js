import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated, Button } from 'react-native';

export const GatePic = () => {
    const counter = useRef(new Animated.Value(0)).current;
    const countInterval = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        countInterval.current = setInterval(() => setCount((old) => old + 5), 1000);
        return () => {
            clearInterval(countInterval);
        };
    }, []);

    useEffect(() => {
        load(count)
        if (count >= 100) {
            setCount(100);
            clearInterval(countInterval);
        }
    }, [count]);

    const load = (count) => {
        Animated.timing(counter, {
            toValue: count,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const width = counter.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    })

    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <Animated.View
                    style={
                        ([StyleSheet.absoluteFill],
                            { backgroundColor: '#8BED4F', width })
                    }></Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'Column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progressBar: {
        height: 5,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#FFF',
        borderWidth: 0.5,
        borderRadius: 5,
    },
});