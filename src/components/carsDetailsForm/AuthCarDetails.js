import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import i18 from '../../i18/i18n';
import { useTranslation } from 'react-i18next';
import BigDelete from '../../assets/svg/bigDelete.svg'
import Edit from '../../assets/svg/edit.svg'
import Button from '../genericComponents/Button';
import { goBack, navigateScreen } from '../../routes/routes';
import { connect } from 'react-redux';
import AuthCar from './AuthCar';
import { deleteAct, editAct } from '../../styles/SystemColor';

function AuthCarDetails(props) {

    const {
        t
    } = useTranslation();

    const {
        _cars
    } = props;

    const authCarDetails = 'authCarDetails'.toString();
    const [itemDeleteOrEdit, setItemDeleteOrEdit] = useState({});

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <TouchableOpacity onPress={() => goBack(props)}>
                        <ArrowBack />
                    </TouchableOpacity>
                }
            />
            <Text style={[styles.title]}>
                {i18.t(`${authCarDetails}.title`)}
            </Text>

            <View style={_styles().content}>
                {
                    _cars && _cars.map((car, index) =>
                        <AuthCar
                            car={car}
                            index={index}
                        />
                    )
                }
            </View>


            <View style={styles.placeCenter}>
                <Text style={[styles.txt, _styles().authCarDetails]}>{t(`${authCarDetails}.numParkings`) + ":"}</Text>

                <Button
                    handlePress={() => navigateScreen(props, 'Payments')}
                    content={t(`${authCarDetails}.continue`)}
                    width={180}
                    size="large"
                />
            </View>


        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _cars: state.cars.cars
})

const mapDispatchToProps = dispatch => ({
    // setStyleCard: (style) => dispatch(actions.setStyleCard(style)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthCarDetails);

const _styles = (flex) => StyleSheet.create(
    {
        indexCarTxt: {
            textAlign: 'center',
            marginTop: '2%'
        },
        authCarDetails: {
            marginVertical: '5%'
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
        content: {
            marginTop: '7%'
        },
        flex: {
            flex: flex
        }
    }
)