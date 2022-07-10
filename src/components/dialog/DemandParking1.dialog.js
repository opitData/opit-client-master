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

    const demandParking1Dialog = 'demandParking1Dialog'.toString();

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
                {t(`${demandParking1Dialog}.details`)}
            </Text> */}
            <T
                style={[styles.noteTxt, styles.txtContentDialog, _styles.details]}
                text={t(`${demandParking1Dialog}.details`)}
                numberOfLines={3}
            />
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${demandParking1Dialog}.title`)}
            content={contentDialog()}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${demandParking1Dialog}.submit`),
                    width: 190,
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

