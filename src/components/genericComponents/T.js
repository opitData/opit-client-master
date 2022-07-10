import React, { useEffect, useState } from 'react';
import { Dimensions, Text } from 'react-native';

function T(props) {
    const {
        fontSize, text, style, numberOfLines
    } = props;
    const [currentFont, setCurrentFont] = useState(fontSize ? fontSize : style.fontSize ? style.fontSize : 16);
    return (
        <Text
            numberOfLines={numberOfLines ? numberOfLines : 1}
            adjustsFontSizeToFit
            style={[style, { fontSize: currentFont, }]}
            onTextLayout={(e) => {
                const { lines } = e.nativeEvent;
                if (lines.length > numberOfLines || e.nativeEvent.lines[0].width > Dimensions.get('window').width * 0.75) {
                    setCurrentFont(currentFont - 1);
                }
            }}
        >
            {text}
        </Text>
    );
};


export default T;