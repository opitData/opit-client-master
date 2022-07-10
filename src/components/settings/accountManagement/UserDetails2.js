import React, { useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    View,
    TextInput,
    Text,
    ScrollView,
    StyleSheet,
    PixelRatio,
} from 'react-native';
import Delete from '../../../assets/svg/delete.svg';
import styles from '../../../styles/Styles';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import LinearGradient from "react-native-linear-gradient";
import {
    deleteAct,
    dominant,
    dominantDark,
    ligth,
} from '../../../styles/SystemColor';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { navigateScreen } from '../../../routes/routes';
import Button from '../../genericComponents/Button';
import { connect } from 'react-redux';
import { actions } from '../../../redux/actions';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { Car } from '../../../models/Car.model';
import { useToast } from 'react-native-fast-toast'
import ToastService from '../../../services/toast.service';
import ErrorMessage from '../../formik/ErrorValidation';
import Wrap from '../Wrap';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';

function UserDetails(props) {

    const {
        _addCar,//(fromValues)
        _setCountNumCars,
        _countNumCars,
        navigation,
        _user
    } = props;
    const [formValues, setFormValues] = useState(new Car())
    const setFormValuesFunc = (key, value) => {
        setFormValues({ ...formValues, [key]: value })
    }
    const {
        t
    } = useTranslation();

    const form = 'form'.toString();
    const createUserParking = 'createUserParking'.toString();

    const scrollViewRef = useRef();
    const inputsRef = useRef([]);
    const toast = useToast()
    const [countNumParking, setCountNumParking] = useState(0);
    const [progressAddNewCar, setProgressAddNewCar] = useState(false);
    const txt = 'userDetails'.toString();
    const countionueFunc = () => {
        navigateScreen(props, 'AuthCarDetailsBeforeContinue', formValues)
    }

    const addParkingFunc = () => {
        setFormValuesFunc("parkings", [...formValues.parkings, { index: countNumParking, parkingNum: '', floor: 0 }])
        setCountNumParking(countNumParking => countNumParking + 1);
    }

    const deleteCarFunc = async (item) => {
        setFormValuesFunc("parkings", formValues.parkings.filter(park => park.index != item.index))
    };

    const addNewCar = () => {

        //loading animation
        setProgressAddNewCar(true);
        _addCar(formValues);
        _setCountNumCars(_countNumCars + 1);

        //loading animation and clear textInputs
        setTimeout(() => {
            setProgressAddNewCar(false);
            setFormValues(new Car(_countNumCars + 1));
            ToastService.showSystemToast(toast, 'Car added successfull')
        }, 1500);

    }

    const changeParking = (item, key, value) => {
        let parkings = [...formValues.parkings];
        const index = parkings
            .map((park) => park.index)
            .indexOf(item.index);
        parkings[index][key] = value;
        setFormValuesFunc('parkings', parkings)
    }

    const returnBtn = (item, index) => {
        return (
            <>
                {
                    index == formValues.parkings.length - 1 ?
                        <View style={styles.rowDirection}>
                            <TouchableOpacity onPress={() => addParkingFunc(formValues.parkings[formValues.parkings.length - 1].index + 1)}>
                                <LinearGradient
                                    colors={[dominant, dominantDark]}
                                    style={[_styles().linearGradientBtn, _styles().iconPlus]}
                                >
                                    <AntDesign
                                        name="plus"
                                        color="white"
                                        size={20}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                            <T
                                style={[styles.noteTxt, _styles().iconAndTxt]}
                                text={t(`${form}.addParking`)}
                            />
                            {/* <Text style={[styles.noteTxt, _styles().iconAndTxt]}>
                                {t(`${form}.addParking`)}
                            </Text> */}
                        </View>
                        :
                        <TouchableOpacity
                            onPress={() => deleteCarFunc(item)}
                            style={[styles.addBtn, { backgroundColor: deleteAct }]} >
                            <Delete />
                        </TouchableOpacity>
                }

                <OrientationLoadingOverlay
                    visible={progressAddNewCar}
                    color={dominant}
                    indicatorSize="large"
                    messageFontSize={PixelRatio.getFontScale() + 24}
                />
            </>
        )
    }

    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        carKind: '',
                        carNum: '',
                        parkings: [{ parkingNum: '', floor: 0 }],
                    }}
                    // validationSchema={loginValidationSchema}
                    keyboardShouldPersistTaps="handled"
                    onSubmit={(values) => {

                    }}
                >
                    {({
                        handleChange = async (txt) => {
                            handleChange(txt);
                            setFormValuesFunc('firstName', txt)
                        },
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                        touched
                    }) => (
                        <View>
                            <View style={styles.rowDirection}>
                                <View style={styles.rightItem}>
                                    <TextInput
                                        name="firstName"
                                        onChangeText={(txt) => {
                                            // handleChange('firstName')
                                            setFormValuesFunc('firstName', txt)
                                        }}
                                        // onBlur={handleChange('firstName')}
                                        // onChangeText={handleChange('firstName')}
                                        value={_user.fname}
                                        style={styles.input}
                                        placeholder={t(`${form}.firstName`)}
                                        selectionColor="#FFFFFF99"
                                        placeholderTextColor={'#FFFFFF99'}
                                        ref={el => inputsRef[0] = el}
                                    />
                                    {
                                        // touched.firstName &&
                                        errors.firstName &&
                                        <ErrorMessage
                                            errorValue={
                                                // touched.firstName
                                                // &&
                                                errors.firstName
                                            }
                                        />
                                    }
                                </View>

                                <View style={styles.leftItem}>
                                    <TextInput
                                        onChangeText={(txt) => setFormValuesFunc('lastName', txt)}
                                        value={_user.lname}
                                        style={styles.input}
                                        placeholder={t(`${form}.lastName`)}
                                        selectionColor="#FFFFFF99"
                                        placeholderTextColor={'#FFFFFF99'}
                                        ref={el => inputsRef[1] = el}
                                    />
                                </View>

                            </View>
                            <TextInput
                                editable
                                onChangeText={(txt) => setFormValuesFunc('carKind', txt)}
                                value={_user.carKind}
                                style={styles.input}
                                placeholder={t(`${form}.carKind`)}
                                placeholderTextColor={'#FFFFFF99'}
                                selectionColor="#FFFFFF99"
                                ref={el => inputsRef[2] = el}
                            />
                            <TextInput
                                editable
                                onChangeText={(txt) => setFormValuesFunc('carNum', txt)}
                                value={formValues.carNum.toString()}
                                style={styles.input}
                                placeholder={t(`${form}.carNum`)}
                                keyboardType="numeric"
                                maxLength={8}
                                selectionColor="#FFFFFF99"
                                placeholderTextColor={'#FFFFFF99'}
                                ref={el => inputsRef[3] = el}
                            />
                            <ScrollView style={{ maxHeight: '38%' }}
                                ref={scrollViewRef}
                                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                            >
                                {formValues.parkings && formValues.parkings.map((item, index) =>
                                    <View key={index} style={styles.rowDirection}>
                                        <View style={_styles(2.3).flex}>
                                            <TextInput
                                                onChangeText={(txt) => {
                                                    changeParking(item, 'parkingNum', txt);
                                                }}
                                                value={item.parkingNum.toString()}
                                                style={styles.input}
                                                placeholder={t(`${form}.parkingNum`)}
                                                placeholderTextColor={'#FFFFFF99'}
                                                selectionColor="#FFFFFF99"
                                                maxLength={10}
                                                keyboardType='numeric'
                                                ref={el => inputsRef[4] = el}
                                            />
                                        </View>
                                        <View style={_styles(1.5).flex}>
                                            <TextInput
                                                onChangeText={(txt) => {
                                                    changeParking(item, 'floor', txt);
                                                }}
                                                maxLength={2}
                                                value={item.floor.toString()}
                                                style={styles.input}
                                                placeholder={t(`${form}.floor`)}
                                                placeholderTextColor={'#FFFFFF99'}
                                                selectionColor="#FFFFFF99"
                                                keyboardType='numeric'
                                                ref={el => inputsRef[5] = el}
                                            />
                                        </View>
                                        <View style={_styles(2).flex}>
                                            {returnBtn(item, index)}
                                        </View>
                                    </View>
                                )}
                            </ScrollView>

                            <View style={[styles.rowDirection, _styles().viewWrapButton]}>
                                <Button
                                    handlePress={() => {
                                        countionueFunc();
                                        _addCar(formValues);
                                    }}
                                    content={t(`${createUserParking}.update`)}
                                    width={130}
                                    backgroundColor={'#414E6B'}
                                    size='small'
                                />
                                <Button
                                    kind="outline"
                                    handlePress={addNewCar}
                                    content={t(`${createUserParking}.back`)}
                                    colorOutline={ligth}
                                    width={130}
                                    size='small'
                                />
                            </View>
                        </View>

                    )}
                </Formik>
            </HeaderWrapper>

        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _cars: state.cars.cars,
    _countNumCars: state.cars.countNumCars,
    _user: state.user.user,
})

const mapDispatchToProps = dispatch => ({
    _addCar: (car) => dispatch(actions.addCar(car)),
    _setCountNumCars: (count) => dispatch(actions.setCountNumCars(count)),
})

// export default connect(mapStateToProps, mapStateToProps)()

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)

export const _styles = (flex) => StyleSheet.create({
    iconAndTxt: {
        paddingHorizontal: 5
    },
    iconPlus: {
        height: 35,
        width: 35
    },
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewWrapButton: {
        padding: 25,
        justifyContent: 'center'
    },
    noCar: {
        paddingStart: 5,
        paddingTop: 5,
        width: 40,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: flex
    }
})