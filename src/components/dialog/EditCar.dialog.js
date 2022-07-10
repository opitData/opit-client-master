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

export default (props) => {

    const txt = 'carNumManagement'.toString();

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
            <TextInput
                placeholder={item.name}
                style={_styles.input}
                placeholderTextColor={note}
                selectionColor='white'
            />
            <TextInput
                placeholder={item.carKind}
                style={_styles.input}
                placeholderTextColor={note}
                selectionColor='white'
            />
        </>
    }

    return (
        <Dialog
            visible={visible}
            setVisible={setVisible}
            title={t(`${txt}.editTitle`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
            buttons={[
                {
                    handlePress: async () => {
                        await setVisible(false);
                        handlePress();
                    },
                    body: t(`${txt}.editBtn1`),
                    width: 130,
                    size: 'large'
                },
                {
                    handlePress: async () => {
                        await setVisible(false);
                        handlePress();
                    },
                    body: t(`${txt}.editBtn2`),
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

