import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import styles, { returnBoldTxt, returnRegularTxt } from '../../../styles/Styles';
import { dark } from '../../../styles/SystemColor';
import Col from '../../genericComponents/Col';
import Row from '../../genericComponents/Row';
import Wrap from '../Wrap';
import Isracard from '../../../assets/svg/isracard.svg';
import { Regular } from '../../../styles/SystemFonts';
import Button from '../../genericComponents/Button';
import { navigateScreen } from '../../../routes/routes';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';

function PaymentManagement(props) {
    const { t } = useTranslation();
    const txt = 'paymentManagement'.toString();
    const {
        navigation
    } = props;

    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >

                <T
                    style={[returnBoldTxt(18), _styles().title]}
                    text={t(`${txt}.subTitle1`)}
                />
                {/* <Text style={[returnBoldTxt(18), _styles().title]}>{t(`${txt}.subTitle1`)}</Text> */}
                <View style={_styles().cardDetailsView}>
                    <Row>
                        <T
                            style={[returnBoldTxt(18)]}
                            text={t(`${txt}.owner`)}
                        />
                        {/* <Text style={[returnBoldTxt(18)]}>{t(`${txt}.owner`)}</Text> */}
                    </Row>
                    <Row style={[styles.placeCenter, _styles().cardDetailsRow]}>
                        <Col cols={1} style={{ alignSelf: 'center', }}>
                            <Row >
                                <T
                                    style={[returnBoldTxt(20)]}
                                    text=' ISRACARD'
                                />
                                {/* <Text style={[returnBoldTxt(20)]}>  ISRACARD</Text> */}
                                <Isracard />
                            </Row>
                        </Col>
                        <Col cols={1}>
                            <T
                                style={[returnRegularTxt(40)]}
                                text='****1234'
                            />
                            {/* <Text style={[returnRegularTxt(40)]}>****1234</Text> */}
                        </Col>
                    </Row>
                </View>
                <View style={[styles.placeCenter, _styles().btnView]}>
                    <Button
                        content={t(`${txt}.btn`)}
                        width={220}
                    />
                </View>
                <View style={styles.headerBottomDivider}></View>
                <T
                    style={[returnBoldTxt(18), _styles().title]}
                    text={t(`${txt}.subTitle2`)}
                />
                {/* <Text style={[returnBoldTxt(18), _styles().title]}>{t(`${txt}.subTitle2`)}</Text> */}
                <View style={{ alignItems: 'flex-end', paddingHorizontal: 15 }}>
                    <T
                        style={[returnRegularTxt(18)]}
                        text={t(`${txt}.registrationFees`)}
                    />
                    {/* <Text style={[returnRegularTxt(18)]}>{t(`${txt}.registrationFees`)}</Text> */}
                    <T
                        style={[returnRegularTxt(18)]}
                        text={t(`${txt}.paymentForAddingCar`)}
                    />
                    {/* <Text style={[returnRegularTxt(18)]}>{t(`${txt}.paymentForAddingCar`)}</Text> */}
                    <T
                        style={[returnRegularTxt(18)]}
                        text={t(`${txt}.carsCnt`)}
                    />
                    {/* <Text style={[returnRegularTxt(18)]}>{t(`${txt}.carsCnt`)}</Text> */}

                </View>
                <T
                    style={[returnBoldTxt(18), _styles().title]}
                    text={t(`${txt}.total`)}
                />
                {/* <Text style={[returnBoldTxt(18), _styles().title]}>{t(`${txt}.total`)}</Text> */}
                <View style={styles.headerBottomDivider}></View>
            </HeaderWrapper>
            <TouchableOpacity
                style={_styles().report}
                onPress={() => {
                    navigateScreen(props, 'ContactUs', { title: t(`${txt}.paramsTitle`) })
                }}>
                <T
                    style={[returnBoldTxt(19, '#FFFFFF99'), _styles().reportTxt]}
                    text={t(`${txt}.report`)}
                />
                {/* <Text style={[returnBoldTxt(19, '#FFFFFF99'), _styles().reportTxt]}>{t(`${txt}.report`)}</Text> */}
            </TouchableOpacity>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentManagement)

const _styles = () => StyleSheet.create({
    cardDetailsView: {
        backgroundColor: dark,
        width: '100%',
        height: 110,
        borderRadius: 7,
        padding: 15,
        direction: 'rtl'
    },
    title: {
        margin: 15,
        textAlign: 'right'
    },
    cardDetailsRow: {
        marginTop: 10
    },
    btnView: {
        margin: 17
    },
    report: {

        bottom: 40,
        alignSelf: 'center',
        position: 'absolute'
    },
    reportTxt: {
        textDecorationColor: '#FFFFFF99',
        textDecorationLine: 'underline',
    }
})