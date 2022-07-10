import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FlatList,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Wrap from '../Wrap';
import styles, { returnBoldTxt } from '../../../styles/Styles';
import { navigateScreen } from '../../../routes/routes';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';

function AccountManagement(props) {

    const { t } = useTranslation();
    const txt = 'accountManagement'.toString();
    const jsonSetting = [
        {
            item: t(`${txt}.firstSetting`),
            navigate: 'UserDetails1'
        },
        {
            item: t(`${txt}.secondSetting`),
            navigate: 'PaymentManagement'
        },
        {
            item: t(`${txt}.thirdSetting`),
            navigate: 'AuthorizedManagement'
        },
        {
            item: t(`${txt}.fourthSetting`),
            navigate: 'About'
        },

    ]
    const {
        navigation
    } = props;
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() =>
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
    return (
        <>

            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <ScrollView>
                    <FlatList
                        data={jsonSetting}
                        renderItem={renderItem}
                        keyExtractor={(o, index) => index}
                    />
                </ScrollView>
            </HeaderWrapper>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AccountManagement);

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