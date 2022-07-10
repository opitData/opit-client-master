import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Animated,
    TouchableOpacity
} from 'react-native'

class Animations extends Component {

    componentWillMount = () => {
        this.animatedWidth = new Animated.Value(0)
        this.animatedHeight = new Animated.Value(0)
    }

    render() {
        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
        return (
            <>
                {
                    Animated.timing(this.animatedWidth, {
                        toValue: 200,
                        duration: 2300
                    }).start(),
                    Animated.timing(this.animatedHeight, {
                        toValue: 8,
                        duration: 500,
                    }).start(() => {

                    })
                }

                <View style={styles.container}>
                    <View>
                        <Animated.View style={[styles.oplit, animatedStyle]} />
                    </View>
                </View>
            </>
        )
    }
}
export default Animations

const styles = StyleSheet.create({
    container: {
        // width: 200,
        // height: 8,
        backgroundColor: "#007FFF",
        borderRadius: 5,
        marginTop: 8
    },
    oplit: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: 50,
        height: 100
    }
})