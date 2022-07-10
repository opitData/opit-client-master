import React from 'react';
import {
    Text,
    StyleSheet,
    TextInput,
    PixelRatio,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';
import { Bold, Regular } from '../../styles/SystemFonts';
import { note } from '../../styles/SystemColor';
import T from '../genericComponents/T';

export default (props) => {

    const txt = 'restoreCarDialog'.toString();

    const {
        visible,
        setVisible,
        handlePress,
        item
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            {/* <Text style={[styles.txt, styles.txtContentDialog, _styles.details]}>
                {t(`${txt}.body`)}
            </Text> */}
            <T
                text={t(`${txt}.body`)}
                style={[styles.txt, styles.txtContentDialog, _styles.details]}
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
            buttons={[
                {
                    handlePress: async () => {
                        await setVisible(false);
                        handlePress();
                    },
                    body: t(`${txt}.btn`),
                    width: 130,
                    size: 'large'
                },

            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {
        details: {
            marginVertical: 10
        },
        input: {
            borderColor: 'white',
            borderWidth: 1,
            minWidth: '85%',
            height: 57,
            borderRadius: 10,
            color: '#FFFFFF99',
            fontFamily: Bold,
            fontSize: PixelRatio.getFontScale() + 20,
            paddingHorizontal: 10,
            textAlign: 'center',
            margin: 10
        }
    }
)

