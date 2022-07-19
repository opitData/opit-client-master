import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const unableToOpenGateDialog = 'unableToOpenGateDialog'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();


    const contentDialog = () => {
        return <>
            {/* <Text style={[styles.txt, styles.txtContentDialog]}>
                {t(`${unableToOpenGateDialog}.details1`)}
            </Text> */}
            <T
                style={[styles.txt, styles.txtContentDialog]}
                text={t(`${unableToOpenGateDialog}.details1`)}
            />
            {/* <Text style={[styles.txt, styles.txtContentDialog]}>
                {t(`${unableToOpenGateDialog}.details2`)}
            </Text> */}
            <T
                style={[styles.txt, styles.txtContentDialog]}
                text={t(`${unableToOpenGateDialog}.details2`)}
            />
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${unableToOpenGateDialog}.title`)}
            content={contentDialog()}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${unableToOpenGateDialog}.submit`),
                    width: 120,
                }
            ]}
        />
    )
}


