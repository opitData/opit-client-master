import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderWrapper from '../header/HeaderWrapper';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import T from '../genericComponents/T';
import styles, { returnBoldTxt, returnDarkBtn, returnGrayButton } from '../../styles/Styles';
import StyleFuncs from '../../styles/StyleFuncs';

export default (props) => {
    const [mes, setMes] = useState([])
    const { t } = useTranslation()
    const txt = 'messages'.toString();
    const {
        navigation
    } = props;
    const usersLink = "http://10.0.0.3:8000/users/";
    useEffect(async () => {
        const phone = await AsyncStorage.getItem('phone');
        let users = await axios.get(usersLink)
        let array = [];
        users.data.forEach((user) => { if (user.phone == phone) array = user.messages })
        let messages = array.map((m) =>
            //  <TouchableOpacity>
            //     <T>
            //         {m.title + " " + m.date + " " + m.time}
            //     </T>
            //     <Text>
            //         {m.mes}
            //     </Text>
            // </TouchableOpacity>
            <TouchableOpacity
                disabled={true}
                style={[StyleFuncs.returnDarkBtnStyle('95%', '15%')]}>
                <T
                    style={[returnBoldTxt(40), { marginTop: 3, marginRight: 3 }]}
                    text={m.title}
                />
                <Text style={[styles.placeCenter]}>{m.mes}</Text>
                <Text style={[{ alignSelf: 'flex-start', justifyContent: 'flex-start', marginLeft: 2, marginTop: 10 }]}>{m.date + " " + m.time}</Text>
            </TouchableOpacity>

        )
        setMes(messages)
    }, [])
    return (
        <>
            <HeaderWrapper
                navigation={navigation}
                title={t(`${txt}.title`)}
            />
            {mes}
        </>
    )
}