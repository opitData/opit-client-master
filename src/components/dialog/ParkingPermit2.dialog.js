import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from './Dialog';
import T from '../genericComponents/T';

export default (props) => {

    const parkingPermit2Dialog = 'parkingPermit2Dialog'.toString();

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
                {t(`${parkingPermit2Dialog}.details`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${parkingPermit2Dialog}.details`)}
                numberOfLines={3}
            />
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${parkingPermit2Dialog}.title`)}
            content={contentDialog()}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${parkingPermit2Dialog}.submit`),
                    width: 130,
                    size: "small"
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

