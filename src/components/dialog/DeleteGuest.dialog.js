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

    const deleteGuest = 'deleteGuest'.toString();

    const {
        visible,
        setVisible,
        handlePress
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            {/* <Text style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}>
                {t(`${deleteGuest}.details`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${deleteGuest}.details`)}
                numberOfLines={3}
            />
        </>
    }

    return (
        <Dialog
            visible={visible}
            title={t(`${deleteGuest}.title`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                        handlePress()
                    },
                    body: t(`${deleteGuest}.button`),
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

