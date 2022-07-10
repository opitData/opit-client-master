import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import { navigateScreen } from '../../routes/routes';
import Styles, { returnBoldTxt } from '../../styles/Styles';
import T from './T';

export default (props) => {

    const {
        settingsList
    } = props;

    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() => {
                        navigateScreen(props, item.navigate, item.params && item.params)
                    }}
                >
                    {/* <Text style={[Styles.settingItemTxt, returnBoldTxt(19)]}>
                        {item.item}
                    </Text> */}
                    <T
                        style={[Styles.settingItemTxt, returnBoldTxt(19)]}
                        text={item.item}
                    />
                </TouchableOpacity>
                <View style={Styles.headerBottomDivider}></View>
            </>
        )
    }
    return (
        <>
            <ScrollView>
                <FlatList
                    data={settingsList}
                    renderItem={renderItem}
                    keyExtractor={(o, index) => index}
                />
            </ScrollView>
        </>
    )
}

const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65
        },

    }
)