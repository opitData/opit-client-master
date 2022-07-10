import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {navigateScreen} from '../../routes/routes';
import styles from '../../styles/Styles';
import {dark, dominant} from '../../styles/SystemColor';
import {Bold, Regular} from '../../styles/SystemFonts';
import Button from '../genericComponents/Button';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import Header from '../header/Header';
import ParkingPermitDialog from '../dialog/ParkingPermit.dialog';
import ParkingPermit2Dialog from '../dialog/ParkingPermit2.dialog';
import T from '../genericComponents/T';

export default props => {
  const requestParkingList = 'requestParkingList'.toString();
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);
  const data = [
    {
      parkingTo: 'היום',
      fromHour: '08:00',
      toHour: '21:00',
      family: 'כהן',
      homeNum: '19',
    },
    {
      parkingTo: 'היום',
      fromHour: '08:00',
      toHour: '21:00',
      family: 'כהן',
      homeNum: '19',
    },
  ];

  const renderItem = ({item}) => (
    <View style={[_styles().wrapListItem, styles.placeCenter]}>
      <Row>
        <Col cols={1} style={_styles().col}>
          <T
            style={_styles().txt}
            text={t(`${requestParkingList}.parkingTo`) + item.parkingTo}
          />
          {/* <Text style={_styles().txt}>{t(`${requestParkingList}.parkingTo`) + item.parkingTo}</Text> */}
        </Col>
        <Col cols={1} style={_styles().col}>
          <T style={[_styles().hour]} text={item.fromHour} />
          {/* <Text style={[_styles().hour]}>{item.fromHour}</Text> */}
        </Col>
        <Col cols={1} style={_styles().col}>
          <Row>
            <Text
              style={_styles().txt}
              text={t(`${requestParkingList}.family`) + item.family}
            />
            {/* <Text style={_styles().txt}>{t(`${requestParkingList}.family`) + item.family}</Text> */}
          </Row>
          <Row>
            <T
              style={_styles().txt}
              text={t(`${requestParkingList}.homeNum`) + item.homeNum}
            />
            {/* <Text style={_styles().txt}>{t(`${requestParkingList}.homeNum`) + item.homeNum}</Text> */}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col cols={1}></Col>
        <Col cols={1} style={_styles().col}>
          <Text style={[_styles().hour]} text={item.toHour} />
          {/* <Text style={[_styles().hour]}>{item.toHour}</Text> */}
        </Col>
        <Col cols={1} style={_styles().col}>
          <Button
            handlePress={() => {
              setVisible(true);
            }}
            kind={'outline'}
            colorOutline={dominant}
            size="small"
            width={130}
            content={t(`${requestParkingList}.parkingPermit`)}
          />
        </Col>
      </Row>
    </View>
  );

  return (
    <>
      <Header
        headerRightElement={
          <T
            style={_styles().rightTitle}
            text={t(`${requestParkingList}.requestParkingList`)}
          />
          // <Text style={_styles().rightTitle}>
          //     {t(`${requestParkingList}.requestParkingList`)}
          // </Text>
        }
      />
      <FlatList data={data} renderItem={renderItem} />
      <ParkingPermit2Dialog visible={visible} setVisible={setVisible} />
    </>
  );
};

const _styles = () =>
  StyleSheet.create({
    wrapListItem: {
      backgroundColor: dark,
      paddingHorizontal: 25,
      paddingVertical: 15,
      direction: 'rtl',
      borderRadius: 10,
      marginTop: 10,
    },
    txt: {
      fontFamily: Regular,
      fontSize: PixelRatio.getFontScale() + 16,
      lineHeight: 22,
    },
    rightTitle: {
      color: 'white',
      fontSize: PixelRatio.getFontScale() + 27,
      fontFamily: Bold,
    },
    col: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    hour: {
      fontSize: PixelRatio.getFontScale() + 38,
      fontFamily: Regular,
    },
  });
