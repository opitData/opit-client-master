import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';
import T from '../genericComponents/T';

export default (props) => {

    const txt = 'carNumManagement'.toString();

    const {
        visible,
        setVisible,
        handlePress,
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            {/* <Text style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}>
                {t(`${txt}.dialogBody1`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${txt}.dialogBody1`)}
                numberOfLines={3}
            />
            {/* <Text style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}>
                {t(`${txt}.dialogBody2`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${txt}.dialogBody2`)}
            />
        </>
    }

    return (
        <Dialog
            visible={visible}
            setVisible={setVisible}
            title={t(`${txt}.dialogTitle`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
            buttons={[
                {
                    handlePress: async () => {
                        await setVisible(false);
                        handlePress();
                    },
                    body: t(`${txt}.dialogBtn`),
                    width: 130,
                    size: 'large'
                }
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

