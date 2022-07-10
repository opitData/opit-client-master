import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import NoInternet from '../../assets/svg/NoInternet.svg';
import HeaderAuth from '../header/HeaderAuth';
import T from '../genericComponents/T';
import Button from '../genericComponents/Button';
import { dominant } from '../../styles/SystemColor';

export default () => {

    const {
        t
    } = useTranslation();

    const error = 'error'.toString();

    return (
        <View style={styles.screenAuth}>
            <HeaderAuth />
            <ScrollView contentContainerStyle={styles.contentAuth}>
                <View style={_styles.title}>
                    <NoInternet />
                </View>
                <View style={_styles.title}>
                    {/* <Text style={styles.title}>
                        {t(`${error}.title`)}
                    </Text> */}
                    <T
                        style={styles.title}
                        text={t(`${error}.title`)}
                    />
                </View>
                <View style={_styles.title}>
                    {/* <Text style={styles.txt}>
                        {t(`${error}.details1`)}
                    </Text> */}
                    <T
                        style={styles.txt}
                        text={t(`${error}.details1`)}
                    />
                    {/* <Text style={styles.txt}>
                        {t(`${error}.details2`)}
                    </Text> */}
                    <T
                        style={styles.txt}
                        text={t(`${error}.details2`)}
                    />
                    <Text style={styles.txt}>
                        {t(`${error}.details3`)}
                    </Text>
                </View>
                <View style={_styles.tel}>
                    {/* <Text style={styles.txt}>
                        {t(`${error}.tel`)}
                        {" "}
                        XXX-XXXXXX
                    </Text> */}
                    {/* <T
                        text={t(`${error}.tel`) + ' ' + 'XXX-XXXXXX'}
                        style={styles.txt}
                    /> */}
                    <Text style={styles.txt}>
                        {t(`${error}.details4`)}
                    </Text>
                    <Button
                        kind="outline"
                        handlePress={() => { }}
                        content={t(`${error}.tel`)}
                        colorOutline={dominant}
                    />
                </View>
            </ScrollView>
        </View>
    )
}


const _styles = StyleSheet.create(
    {
        title: {
            marginTop: '12%',
            alignItems: 'center'
        },
        scrollView: {
            alignItems: 'center'
        },
        tel: {
            marginTop: '90%'
        }
    }
)
