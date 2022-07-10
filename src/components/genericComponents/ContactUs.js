import React from 'react';
import { useTranslation } from 'react-i18next';
import { PixelRatio, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { maxHeight } from 'styled-system';
import styles from '../../styles/Styles';
import { dark, note } from '../../styles/SystemColor';
import { Bold, Regular, Semi } from '../../styles/SystemFonts';
import HeaderWrapper from '../header/HeaderWrapper';
import Wrap from '../settings/Wrap';
import Button from './Button';
import Row from './Row';
import T from './T';

function ContactUs(props) {

    const {
        navigation
    } = props;

    const { t } = useTranslation();
    const txt = 'contactUs'.toString();
    return (
        <>
            <HeaderWrapper
                title={props.route.params.title}
                navigation={navigation}
                arrow={true}
            >
                <TextInput
                    placeholder={t(`${txt}.placeholder1`)}
                    selectionColor='white'
                    style={[_styles().input, _styles().simpleInput]}
                    placeholderTextColor={note}
                />
                <TextInput
                    placeholder={t(`${txt}.placeholder2`)}
                    selectionColor='white'
                    style={[_styles().input, _styles().textAreaInput]}
                    placeholderTextColor={note}
                    multiline
                />
                <View style={[styles.placeCenter, _styles().btnView]}>
                    <Button
                        content={t(`${txt}.btn`)}
                        width={180}
                    />
                </View>
                <View style={_styles().noteView}>
                    {/* <Text style={_styles().noteTxt}>
                        {t(`${txt}.note`)}
                    </Text> */}
                    <T
                        style={_styles().noteTxt}
                        text={t(`${txt}.note`)}
                    />
                </View>
                <Row style={_styles().row}>
                    {/* <Text style={_styles().detailsTxt}>{t(`${txt}.title1`)}</Text> */}
                    <T
                        style={_styles().detailsTxt}
                        text={t(`${txt}.title1`)}
                    />
                </Row>
                <Row style={_styles().row}>
                    {/* <Text style={_styles().detailsTxt}>{t(`${txt}.title2`)}</Text> */}
                    <T
                        style={_styles().detailsTxt}
                        text={t(`${txt}.title2`)}
                    />
                </Row>
                <Row style={_styles().row}>
                    {/* <Text style={_styles().detailsTxt}>{t(`${txt}.title3`)}</Text> */}
                    <T
                        text={t(`${txt}.title3`)}
                        style={_styles().detailsTxt}
                    />
                </Row>
            </HeaderWrapper>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)

const _styles = () => StyleSheet.create({
    input: {
        backgroundColor: dark,
        width: '95%',
        alignSelf: 'center',
        margin: 10,
        marginBottom: 0,
        color: '#FFFFFF',
        paddingHorizontal: 15,
        marginVertical: 20,
        borderRadius: 5,
        fontFamily: Semi,
        fontSize: PixelRatio.getFontScale() + 18,
        textAlign: 'right',
    },
    simpleInput: {
        height: 55,
    },
    textAreaInput: {
        height: 220,
        // padding: 30
    },
    btnView: {
        margin: 25
    },
    noteView: {
        marginHorizontal: 50,
        alignItems: 'center',
    },
    noteTxt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 18,
        textAlign: 'center'
    },
    row: {
        margin: 10,
        direction: 'rtl'
    },
    detailsTxt: {
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + 16
    }
})