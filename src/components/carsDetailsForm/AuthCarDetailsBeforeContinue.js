import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import i18 from '../../i18/i18n';
import { useTranslation } from 'react-i18next';
import { goBack, navigateScreen } from '../../routes/routes';
import { connect } from 'react-redux';
import Button from '../genericComponents/Button';

export function AuthCarDetailsBeforeContinue(props) {

    const {
        t
    } = useTranslation();

    const {
        _cars,
        _countNumParking
    } = props;

    const authCarDetailsBeforeContinue = 'authCarDetailsBeforeContinue'.toString();

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <TouchableOpacity
                        onPress={() => goBack(props
                        )}>
                        <ArrowBack />
                    </TouchableOpacity>
                }
            />
            <Text style={styles.title}>
                {i18.t(`${authCarDetailsBeforeContinue}.title`)}
            </Text>

            <View style={styles.placeCenter}>
                <Text
                    style={[styles.txt, _styles.details]}
                >
                    {t(`${authCarDetailsBeforeContinue}.details`)}
                    {" "}
                    {3}
                </Text>

                <Button
                    handlePress={() => navigateScreen(props, 'AuthCarDetails')}
                    size="large"
                    width={180}
                    content={t(`${authCarDetailsBeforeContinue}.submit`)}
                />
            </View>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _cars: state.cars.cars,
    _countNumParking: state.cars.countNumParking
})

const mapDispatchToProps = dispatch => ({
    // setStyleCard: (style) => dispatch(actions.setStyleCard(style)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthCarDetailsBeforeContinue);

const _styles = StyleSheet.create(
    {
        details: {
            marginVertical: '10%'
        }
    }
)