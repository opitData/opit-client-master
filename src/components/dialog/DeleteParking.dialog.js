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

    const deleteParkingDialog = 'deleteParkingDialog'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            {/* <Text style={[styles.noteTxt,styles.txtContentDialog, _styles.details]}>
                {t(`${deleteParkingDialog}.details`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                txet={t(`${deleteParkingDialog}.details`)}
                numberOfLines={3}
            />
        </>
    }

    return (
        <Dialog
            visible={visible}
            title={t(`${deleteParkingDialog}.title`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${deleteParkingDialog}.submit`),
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

