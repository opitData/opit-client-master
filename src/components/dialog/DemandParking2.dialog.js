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

    const demandParking2Dialog = 'demandParking2Dialog'.toString();

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
                {t(`${demandParking2Dialog}.details`)}
            </Text> */}
            <T
                text={t(`${demandParking2Dialog}.details`)}
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                numberOfLines={3}
            />
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${demandParking2Dialog}.title`)}
            content={contentDialog()}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${demandParking2Dialog}.submit`),
                    width: 200,
                    size: 'large'
                }
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {
    }
)

