import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
} from 'react-native';
import {
    bg,
    dark,
    ligth,
    note
} from '../../styles/SystemColor';

import { initReactI18next, useTranslation } from 'react-i18next';
import Arrow1 from '../../assets/svg/Arrow1.svg';
import Arrow2 from '../../assets/svg/Arrow2.svg';
import { Regular } from '../../styles/SystemFonts';
import T from '../genericComponents/T';


export default (props) => {

    const {
        array,
        handleChange,
        txtNote,
        lines,
        border
    } = props;

    const [list, setList] = useState([]);
    const [flagOpen, setFlagOpen] = useState(false);

    useEffect(() => {
        setList(array)
    }, [array])

    const changeLanuage = (item) => {
        //open the dropdown
        !flagOpen && setFlagOpen(true);

        //replace language and close the dropdown
        flagOpen && setFlagOpen(false);

        const newLanguagesList = list.filter(lan => lan.index != item.index)
        const newList = [
            item,
            ...newLanguagesList
        ]
        setList(newList)

        handleChange && handleChange(item);
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => changeLanuage(item)}
                activeOpacity={0.6}
                key={index}
                style={_styles().listItem}
            >
                {
                    <View
                        style={_styles().icon}>
                        {
                            index === 0 && array.length > 1
                                ?
                                flagOpen ?
                                    <Arrow1
                                        fill="white"
                                    />
                                    :
                                    <Arrow2
                                        fill="white"
                                    />
                                :
                                null
                        }
                    </View>
                }
                <View style={_styles().listWrapper}>
                    <View>
                        <T
                            style={txtNote && index != 0 ? _styles().txtNote : _styles().listNameText}
                            text={item.item}
                            numberOfLines={1}
                        />
                    </View>
                    {
                        flagOpen
                        &&
                        lines &&
                        <View style={[_styles().devider]}></View>
                    }
                </View>
                <View style={_styles().emptyView} />
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={_styles().wrap}>
            <View style={_styles(border).wrapFlatList}>
                {
                    list.length
                        ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={!flagOpen ? [list[0]] : list}
                            renderItem={(item, index) => renderItem(item, index)}
                            keyExtractor={item => item.index}
                        />
                        :
                        null
                }
            </View>
        </View>
    )
}

const _styles = (border) => StyleSheet.create(
    {
        wrap: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        listItem: {
            height: 43,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        wrapFlatList: {
            width: '50%',
            borderWidth: border ? 1 : 0,
            borderColor: ligth,
            borderRadius: 8,
            backgroundColor: dark
        },
        icon: {
            flex: 0.9,
            alignItems: 'flex-end',
            paddingRight: 10
        },
        emptyView: {
            flex: 0.9,
            alignItems: 'center'
        },
        devider: {
            width: '75%',
            borderBottomWidth: 0.5,
            borderBottomColor: ligth
        },
        listNameText: {
            color: ligth,
            fontSize: PixelRatio.getFontScale() + 18,
            textAlign: 'center',
            marginVertical: 10,
            fontFamily: Regular
        },
        listRow: {
            height: 45,
            // flexDirection: 'row',
        },
        listWrapper: {
            // backgroundColor:'yellow',
            // borderBottomColor: ligth,
            // borderBottomWidth: 1,
            flex: 2.2,
            alignItems: 'center'
        },
        txtNote: {
            color: note,
            fontSize: PixelRatio.getFontScale() + 18,
            textAlign: 'center',
            marginVertical: 10,
        }

    }
)
