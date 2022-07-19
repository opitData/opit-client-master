import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import {
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { languages } from '../../i18/languageList';
import Notification from '../../assets/svg/notification.svg';
import Row from '../genericComponents/Row';
import { useTranslation } from 'react-i18next';
import { dominantLight, ligthDominant } from '../../styles/SystemColor';
import { Bold } from '../../styles/SystemFonts';
import Gate from '../../assets/svg/gate.svg';
import P from '../../assets/svg/p.svg';
import Parking24h from '../../assets/svg/parking24h.svg';
import Calendar from '../../assets/svg/calendar.svg';
import StyleFuncs from '../../styles/StyleFuncs';
import DropDown from '../dropdwon/DropDown';
import { navigateScreen } from '../../routes/routes';
import styles, { headerWithTitle } from '../../styles/Styles';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { returnTitle } from '../genericComponents/GenericFunctions';
import T from '../genericComponents/T';
import { AsyncStorage } from 'react-native';
import axios from 'axios';



function Home(props) {
  const { _propertiesList, _emptyParkingList, _tab, _setTab } = props;
  const { t, i18n } = useTranslation();
  const home = 'home'.toString();
  const [activeDailyParking, setActiveDailyParking] = useState(false);
  const [activeHourlyParking, setActiveHourlyParking] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState([]);
  let dropDownArr = [
    {
      index: 0,
      item: 'השלושה 9',
    },
    {
      index: 1,
      item: 'ביבא לת ,22 דלישטור',
    },
  ];
  const activeHourlyParkingFunc = () => {
    setActiveHourlyParking(!activeHourlyParking);
  };

  const activeDailyParkingFunc = () => {
    setActiveDailyParking(!activeDailyParking);
  };

  useEffect(async () => {
    AsyncStorage.getItem('address').then((address) => setAddress([{ "index": 0, "item": address }]))
    AsyncStorage.getItem('name').then((name) => setName(name))

  }, [])

  return (
    <>
      <Header
        {...props}
        headerRightElement={
          // <Text
          //     numberOfLines={1}
          //     style={headerWithTitle()}
          // >
          //     {returnTitle() + " דודי "}
          // </Text>
          <T
            style={headerWithTitle()}
            numberOfLines={1}
            fontSize={25}
            text={returnTitle() + " " + name}
          />
        }
      />
      <ScrollView>
        <View style={{ paddingTop: 10 }}>
          <DropDown array={address} txtNote={true} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigateScreen(props, 'Messages');
          }}
          style={StyleFuncs.returnDarkBtnStyle()}>
          <Row style={_styles().row}>
            <T
              style={_styles().btnTxt}
              text={t(`${home}.notificationsList`)}
              numberOfLines={1}
              fontSize={Math.abs(1 - PixelRatio.getFontScale()) + 18}
            />
            <Notification />
          </Row>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateScreen(props, 'Gate')}
          style={StyleFuncs.returnDarkBtnStyle()}>
          <Row style={_styles().row}>
            <Gate />
            <T
              style={_styles().btnTxt}
              text={t(`${home}.openGates`)}
              numberOfLines={1}
              fontSize={Math.abs(1 - PixelRatio.getFontScale()) + 18}
            />
          </Row>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigateScreen(props, 'EmptyParkings', { tab: 'Parkings' });
          }}
          style={StyleFuncs.returnDarkBtnStyle()}>
          <Row style={_styles().row}>
            <P />
            <T
              style={_styles().btnTxt}
              text={t(`${home}.emptyParkingsList`)}
              numberOfLines={1}
              fontSize={Math.abs(1 - PixelRatio.getFontScale()) + 18}
            />
            <View style={_styles().avatarView}>
              <T
                style={_styles().avatarTxt}
                text={_emptyParkingList.length}
                numberOfLines={1}
                fontSize={16}
              />
            </View>
          </Row>
        </TouchableOpacity>
        <Row>
          <TouchableOpacity
            style={[
              StyleFuncs.returnDarkBtnStyle('45%', 120),
              activeHourlyParking && _styles().activeBorder,
            ]}
            // onPress={activeHourlyParkingFunc}
            onPress={() =>
              navigateScreen(props, 'Parkings', { switchHourlyParking: true })
            }>
            <Parking24h width={40} height={40} />
            <T
              style={_styles(15).btnTxt}
              text={t(`${home}.hourlyParkingPermit`)}
              numberOfLines={1}
              fontSize={Math.abs(1 - PixelRatio.getFontScale()) + 15}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              StyleFuncs.returnDarkBtnStyle('45%', 120),
              activeDailyParking && _styles().activeBorder,
            ]}
            onPress={() =>
              navigateScreen(props, 'Parkings', { switchDailyParking: true })
            }>
            <Calendar width={40} height={40} />
            <T
              style={_styles(15).btnTxt}
              text={t(`${home}.dailyParkingPermit`)}
              numberOfLines={1}
              fontSize={Math.abs(1 - PixelRatio.getFontScale()) + 15}
            />
          </TouchableOpacity>
        </Row>
        <TouchableOpacity
          style={StyleFuncs.returnDarkBtnStyle()}
          onPress={() => {
            navigateScreen(props, 'ReservedParkingsList', { tab: 'Parkings' });
          }}>
          <Row style={_styles().row}>
            <T
              style={_styles().btnTxt}
              text={t(`${home}.reservedParkingsList`)}
              numberOfLines={1}
              fontSize={Math.abs(1 - PixelRatio.getFontScale()) + 18}
            />
          </Row>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const mapStateToProps = state => ({
  ...state,
  _propertiesList: state.parkings.propertiesList,
  _emptyParkingList: state.parkings.emptyParkingList,
  _tab: state.general.tab,
});

const mapDispatchToProps = dispatch => ({
  _setTab: tab => dispatch(actions.setTab(tab)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const _styles = paddingTop =>
  StyleSheet.create({
    btnTxt: {
      color: dominantLight,
      fontFamily: Bold,
      // fontSize: Math.abs(1 - PixelRatio.getFontScale()) + 18,
      fontSize: 18,
      paddingHorizontal: 10,
      paddingTop,
    },
    avatarView: {
      backgroundColor: ligthDominant,
      width: 20,
      height: 20,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    active: {
      color: ligthDominant,
    },
    avatarTxt: {
      color: 'black',
      // fontWeight: 'bold'
    },
    activeBorder: {
      borderColor: ligthDominant,
      borderWidth: 3,
    },
    row: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
