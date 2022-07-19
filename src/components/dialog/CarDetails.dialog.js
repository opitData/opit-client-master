import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const carDetails = 'carDetails'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${carDetails}.title`)}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${carDetails}.continue`),
                    width: 120,
                }
            ]}
        />
    )
}