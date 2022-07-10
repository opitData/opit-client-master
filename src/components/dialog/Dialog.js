import React from 'react';
import Dialog, { DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio
} from 'react-native';
import styles from '../../styles/Styles';
import ChipButton from '../genericComponents/ChipButton';
import {
    ligth
} from '../../styles/SystemColor';
import Button from '../genericComponents/Button';
import T from '../genericComponents/T';


export default (props) => {

    const {
        title,
        buttons,
        content,
        visible,
        setVisible,
        unableTouchOutside,
        closeHandlePress
    } = props;

    return (
        <>
            <Dialog
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                onTouchOutside={() => setVisible(false)}
                dialogStyle={_styles.dialogStyle}
                visible={visible}
            >
                <DialogContent
                    style={[_styles.dialogContent]}
                >
                    <View style={[styles.contentAuth, { zIndex: 1 }]}>
                        {/* <Text style={[styles.title, _styles.title]}>
                            {title}
                        </Text> */}
                        <T
                            style={[styles.title, _styles.title]}
                            text={title}
                            numberOfLines={3}
                        />
                        {content}
                        <View
                            style={[
                                styles.rowDirection,
                                { marginTop: 20, zIndex: 1 }
                            ]}>
                            {
                                buttons && buttons.length > 1 ?
                                    <>
                                        <Button
                                            handlePress={buttons[0].handlePress}
                                            content={buttons[0].body}
                                            width={buttons[0].width}
                                            size={buttons[0].size}
                                        />
                                        <Button
                                            smallborderWidth
                                            kind="outline"
                                            content={buttons[1].body}
                                            colorOutline={ligth}
                                            handlePress={buttons[1].handlePress}
                                            size={buttons[1].size}
                                            width={buttons[1].width}
                                        />
                                    </>
                                    : buttons && buttons.length == 1 &&
                                    < Button
                                        handlePress={buttons[0].handlePress}
                                        content={buttons[0].body}
                                        width={buttons[0].width}
                                        size={buttons[0].size}
                                    />
                            }
                        </View>
                    </View>
                </DialogContent>
                <ChipButton handlePress={closeHandlePress} />
            </Dialog>
        </>
    )
}

const _styles = StyleSheet.create(
    {

        txt: {
            color: ligth,
            fontStyle: 'normal',
            // fontFamily: font
        },
        details: {
            fontWeight: 'normal',
            fontSize: PixelRatio.getFontScale() + 15,
            lineHeight: 32,
            display: 'flex',
            textAlign: 'right',
            alignItems: 'center'

        },
        dialogStyle: {
            overflow: 'visible',
            backgroundColor: '#0A2550',
            borderRadius: 20,
            width: '95%',
            // height: '100%',
            // opacity:0.5,
            zIndex: 0,
            resizeMode: 'cover',
            // position:'absolute',
            alignItems: 'center',
            justifyContent: 'center',
        },
        linearGradientBtn: {
            width: 120,
            height: 50,
            paddingHorizontal: 20,
            marginHorizontal: 10
        },

        dialogContent: {
            marginHorizontal: 8,
            marginVertical: '5%',
            zIndex: 1,
            backgroundColor: '#0A2550',
        },

        title: {
            fontSize: PixelRatio.getFontScale() + 24,
            marginBottom: 20,
            fontWeight: '900',
            textAlign: 'center',
        },
        details: {
            fontSize: PixelRatio.getFontScale() + 16,
            lineHeight: 20
        }
    }
)