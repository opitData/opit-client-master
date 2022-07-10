import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Row from '../genericComponents/Row';
import Home from '../../assets/svg/footer/home.svg';
import Settings from '../../assets/svg/footer/settings.svg';
import P from '../../assets/svg/footer/p.svg';
import Gate from '../../assets/svg/footer/gate.svg';
import Message from '../../assets/svg/footer/message.svg';
import YellowMessage from '../../assets/svg/footer/yellowMessage.svg';
import YellowHome from '../../assets/svg/footer/yellowHome.svg';
import YellowSettings from '../../assets/svg/footer/yellowSettings.svg';
import YellowP from '../../assets/svg/footer/yellowP.svg';
import YellowGate from '../../assets/svg/footer/yellowGate.svg';
import {useTranslation} from 'react-i18next';
import {navigateScreen} from '../../routes/routes';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import {dark, dominant} from '../../styles/SystemColor';
import {Bold, Regular} from '../../styles/SystemFonts';
import T from '../genericComponents/T';

function Footer(props) {
  const {_tab, _setTab} = props;

  const footer = 'footer'.toString();
  const {t} = useTranslation();
  const [index, setIndex] = useState(4);

  const handlePressTab = item => {
    _setTab(item.item.navigate);
    setIndex(item.index);
    navigateScreen(props, item.item.navigate);
  };

  const returnIcon = item => {
    let Icon = null;
    if (_tab == item.item.navigate) Icon = item.item.yellowIcon;
    else Icon = item.item.icon;
    return <Icon width={25} height={25} />;
  };

  const footerIcons = [
    {
      name: 'tab1',
      icon: Settings,
      yellowIcon: YellowSettings,
      title: t(`${footer}.tab1`),
      navigate: 'Setting',
      bgcolor: 'red',
    },
    {
      name: 'tab2',
      icon: Message,
      yellowIcon: YellowMessage,
      title: t(`${footer}.tab2`),
      navigate: 'Messages',
      bgcolor: 'orange',
    },
    {
      name: 'tab3',
      icon: P,
      yellowIcon: YellowP,
      title: t(`${footer}.tab3`),
      navigate: 'Parkings',
      bgcolor: 'yellow',
    },
    {
      name: 'tab4',
      icon: Gate,
      yellowIcon: YellowGate,
      title: t(`${footer}.tab4`),
      navigate: 'Gate',
      bgcolor: 'lightgreen',
    },
    {
      name: 'tab5',
      icon: Home,
      yellowIcon: YellowHome,
      title: t(`${footer}.tab5`),
      navigate: 'Home',
      bgcolor: 'lightblue',
    },
  ];

  return (
    <View style={_styles().footer}>
      <Row>
        <FlatList
          scrollEnabled={false}
          style={{alignSelf: 'center'}}
          horizontal
          data={footerIcons}
          renderItem={item => (
            <TouchableOpacity
              onPress={() => {
                handlePressTab(item);
              }}
              style={[_styles().tab]}>
              {returnIcon(item)}
              <T
                style={
                  _styles(_tab == item.item.navigate ? dominant : '#FFFFFF99')
                    .footerTxt
                }
                text={item.item.title}
              />
              {/* <Text 
                            style={_styles(_tab == item.item.navigate ? dominant : '#FFFFFF99').footerTxt}>
                                {item.item.title}
                                </Text> */}
            </TouchableOpacity>
          )}
        />
      </Row>
    </View>
  );
}
const mapStateToProps = state => ({
  ...state,
  _tab: state.general.tab,
});

const mapDispatchToProps = dispatch => ({
  _setTab: tab => dispatch(actions.setTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

const _styles = color =>
  StyleSheet.create({
    footer: {
      backgroundColor: dark,
      height: 75,
      bottom: 0,
    },
    tab: {
      alignItems: 'center',
      justifyContent: 'center',
      // height: 65,
      paddingVertical: 22,
      zIndex: 1,
      width: Dimensions.get('window').width / 5,
      overflow: 'visible',
    },
    footerTxt: {
      color: '#FFFFFF99',
      fontFamily: Bold,
      // fontFamily: 'Assistant-Regular'
    },
    message: {
      zIndex: 1,
    },
  });
