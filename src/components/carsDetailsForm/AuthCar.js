import React, { useState } from 'react';
import {
    TouchableOpacity,
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import BigDelete from '../../assets/svg/bigDelete.svg'
import Edit from '../../assets/svg/edit.svg'
import { connect } from 'react-redux';
import DeleteCarDialog from '../dialog/DeleteCar.dialog';
import { actions } from '../../redux/actions';
import { deleteAct, editAct } from '../../styles/SystemColor';

function AuthCar(props) {

    const {
        t
    } = useTranslation();

    const {
        car,
        index,

        _deleteCar
    } = props;

    const authCarDetails = 'authCarDetails'.toString();

    const [visible, setVisible] = useState(false);

    return (
        <>
            <View key={index}>
                <Text
                    style={[styles.txt, _styles().indexCarTxt]}>
                    {t(`${authCarDetails}.indexCard`)}
                    {" "}
                    {index + 1}
                </Text>

                <View style={styles.rowDirection}>
                    <View style={[styles.placeCenter, _styles(1).flex]}>
                        <TouchableOpacity>
                            <View style={[_styles().actCircle, _styles().actBG1]}>
                                <Edit
                                    width={20}
                                    height={20}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={_styles(3).flex}>
                        <TextInput
                            editable={false}
                            style={[styles.input, _styles().textInput]}
                            placeholderTextColor={"#FFFFFF99"}
                            placeholder={
                                car.carNum.slice(0, 3) +
                                "-" +
                                car.carNum.slice(3, 5) +
                                "-" +
                                car.carNum.slice(5, 8) +
                                "  " +
                                car.carKind +
                                " "
                            }
                        />
                    </View>
                    <View style={[styles.placeCenter, _styles(1).flex]}>
                        <TouchableOpacity onPress={() => setVisible(true)}>
                            <View style={[_styles().actCircle, _styles().actBG2]}>
                                <BigDelete width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <DeleteCarDialog
                handlePress={() => _deleteCar(car._id)}
                visible={visible}
                setVisible={setVisible}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _cars: state.cars.cars
})

const mapDispatchToProps = dispatch => ({
    _deleteCar: (_id) => dispatch(actions.deleteCar(_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthCar);

const _styles = (flex) => StyleSheet.create(
    {
        indexCarTxt: {
            textAlign: 'center',
            marginTop: '2%'
        },
        textInput: {
            width: '100%',
            alignSelf: 'center',
        },
        actBG1: {
            backgroundColor: editAct
        },
        actBG2: {
            backgroundColor: deleteAct
        },
        actCircle: {
            width: 45,
            height: 45,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
        flex: {
            flex: flex
        }
    }
)