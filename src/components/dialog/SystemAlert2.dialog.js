import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const systemAlert2Dialog = 'systemAlert2Dialog'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            <Text style={[styles.txt, styles.txtContentDialog]}>
                {t(`${systemAlert2Dialog}.details1`)}
                {'XXX '}
                <Text style={[styles.txt, styles.txtContentDialog]}>
                    {t(`${systemAlert2Dialog}.details2`)}
                </Text>
            </Text>
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            content={contentDialog()}
            title={t(`${systemAlert2Dialog}.title`)}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${systemAlert2Dialog}.submit`),
                    width: 100,
                    size: 'small'
                },
                {
                    handlePress: async () => {
                        await setVisible(false);
                    },
                    body: t(`${systemAlert2Dialog}.cancel`),
                    width: 100,
                    size: 'small'
                }
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {
    }
)

