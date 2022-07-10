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

    const txt = 'deleteMessage'.toString();

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
                {t(`${txt}.body`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${txt}.body`)}
                numberOfLines={3}
            />
        </>
    }

    return (
        <Dialog
            visible={visible}
            setVisible={setVisible}
            title={t(`${txt}.title`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
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

