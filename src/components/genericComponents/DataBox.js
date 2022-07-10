import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native';
import Col from './Col';
import { dark } from '../../styles/SystemColor';
import { Bold } from '../../styles/SystemFonts';
import { useTranslation } from 'react-i18next';
import Row from './Row';
import CheckBox from '../try/CheckBox';
import ScrollBox from '../try/ScrollBox';
import T from './T';

export default (props) => {

    const { t } = useTranslation();
    const days = 'days'.toString();
    const {
        title,
        subTitle,
        kindList,
        returnTxt,
        width,
        height,
        selectedItem,
        setSelectedItem,
        centerContent,
        list,
        key,
        alignItems
    } = props;

    const data = {
        'daysList': [
            t(`${days}.sun`),

            t(`${days}.mon`)
            ,
            t(`${days}.tue`)
            ,
            t(`${days}.wed`)
            ,
            t(`${days}.thu`)
            ,
            t(`${days}.fri`)
            ,
            t(`${days}.sat`)
        ],
        'digitsList': Array(25)
            .fill("")
            .map((_, i) => (i == 0 ? undefined : i + 1)),
        'hoursList': Array(25)
            .fill("")
            .map((_, i) => (i == 0 ? undefined : i + 1))
    }

    return (
        <>
            <Col cols={1}>
                <View style={_styles(width, height).hoursView}>
                    <Row style={_styles().aaa}>
                        <Col cols={1} >
                            {/* <Text style={_styles().titleScrollView}>
                                {title}
                            </Text> */}
                            <T
                                style={_styles().titleScrollView}
                                text={title}
                            />
                            {subTitle &&
                                // <Text style={_styles().titleScrollView}>
                                //     {subTitle}
                                // </Text >
                                <T
                                    style={_styles().titleScrollView}
                                    text={subTitle}
                                />
                            }
                            <View style={_styles().titleDecoration}></View>
                            {/* <CheckBox
                                style={[{ alignSelf: 'center', }]}
                                setSelectedItem={setSelectedItem}
                                returnTxt={returnTxt}
                                selectedItem={selectedItem}
                                data={data[kindList]}
                                centerContent={centerContent} key={key}
                            /> */}
                            <ScrollBox
                                alignItems={alignItems}
                                kindList={kindList}
                                returnTxt={returnTxt}
                                setSelectedItem={setSelectedItem}
                            />
                        </Col>
                        {/* {kindList == 'daysList' &&
                            <Col cols={1}>
                                <Text style={_styles().titleScrollView}>
                                    {secondTitle}
                                </Text>
                                {subTitle &&
                                    <Text style={_styles().titleScrollView}>
                                        {subTitle}
                                    </Text >
                                }
                                <View style={_styles().titleDecoration}></View>
                                <CheckBox
                                    style={{ alignSelf: 'center' }}
                                    setSelectedItem={setSelectedItem}
                                    returnTxt={returnTxt}
                                    selectedItem={selectedItem}
                                    data={data[kindList]}
                                />
                            </Col>
                        } */}
                    </Row>
                </View>
            </Col>
        </>
    )
}

const _styles = (width, height) => StyleSheet.create({
    hoursView: {
        backgroundColor: dark,
        // height: 160,
        borderRadius: 7,
        paddingVertical: 10,
        marginTop: 25,
        alignSelf: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        width,
        height,
        overflow: 'hidden'
    },
    aaa: {
        overflow: 'scroll',
    },
    hourItem: {
        height: 30,
        margin: 3,
        alignItems: 'center',
    },
    titleScrollView: {
        color: '#43A6FF',
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + 15,
        alignSelf: 'center'
    },
    titleDecoration: {
        borderBottomColor: '#374563',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '80%',
        padding: 2,
        alignSelf: 'center'
    }
})