import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderWrapper from '../header/HeaderWrapper';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import axios from 'axios';


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
            <Text>{m.mes}</Text>
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