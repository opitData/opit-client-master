import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const oopsProblem = 'oopsProblem3'.toString();

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
                {t(`${oopsProblem}.checkValid`)}
            </Text>
            <Text style={[styles.txt, styles.txtContentDialog]}>
                {t(`${oopsProblem}.checkValid2`)}
            </Text>
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            content={contentDialog()}
            title={t(`${oopsProblem}.title`)}
            closeHandlePress={() => setVisible(false)}
        // buttons={[
        //     {
        //         handlePress: () => {
        //             setVisible(false);
        //         },
        //         body: t(`${oopsProblem}.submit`),
        //         width: 120
        //     },
        //     {
        //         handlePress: () => {
        //             setVisible(false);
        //         },
        //         body: t(`${oopsProblem}.cancel`),
        //         width: 120
        //     }

        // ]}
        />
    )
}