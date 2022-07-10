import React,{useState} from 'react';
import { connect, useSelector } from 'react-redux';
import DeleteCarDialog from '../dialog/DeleteCar.dialog';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Dimensions,
    PixelRatio,
    ToastAndroid
} from 'react-native';
import ChipButton from '../genericComponents/ChipButton';
import { bg, dark, dominant, ligth } from '../../styles/SystemColor';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { Bold, Regular } from '../../styles/SystemFonts';
import { actions } from '../../redux/actions';
import Button from '../genericComponents/Button';
import AnimatedView from '../genericComponents/AnimatedView';
import Star from '../../assets/svg/star.svg'
import T from '../genericComponents/T';
import axios from 'axios';
function ParkingForNewGuest(props) {
    const { t } = useTranslation();
    const txt1 = 'parkingForNewGuest'.toString();
    const txt2 = 'reservedParkingsList'.toString();
    const emptyParking = 'emptyParkings'.toString();
    const gateLink = "http://10.0.0.3:8000/GateOperation/";
    const [carNumber , setCarNumber] = useState("")
    const [fromDay , setFromDay] = useState("0")
    const {
        _parkingRequest,
        setOpenDialog,
        _selectedParking,
        setVisible,
        saveParkingForGuest
    } = props;
    const inputList = [
         {
             placeholder: t(`${txt1}.name`),
           
        },
         {
             placeholder: t(`${txt1}.carKind`),   
         },    
        {
            placeholder: t(`${txt1}.carId`),
        },
    ]
     
    const addGuest = async () => {
        let req_start_time = _parkingRequest.startTime
        let req_end_time = _parkingRequest.endTime 

        const d = new Date();
        let date1 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), req_start_time, '00', '00'))
        let date2 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), req_end_time, '00', '00'))
        let timeStamp1 = date1.getTime() / 1000;
        let timeStamp2 = date2.getTime() / 1000;
        
        var body ={  
        entryDateTime : timeStamp1.toString(),
        exitDateTime : timeStamp2.toString(),
        plateNumber: carNumber
        };

        await axios.put() //לזהות איזה דייר משתמש במכשיר
        await axios.post(gateLink, body);

    //   let res = await axios.get(gateLink)
    //   let guestsList = res.data  
    //   if( guestsList.length > 0){
    //     let newGuestList = guestsList[0]
    //     newGuestList.push(body)
    //     console.log(newGuestList)
    //     await axios.put(gateLink + guestsList[0]._id , newGuestList)
    //   }
    //  else await axios.post(gateLink,[body]);
     
    }
   
    const buttons = <Row style={_styles().btnRow}>
        <Button
            content={t(`${txt1}.btn1`)}
            width={140}
            handlePress ={() => addGuest()}
            
           /* handlePress={() => {
                setVisible(false)
               /* setOpenDialog(true)
                saveParkingForGuest()
                
            }}*/
        />
        <Button
            kind="outline"
            handlePress={() => setVisible(false)}
            content={t(`${txt1}.btn2`)}
            colorOutline={ligth}
            width={140}
        />
    </Row>
    const textInput = ({ item }) => <TextInput
        style={[styles.input, _styles().input]}
        placeholder={item.placeholder} 
        onChangeText = {text => setCarNumber(text)}  
        placeholderTextColor={'#FFFFFF99'}
        selectionColor="#FFFFFF99"
    />
    const selectedParkingDetails =
        <Row
            style={[_styles().swipeItem, _styles().swipeFront]}
        >
            <Col cols={1} style={_styles('center').col}>
                <Row >
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.fromDay`) + _selectedParking.fromDay}  
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.fromDay`) + _selectedParking.fromDay}</Text> */}
                </Row>
                <Row >
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.toDay`) + _selectedParking.toDay}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.toDay`) + _selectedParking.toDay}</Text> */}
                </Row>
            </Col>

            <Col cols={1.2} style={_styles().col}>
                <Row>
                    <T
                        style={_styles().hour}
                        text={_selectedParking.fromHour}
                    />
                    {/* <Text style={_styles().hour}>{_selectedParking.fromHour}</Text> */}
                </Row>
                <Row>
                    <T
                        style={_styles().hour}
                        text={_selectedParking.toHour}
                    />
                    {/* <Text style={_styles().hour}>{_selectedParking.toHour}</Text> */}
                </Row>
            </Col>
            <Col cols={1} style={_styles().col}>
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.floor`) + _selectedParking.floor}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.floor`) + _selectedParking.floor}</Text> */}
                </Row>
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.numParking`) + _selectedParking.numParking}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.numParking`) + _selectedParking.numParking}</Text> */}
                </Row>
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${txt2}.family`) + _selectedParking.family}
                    />
                    {/* <Text style={_styles().txt}>{t(`${txt2}.family`) + _selectedParking.family}</Text> */}
                </Row>
            </Col>
            <Col cols={0.7} style={_styles('center').col}>
                <Row>
                    <T
                        style={_styles().largeTxt}
                        text={_selectedParking.stars}
                    />
                    {/* <Text style={_styles().largeTxt}>
                        {_selectedParking.stars}
                    </Text> */}
                </Row>
                <Star />
                <Row>
                    <T
                        style={_styles().txt}
                        text={t(`${emptyParking}.stars`)}
                    />
                    {/* <Text style={_styles().txt}>{t(`${emptyParking}.stars`)}</Text> */}
                </Row>
            </Col>
        </Row>

    return (
        <>
            <AnimatedView style={_styles().centeredView}>
                <View style={_styles().modalView}>
                    <T
                        style={_styles().title}
                        text={t(`${txt1}.title`)}
                        onChangeText={newText => ToastAndroid.show(newText,10)}
                       
                    />
                    {/* <Text style={_styles().title}>
                        {t(`${txt1}.title`)}
                    </Text> */}
                    <FlatList
                        style={{ width: '100%' }}
                        data={inputList}      
                      
                        renderItem={textInput}
                        scrollEnabled={false}
                        

                    />
                    <AnimatedView>
                        {_selectedParking && _selectedParking.floor && selectedParkingDetails}
                    </AnimatedView>
                    {buttons}
                    <ChipButton
                        handlePress={() => setVisible(false)}
                    />
                </View>
            </AnimatedView>
        </>
    )
}
const mapStateToProps = state => {return {
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _parkingRequest: state.properties.parkingRequest,
    _selectedParking: state.parkings.selectedParking
}}

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (item) => dispatch(actions.setSelectedGuest(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkingForNewGuest);

const _styles = (alignItems) => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#17151559',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: PixelRatio.getFontScale() + 28,
        // fontWeight: 'bold',
        fontFamily: Bold,
        paddingVertical: 15
    },
    input: {
        margin: 7,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        height: 65
    },
    largeTxt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 35,
    },
    subTiltle: {
        alignSelf: 'center',
        marginVertical: 20,
        fontSize: PixelRatio.getFontScale() + 20,
        fontFamily: Bold
    },
    btnRow: {
        direction: 'rtl',
        paddingVertical: 25
    },
    selectedGuest: {
        direction: 'rtl',
        alignItems: 'center',
        borderColor: '#979eae',
        borderWidth: 1,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        height: 50,
        backgroundColor: dark,
        marginTop: 20
    },
    row: {
        alignItems: 'center'
    },
    col: {
        justifyContent: 'space-around',
        alignItems
    },
    hour: {
        fontSize: PixelRatio.getFontScale() + 38,
        fontFamily: Regular
    },
    swipeItem: {
        height: 110,
        borderRadius: 10,
        // borderColor: '#05FF00',
        backgroundColor: dark,
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
        width: '90%',
        marginTop: 20

    },
    txt: {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + 16,
        lineHeight: 25,
    },
    item: {
        padding: 10
    },
    modalView: {
        backgroundColor: bg,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '94%',
        // minHeight: 360,
        alignSelf: 'center',
        paddingVertical: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'white'
    }
});