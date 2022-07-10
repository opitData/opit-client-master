import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const changeLanguageDialg = 'changeLanguageDialg'.toString();

    const {
        visible,
        setVisible,
        handlePressBtn1,
        handlePressBtn2
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            {/* <Text style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}>
                {t(`${changeLanguageDialg}.body`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${changeLanguageDialg}.body`)}
                numberOfLines={3}

            />
        </>
    }

    return (
        <Dialog
            visible={visible}
            setVisible={setVisible}
            title={t(`${changeLanguageDialg}.title`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
            buttons={[
                {
                    handlePress: async () => {
                        await setVisible(false);
                        handlePressBtn1();
                    },
                    body: t(`${changeLanguageDialg}.btn1`),
                    width: 130,
                    size: 'large'
                },
                {
                    handlePress: async () => {
                        await setVisible(false);
                        handlePressBtn2();
                    },
                    body: t(`${changeLanguageDialg}.btn2`),
                    width: 130,
                    size: 'large'
                },
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {
        details: {
            marginVertical: 10
        }
    }
)

