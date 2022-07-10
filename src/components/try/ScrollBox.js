import React, { Component, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { returnBoldTxt, returnRegularTxt } from '../../styles/Styles';
import { dark, note } from '../../styles/SystemColor';
import { Bold, Regular } from '../../styles/SystemFonts';
import ScrollPicker from '../genericComponents/ScrollData';
import T from '../genericComponents/T';
// export default class ScrollBox extends Component {
// data = {
//     'daysList': [
//         t(`${days}.sun`),

//         t(`${days}.mon`)
//         ,
//         t(`${days}.tue`)
//         ,
//         t(`${days}.wed`)
//         ,
//         t(`${days}.thu`)
//         ,
//         t(`${days}.fri`)
//         ,
//         t(`${days}.sat`)
//     ],
//     'digitsList': Array(25)
//         .fill("")
//         .map((_, i) => (i == 0 ? undefined : i)),
//     'hoursList': Array(25)
//         .fill("")
//         .map((_, i) => (i == 0 ? undefined : i))
// }
// constructor(props) {
//     super(props);
// }
// render() {

export default (props) => {
    const {
        title,
        kindList,
        returnTxt,
        setSelectedItem,
        alignItems
    } = props;

    const { t } = useTranslation();
    const days = 'days'.toString();
    const data = {
        'daysList': [
            t(`${days}.sun`),
            t(`${days}.mon`),
            t(`${days}.tue`),
            t(`${days}.wed`),
            t(`${days}.thu`),
            t(`${days}.fri`),
            t(`${days}.sat`)
        ],
        'digitsList': Array(24)
            .fill("")
            .map((_, i) => (i)),
        'hoursList': Array(24)
            .fill("")
            .map((_, i) => (i))
    }
    const [sp, setSp] = useState(null);
    return (

        <ScrollPicker
            title={title}
            alignItems={alignItems}
            ref={(sp) => { setSp(sp) }}
            dataSource={data[kindList]}
            itemHeight={35}
            selectedIndex={1}
            setSelectedItem={setSelectedItem}
            renderItem={(data, index, isSelected) => {
                return (
                    <View style={{ justifyContent: 'center' }}>
                        <T
                            style={[returnBoldTxt(21, isSelected ? 'white' : '#374563')]}
                            text={returnTxt(data)}
                        />
                        {/* <Text style={[returnBoldTxt(21, isSelected ? 'white' : '#374563')]}>{returnTxt(data)}</Text> */}
                    </View>
                )
            }}
            onValueChange={(data, selectedIndex) => {
            }}
        />
    )
}

