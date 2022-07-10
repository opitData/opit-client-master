import React from 'react';
import { useTranslation } from 'react-i18next';
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Row from '../../genericComponents/Row';
import SearchGuest from '../../guests/SearchGuest';
import Wrap from '../Wrap'
import styles, { avatar, returnBoldTxt } from '../../../styles/Styles';
import Col from '../../genericComponents/Col';
import { dark } from '../../../styles/SystemColor';
import { Regular } from '../../../styles/SystemFonts';
import ArrowDown from '../../../assets/svg/arrowDown.svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Search from '../../genericComponents/Search';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';

function History(props) {

    const {
        navigation
    } = props;
    const { t } = useTranslation();
    const txt = 'history'.toString();
    const month = 'month'.toString();

    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <Row style={[styles.placeCenter, _styles().wrapInput]}>
                    <Col cols={1}>
                        <Search />
                    </Col>
                </Row>
                <Row style={[_styles().item]}>
                    <Col cols={3}>
                        <T
                            style={returnBoldTxt(20)}
                            text={t(`${txt}.subTitle`) + ' -'}
                        />
                        {/* <Text style={returnBoldTxt(20)}>{t(`${txt}.subTitle`)} -</Text> */}
                    </Col>
                    <Col cols={1}>
                        <TouchableOpacity style={[avatar('#374563'), styles.placeCenter]}>
                            <ArrowDown />
                        </TouchableOpacity>
                    </Col>
                    <Col cols={1}>
                        <TouchableOpacity style={[avatar('#374563'), styles.placeCenter]}>
                            <FontAwesome5
                                name="ellipsis-v"
                                color='white'
                                size={20}
                            />
                        </TouchableOpacity>
                    </Col>
                </Row>
            </HeaderWrapper>
        </>
    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(History);

const _styles = () => StyleSheet.create({
    wrapInput: {
        marginVertical: 20,
        marginHorizontal: 10,
        height: 50,
        direction: 'rtl'
    },
    item: {
        // flexDirection: 'row',
        borderRadius: 10,
        fontSize: PixelRatio.getFontScale() + 18,
        fontFamily: Regular,
        backgroundColor: dark,
        alignSelf: 'center',
        width: '95%',
        margin: 5,
        height: 50,
        padding: 10,
        direction: 'rtl',
        alignItems: 'center'
        // justifyContent: 'center'
    }
})