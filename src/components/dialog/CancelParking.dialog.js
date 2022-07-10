import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import {
    ligth
} from '../../styles/SystemColor';
import Dialog from '../dialog/Dialog';
import T from '../genericComponents/T';

export default (props) => {

    const cancelParkingDialog = 'cancelParkingDialog'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();


    const contentDialog = () => {
        return <>
            {/* <Text style={[styles.noteTxt, styles.txtContentDialog]}>
                {t(`${cancelParkingDialog}.details`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog]}
                text={t(`${cancelParkingDialog}.details`)}
                numberOfLines={3}

            />
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${cancelParkingDialog}.title`)}
            content={contentDialog()}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${cancelParkingDialog}.submit`),
                    width: 130,
                }
            ]}
        />
    )
}

