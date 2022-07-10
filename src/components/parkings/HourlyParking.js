import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Switch } from 'react-native';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import AnimatedView from '../genericComponents/AnimatedView';
import { useTranslation } from 'react-i18next';
import HourlyParkingPermit from './HourlyParkingPermit';
import ConfirmedParkingDetails from './ConfirmedParkingDetails';
import T from '../genericComponents/T';

function HourlyParking(props) {
  const {
    switchHourlyParking,
    toggleSwitchHourlyParking,
    styles,
    setCloseDialog,
    closeDialog,
  } = props;

  const { t } = useTranslation();
  const parking = 'parking'.toString();

  return (
    <>
      <View style={styles().permitView}>
        <Row>
          <Col cols={1}>
            <Row>
              <T
                style={styles().boldTxt}
                text={t(`${parking}.hourlyParkingPermit`)}
              />
              {/* <Text style={styles().boldTxt}>{t(`${parking}.hourlyParkingPermit`)}</Text> */}
            </Row>
            <AnimatedView
              style={{ display: switchHourlyParking ? 'none' : 'flex' }}>
              <Row>
                <T style={styles().txt} text={t(`${parking}.subTitle1`)} />
                {/* <Text style={styles().txt}>{t(`${parking}.subTitle1`)}</Text> */}
              </Row>
            </AnimatedView>
          </Col>

          <Col cols={1} style={styles().switch}>
            <Switch
              trackColor={{ false: '#374563', true: '#FFC803' }}
              onValueChange={toggleSwitchHourlyParking}
              value={switchHourlyParking}
              thumbColor={switchHourlyParking ? 'black' : '#FFFFFF'}
            />
          </Col>
        </Row>

        <HourlyParkingPermit
          visible={switchHourlyParking}
          setCloseDialog={setCloseDialog}
          closeDialog={closeDialog}
        />
        <ConfirmedParkingDetails visible={closeDialog && switchHourlyParking} />
      </View>
    </>
  );
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HourlyParking);
