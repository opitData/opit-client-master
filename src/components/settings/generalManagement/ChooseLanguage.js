import React, { useState } from 'react';
import Header from '../../header/Header';
import {
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    View,
    StyleSheet,
    PixelRatio
} from 'react-native';
import styles from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';
import ArrowBack from '../../../assets/arrowBack.svg'
import Row from '../../genericComponents/Row';
import Check from '../../../assets/svg/check.svg';
import { Regular } from '../../../styles/SystemFonts';
import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import ChangeLanguageDialog from '../../dialog/ChangeLanguage.dialog';
import RNRestart from 'react-native-restart';
import Wrap from '../Wrap';
import { languages } from '../../../i18/languageList';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';

function ChooseLanguage(props) {
    const {
        _language,
        _setLanguage,
        navigation
    } = props;
    const { t, i18n } = useTranslation();
    const chooseLanguage = 'chooseLanguage'.toString();
    const [visible, setVisible] = useState(false);
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() => {
                        _setLanguage(item)
                        i18n.changeLanguage(item.i18)
                        setVisible(true)
                    }}
                >
                    <Row>
                        <View style={{ width: 70, alignItems: 'center' }}>
                            {
                                _language.index == item.index &&
                                <Check />
                            }
                        </View>
                        <T
                            style={[_styles.itemTxt]}
                            text={item.item}
                        />
                        {/* <Text style={[_styles.itemTxt]}>
                            {item.item}
                        </Text> */}
                    </Row>
                </TouchableOpacity>
                <View style={styles.headerBottomDivider}></View>
            </>
        )
    }

    return (
        <>
            <HeaderWrapper
                title={t(`${chooseLanguage}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <ScrollView>
                    <FlatList
                        data={languages}
                        renderItem={renderItem}
                        keyExtractor={(o, index) => index}
                    />
                </ScrollView>

                <ChangeLanguageDialog
                    visible={visible}
                    setVisible={setVisible}
                    handlePressBtn1={() => RNRestart.Restart()}
                    handlePressBtn2={() => { }}
                />
            </HeaderWrapper>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _language: state.settings.language,
})

const mapDispatchToProps = dispatch => ({
    _setLanguage: (language) => dispatch(actions.setLanguage(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage)

const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65,
            direction: 'rtl',
        },
        row: {
            alignItems: 'center'
        },
        itemTxt: {
            // textAlign: 'right',
            fontFamily: Regular,
            fontSize: PixelRatio.getFontScale() + 20,
            lineHeight: 20
        }
    }
)