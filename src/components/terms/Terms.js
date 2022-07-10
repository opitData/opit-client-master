import React from 'react';
import Header from '../header/Header';
import { useTranslation } from 'react-i18next';
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import styles, { headerWithTitle } from '../../styles/Styles';
import { dark, ligth } from '../../styles/SystemColor';
import { font } from '../../styles/SystemFonts';
import { goBack } from '../../routes/routes';
import ChipButton from '../genericComponents/ChipButton';
import T from '../genericComponents/T';

export default (props) => {

    const {
        t
    } = useTranslation();

    const {
        navigation
    } = props;

    const terms = 'terms'.toString();

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <T
                        style={headerWithTitle()}
                        text={t(`${terms}.header`)}
                    />
                    // <Text
                    //     style={headerWithTitle()}>
                    //     {t(`${terms}.header`)}
                    // </Text>
                }
            />
            <View
                showsVerticalScrollIndicator={false}
                style={_styles.scrollView}
            >
                <ScrollView>
                    <View style={_styles.viewTitle}>
                        <T
                            style={[_styles.txt, _styles.title]}
                            text={t(`${terms}.title`)}
                        />
                        {/* <Text style={[_styles.txt, _styles.title]}>
                            {t(`${terms}.title`)}
                        </Text> */}
                    </View>
                    <View style={{ zIndex: 1 }}>
                        <T
                            style={[_styles.txt, _styles.details]}
                            text={t(`${terms}.details`)}
                        />
                        {/* <Text style={[_styles.txt, _styles.details]}>
                            {t(`${terms}.details`)}
                        </Text> */}
                    </View>
                </ScrollView>
                <ChipButton handlePress={() => goBack(props)} />
            </View>
        </>
    )
}

const _styles = StyleSheet.create(
    {
        scrollView: {
            margin: 20,
            padding: 15,
            backgroundColor: dark,
            height: '80%',
            borderRadius: 20
        },
        viewTitle: {
            marginBottom: 15,
            zIndex: 1,
            paddingHorizontal: 10
        },
        txt: {
            color: ligth,
            fontStyle: 'normal',
            // fontFamily: font
        },
        title: {
            fontWeight: '900',
            textAlign: 'center',
            fontSize: PixelRatio.getFontScale() + 15
        },
        details: {
            fontWeight: 'normal',
            fontSize: PixelRatio.getFontScale() + 15,
            lineHeight: 32,
            display: 'flex',
            textAlign: 'right',
            alignItems: 'center'

        }
    }
)