import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FlatList,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { navigateScreen } from '../../routes/routes';
import styles, { headerWithTitle, returnBoldTxt } from '../../styles/Styles';
import SettingsList from '../genericComponents/SettingsList';
import Header from '../header/Header';
import T from '../genericComponents/T';

function Setting(props) {

    const {
        t
    } = useTranslation();

    const settings = 'settings'.toString();

    const jsonSetting = [
        {
            item: t(`${settings}.generalManagement`),
            navigate: 'GeneralManagement'
        },
        {
            item: t(`${settings}.accountManagement`),
            navigate: 'AccountManagement'
        },
        {
            item: t(`${settings}.history`),
            navigate: 'History',
        },
        {
            item: t(`${settings}.carNumberManagement`),
            navigate: 'CarNumManagement'
        },
        {
            item: t(`${settings}.addingUserRequest`),
            // navigate: 'CarNumManagement'
        },
        {
            item: t(`${settings}.administratorPrivileges`),
            navigate: 'AdminPrivileges',
        },
        {
            item: t(`${settings}.termsAndPrivacy`)
        },
        {
            item: t(`${settings}.contactUs`),
            navigate: 'ContactUs',
            params: { title: t(`${settings}.contactUs`) }
        },
        {
            item: t(`${settings}.logOut`)
        },
    ]

    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() => {
                        navigateScreen(props, item.navigate, item.params && item.params)
                    }}
                >
                    <T
                        style={[styles.settingItemTxt, returnBoldTxt(19)]}
                        text={item.item}
                    />
                    {/* <Text style={[styles.settingItemTxt, returnBoldTxt(19)]}>
                        {item.item}
                    </Text> */}
                </TouchableOpacity>
                <View style={styles.headerBottomDivider}></View>
            </>
        )
    }

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <T
                        style={headerWithTitle()}
                        text={t(`${settings}.title`)}
                    />
                    // <Text style={headerWithTitle()}>{t(`${settings}.title`)}</Text>
                }
            />
            {/* <ScrollView>
                <FlatList
                    data={jsonSetting}
                    renderItem={renderItem}
                    keyExtractor={(o, index) => index}
                />
            </ScrollView> */}
            <SettingsList
                settingsList={jsonSetting}
                {...props}
            />
        </>
    )

}

export default Setting;


const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65
        },

    }
)