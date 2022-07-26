import React, { useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    View,
    TextInput,
    Text,
    ScrollView,
    StyleSheet,
    PixelRatio,
    Switch
} from 'react-native';
import Delete from '../../assets/svg/delete.svg';
import styles from '../../styles/Styles';
import { Formik } from 'formik';
import TrueCheckBox from '../../assets/trueCheckBox.svg'
import FalseCheckBox from '../../assets/falseCheckBox.svg';
import { useTranslation } from 'react-i18next';
import LinearGradient from "react-native-linear-gradient";
import {
    dark,
    deleteAct,
    dominant,
    dominantDark,
    ligthDominant
} from '../../styles/SystemColor';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { navigateScreen } from '../../routes/routes'
import Button from '../genericComponents/Button';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { Car } from '../../models/Car.model';
import { useToast } from 'react-native-fast-toast'
import ToastService from '../../services/toast.service';
import ErrorMessage from '../formik/ErrorValidation';
import { validationSchema } from '../formik/Schema';
// import * as yup from 'yup'

function CarsDetailsFormik(props) {

    const {
        setFormValuesFunc,//(key,value)
        setFormValues,//(value)
        formValues,
        checkBox,
        setCheckBox,
        _addCar,//(fromValues)
        _setCountNumCars,
        _countNumCars
    } = props;

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

    const setCheckBoxFunc = () => {
        setCheckBox(!checkBox)
    }

    // const loginValidationSchema = yup.object().shape({
    //     email: yup
    //         .string()
    //         .email("Please enter valid email")
    //         .required('Email Address is Required'),
    //     firstName: yup
    //         .string()
    //         // .min(8, ({ min }) => `Password must be at least ${min} characters`)
    //         .required('Password is required'),
    // })

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
                        <View style={styles.rowDirectionForText}>
                            <Text style={[styles.noteTxt, _styles().iconAndTxt]}>
                                {t(`${form}.addParking`)}
                            </Text>
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
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
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

                        <TextInput
                            editable={checkBox ? false : true}
                            onChangeText={(txt) => setFormValuesFunc('carKind', txt)}
                            value={formValues.carKind}
                            style={styles.input}
                            placeholder={t(`${form}.carKind`)}
                            placeholderTextColor={'#FFFFFF99'}
                            selectionColor="#FFFFFF99"
                            ref={el => inputsRef[3] = el}
                        />
                        <TextInput
                            editable={checkBox ? false : true}
                            onChangeText={(txt) => setFormValuesFunc('carNum', txt)}
                            value={formValues.carNum.toString()}
                            style={styles.input}
                            placeholder={t(`${form}.carNum`)}
                            keyboardType="numeric"
                            maxLength={8}
                            selectionColor="#FFFFFF99"
                            placeholderTextColor={'#FFFFFF99'}
                            ref={el => inputsRef[5] = el}
                        />
                        <ScrollView style={{ maxHeight: '38%' }}
                            ref={scrollViewRef}
                            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                        >
                            {formValues.parkings && formValues.parkings.map((item, index) =>
                                <View key={index} style={styles.rowDirection}>
                                    <View style={_styles(1).flex}>
                                        {returnBtn(item, index)}
                                    </View>
                                    <View style={_styles(1).flex}>
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
                                            ref={el => inputsRef[7] = el}
                                        />
                                    </View>
                                    <View style={_styles(1).flex}>
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
                                            ref={el => inputsRef[6] = el}
                                        />
                                    </View>
                                </View>
                            )}
                        </ScrollView>
                        <View style={styles.rowDirectionForText}>
                            <Text style={[styles.noteTxt, _styles().iconAndTxt]}>
                                {/* {t(`${form}.addParking`)} */}
                                יש לי חניה מקורה
                            </Text>
                            <Switch
                                trackColor={{ false: '#374563', true: '#FFC803' }}
                            // onValueChange={toggleSwitchHourlyParking}
                            // value={switchHourlyParking}
                            // thumbColor={switchHourlyParking ? 'black' : '#FFFFFF'}
                            />

                        </View>
                        {/* <View
                            style={styles.rowDirection}
                        >
                            <TouchableOpacity onPress={setCheckBoxFunc}>
                                <View style={_styles().noCar}>
                                    {checkBox ? <TrueCheckBox /> : <FalseCheckBox />}
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.noteTxt, _styles().iconAndTxt]}>{t(`${createUserParking}.noCar`)}</Text>
                        </View> */}

                        <View style={[styles.bottomPlacement, _styles().viewWrapButton]}>
                            <Button
                                handlePress={() => {
                                    countionueFunc();
                                    _addCar(formValues);
                                }}
                                content={t(`${createUserParking}.continue`)}
                                width={120}
                            />
                            <Button
                                kind="outline"
                                handlePress={addNewCar}
                                content={t(`${createUserParking}.addNewCar`)}
                                colorOutline={dominant}
                            />
                        </View>
                    </View>

                )}
            </Formik>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _cars: state.cars.cars,
    _countNumCars: state.cars.countNumCars
})

const mapDispatchToProps = dispatch => ({
    _addCar: (car) => dispatch(actions.addCar(car)),
    _setCountNumCars: (count) => dispatch(actions.setCountNumCars(count)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CarsDetailsFormik)

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