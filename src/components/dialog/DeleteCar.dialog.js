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

    const deleteCar = 'deleteCar'.toString();

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
                {t(`${deleteCar}.details`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${deleteCar}.details`)}
                numberOfLines={3}
            />
        </>
    }

    return (
        <Dialog
            visible={visible}
            setVisible={setVisible}
            title={t(`${deleteCar}.title`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
            buttons={[
                {
                    handlePress: async () => {
                        await setVisible(false);
                        handlePress();
                    },
                    body: t(`${deleteCar}.submit`),
                    width: 130,
                    size: 'large'
                },
                {
                    handlePress: async () => {
                        await setVisible(false);
                    },
                    body: t(`${deleteCar}.cancel`),
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

