import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    PixelRatio
} from 'react-native';
import Row from '../../genericComponents/Row';
import ArrowBack from '../../../assets/arrowBack.svg';
import styles from '../../../styles/Styles';
import { Regular } from '../../../styles/SystemFonts';
import Header from '../../header/Header';
import Wrap from '../Wrap';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';
function About(props) {
    const { navigation } = props;
    const { t } = useTranslation();
    const about = 'about'.toString();
    return (
        <>
            {/* <Header
                {...props}
                headerRightElement={
                    <Row style={_styles.row}>
                        <Text style={styles.headerWithTitle}>
                            {t(`${about}.title`)}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <ArrowBack />
                        </TouchableOpacity>
                    </Row>
                }
            /> */}
            <HeaderWrapper
                title={t(`${about}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <View style={_styles.body}>
                    <T
                        style={_styles.bodyTxt}
                        text={t(`${about}.body1`)}
                    />
                    {/* <Text style={_styles.bodyTxt}>{t(`${about}.body1`)}</Text> */}
                    <T
                        style={_styles.bodyTxt}
                        text={t(`${about}.body2`)}
                    />
                    {/* <Text style={_styles.bodyTxt}>{t(`${about}.body2`)}</Text> */}
                </View>
            </HeaderWrapper>
        </>
    )
}

export default About;

const _styles = StyleSheet.create(
    {
        body: {
            marginHorizontal: 30,
            marginVertical: 30,
        },
        bodyTxt: {
            lineHeight: 30,
            fontFamily: Regular,
            fontSize: PixelRatio.getFontScale() + 18,
            textAlign: 'right',
            color: '#FFFFFF'
        },
        row: {
            alignItems: 'center'
        },
    }
)
