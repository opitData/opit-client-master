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
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import PlusComp from '../../assets/svg/Plus';
import CarDetailsDialog from '../dialog/CarDetails.dialog';

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
    const [countNumParking, setCountNumParking] = useState(1);
    const [progressAddNewCar, setProgressAddNewCar] = useState(false);
    const usersLink = "http://10.0.0.3:8000/users/";
    const [isNoCar, setNoCar] = useState(false);
    const [roofedParking, setRoofedParking] = useState(false);
    const [showAuthDialog, setAuthDialog] = useState(false);

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

    const countionueFunc = async () => {
        try {
            var data = await axios.post(usersLink, {
                name: formValues.firstName + " " + formValues.lastName,
                email: formValues.email,
                phone: formValues.phone,
                veihcles_ids: [formValues.carNum],
                assets_ids: [props.route.params]
            })
            data = data.data;
            try {
                await AsyncStorage.setItem(
                    'name',
                    data.name
                );
                console.log(`save on stroage ${data.name}`)
            } catch (error) {
                console.log("Errorr stroage set ")
                //Error saving data
            }
            try {
                await AsyncStorage.setItem(
                    'phone',
                    data.phone
                );
                console.log("WE GOT INTO ASYNC STORAGE")
            } catch (error) {
                // Error saving data
            }

        }
        catch (err) {
            console.log(err);
        }

        navigateScreen(props, 'AuthCarDetailsBeforeContinue', formValues)
    }

    const addParkingFunc = () => {
        setFormValuesFunc("parkings", [...formValues.parkings, { index: countNumParking, parkingNum: '', floor: 0 }])
        setCountNumParking(countNumParking => countNumParking + 1);
    }

    const deleteCarFunc = async (item) => {
        setCountNumParking(countNumParking => countNumParking - 1);
        setFormValuesFunc("parkings", formValues.parkings.filter(park => park.index != item.index))
    };

    const addNewCar = () => {
        navigateScreen(props, 'AddAnotherCar')
        //loading animation
        // setProgressAddNewCar(true);
        // _addCar(formValues);
        // _setCountNumCars(_countNumCars + 1);

        // //loading animation and clear textInputs
        // setTimeout(() => {
        //     setProgressAddNewCar(false);
        //     setFormValues(new Car(_countNumCars + 1));
        //     ToastService.showSystemToast(toast, 'הרכב נוסף בהצלחה!')
        // }, 1500);

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
                                    {/* <AntDesign
                                        name="plus"
                                        color="white"
                                        size={20}
                                    /> */}
                                    <PlusComp></PlusComp>
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
                    phone: '',
                    apartmentNum: '',
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
                            <View style={styles.leftItem}>
                                <TextInput
                                    onChangeText={(txt) => setFormValuesFunc('lastName', txt)}
                                    value={formValues.lastName}
                                    style={styles.input}
                                    placeholder={t(`${form}.lastName`)}
                                    selectionColor="#FFFFFF99"
                                    placeholderTextColor={'#FFFFFF99'}
                                    ref={el => inputsRef[0] = el}
                                />
                            </View>
                            <View style={styles.rightItem}>
                                <TextInput
                                    name="firstName"
                                    onChangeText={(txt) => {
                                        // handleChange('firstName')
                                        setFormValuesFunc('firstName', txt)
                                    }}
                                    // onBlur={handleChange('firstName')}
                                    // onChangeText={handleChange('firstName')}
                                    value={formValues.firstName}
                                    style={styles.input}
                                    placeholder={t(`${form}.firstName`)}
                                    selectionColor="#FFFFFF99"
                                    placeholderTextColor={'#FFFFFF99'}
                                    ref={el => inputsRef[1] = el}
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
                        </View>
                        <TextInput
                            onChangeText={(txt) => setFormValuesFunc('email', txt)}
                            value={formValues.email}
                            style={styles.input}
                            placeholder={t(`${form}.email`)}
                            placeholderTextColor={'#FFFFFF99'}
                            selectionColor="#FFFFFF99"
                            ref={el => inputsRef[2] = el}
                        />
                        <TextInput
                            onChangeText={(txt) => setFormValuesFunc('phone', txt)}
                            value={formValues.phone}
                            style={styles.input}
                            placeholder={t(`${form}.phone`)}
                            placeholderTextColor={'#FFFFFF99'}
                            selectionColor="#FFFFFF99"
                            ref={el => inputsRef[8] = el}
                        />
                        <View style={[styles.rowDirection, { justifyContent: 'flex-end' }]}>
                            {!isNoCar && <View style={[{ width: '60%' }]}>
                                <TextInput
                                    onChangeText={(txt) => setFormValuesFunc('carKind', txt)}
                                    value={formValues.carKind}
                                    style={styles.input}
                                    placeholder={t(`${form}.carKind`)}
                                    placeholderTextColor={'#FFFFFF99'}
                                    selectionColor="#FFFFFF99"
                                    ref={el => inputsRef[3] = el}
                                />
                            </View>}
                            <View style={[{ width: '40%' }]}>
                                <TextInput
                                    onChangeText={(txt) => setFormValuesFunc('apartmentNum', txt)}
                                    value={formValues.apartmentNum}
                                    style={styles.input}
                                    placeholder={t(`${form}.apartmentNum`)}
                                    placeholderTextColor={'#FFFFFF99'}
                                    selectionColor="#FFFFFF99"
                                    ref={el => inputsRef[4] = el}
                                />
                            </View>
                        </View>
                        {!isNoCar && <TextInput
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
                        />}
                        <ScrollView
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
                                onValueChange={setRoofedParking}
                                value={roofedParking}
                                thumbColor={roofedParking ? 'black' : '#FFFFFF'}
                            />

                        </View>
                        <View style={styles.rowDirectionForText}>
                            <Text style={[styles.noteTxt, _styles().iconAndTxt]}>
                                {/* {t(`${form}.addParking`)} */}
                                אין לי רכב יש לי רק חניה
                            </Text>
                            <Switch
                                trackColor={{ false: '#374563', true: '#FFC803' }}
                                onValueChange={setNoCar}
                                value={isNoCar}
                                thumbColor={isNoCar ? 'black' : '#FFFFFF'}
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

                        <View style={[styles.rowDirection, _styles().viewWrapButton]}>
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
            <CarDetailsDialog
                visible={showAuthDialog}
                setVisible={setAuthDialog}
            />
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