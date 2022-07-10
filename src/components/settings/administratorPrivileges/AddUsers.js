import React from 'react';
import { connect } from 'react-redux';
import {
    Modal,
    StyleSheet,
    View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { bg } from '../../../styles/SystemColor';
import T from '../../genericComponents/T';
import { returnBoldTxt } from '../../../styles/Styles';

function AddUsers(props) {
    const { t } = useTranslation();
    const txt = 'addUsers'.toString();
    const {
        visible,
        setVisible
    } = props;

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <View style={_styles().centeredView}>
                    <View style={_styles().modalView}>
                        <T
                            text={t(`${txt}.title`)}
                            style={returnBoldTxt(30)}
                        />
                    </View>
                </View>
            </Modal>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);

const _styles = () => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#17151559',
        justifyContent: 'flex-end'
    },
    modalView: {
        marginTop: 40,
        backgroundColor: bg,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '94%',
        alignSelf: 'center',
        // paddingVertical: 40,
    },
})