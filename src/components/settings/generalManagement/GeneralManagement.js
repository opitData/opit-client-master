import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../header/Header';
import {
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import styles, { returnBoldTxt } from '../../../styles/Styles';
import { navigateScreen } from '../../../routes/routes';
import Row from '../../genericComponents/Row';
import ArrowBack from '../../../assets/arrowBack.svg'
import Wrap from '../Wrap';
import HeaderWrapper from '../../header/HeaderWrapper';
import SettingsList from '../../genericComponents/SettingsList';
import T from '../../genericComponents/T';

export default (props) => {
    const { t } = useTranslation();
    const generalManagement = 'generalManagement'.toString();
    const jsonSetting = [
        {
            item: t(`${generalManagement}.chooseLanguage`),
            navigate: 'ChooseLanguage'
        },
        {
            item: t(`${generalManagement}.notificationsManagement`),
            navigate: 'NotificationsManagement'
        },
        {
            item: t(`${generalManagement}.about`),
            navigate: 'About'
        },

    ]
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() =>
                        // alert(item.navigate)
                        navigateScreen(props, item.navigate)
                    }
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
    const { navigation } = props;
    return (
        <>

            <HeaderWrapper
                title={t(`${generalManagement}.title`)}
                navigation={navigation}
                arrow={true}
            >
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
            </HeaderWrapper>
        </>
    )
}

const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65
        },
        row: {
            alignItems: 'center'
        },

    }
)