import React, { useEffect, useState } from 'react';
import {
    PixelRatio,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Bold } from '../../styles/SystemFonts';
import T from '../genericComponents/T';

export default (props) => {
    const {
        data,
        selectedItem,
        setSelectedItem,
        returnTxt,
        style,
        renderItem,
        repeat,
        centerContent,
        height,
        key
    } = props;

    const [offset, setOffset] = useState(0);
    const [index, setIndex] = useState(0);
    const [dataToShow, setDataToShow] = useState([data[0], data[1], data[2]]);
    const [direction, setDirection] = useState('');

    const setStateDirectionFunc = async (direction) => {
        await setDirection(direction)
    }

    useEffect(() => {
        setSelectedItem(dataToShow[1])
    }, [dataToShow])

    const returnTxtStyle = (item) => {
        return {
            fontFamily: Bold,
            fontSize: PixelRatio.getFontScale() + 20,
            color: selectedItem == item ? 'white' : '#364462',
            textAlign: centerContent ? 'center' : null
        }
    }

    const scroll = (direction) => {
        let tempArr = dataToShow;
        if (direction == 'down' && index > 0) {
            tempArr.splice(2, 1);
            tempArr.unshift(data[index - 1])
            setDataToShow(tempArr)
            setIndex(index - 1)
            setSelectedItem(tempArr[1])
        }
        else if (direction == 'up' && index < data.length - 2) {
            tempArr.splice(0, 1);
            tempArr.push(data[index + 3])
            setDataToShow(tempArr)
            setIndex(index + 1)
            setSelectedItem(tempArr[1])
        }
    }

    const setDirectionFunc = async (event) => {
        if (offset < event.nativeEvent.contentOffset.y) {
            setStateDirectionFunc('up')
            scroll('up')
        }
        else if (offset > event.nativeEvent.contentOffset.y) {
            setStateDirectionFunc('down')
            scroll('down');
        }
        else scroll(direction);
    }

    const setOffsetFunc = (event) => {
        setOffset(event.nativeEvent.contentOffset.y)
    }
    return (
        <>
            <ScrollView
                // nestedScrollEnabled={Platform.OS == 'android' ? true : false}
                alwaysBounceVertical={true}
                style={[style, { height: height }]}
                contentContainerStyle={{ justifyContent: 'center' }}
                onScrollBeginDrag={(event) => { setOffsetFunc(event) }}
                onScrollEndDrag={(event) => setDirectionFunc(event)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View>
                    {dataToShow.map((item, index) =>
                        <>
                            {renderItem ? renderItem(item) :
                                <>
                                    <View style={{ padding: 4, justifyContent: 'center', }}>
                                        <T
                                            style={returnTxtStyle(item)}
                                            text={returnTxt ? returnTxt(item) : item}
                                        />
                                        {/* <Text style={returnTxtStyle(item)}>
                                            {returnTxt ? returnTxt(item) : item}
                                        </Text> */}
                                    </View>
                                    {/* <View style={{ backgroundColor: 'green', height: 5 }}></View> */}
                                </>
                            }
                        </>
                    )}
                </View>
            </ScrollView>
        </>
    )
}