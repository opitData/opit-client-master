import React, {useState} from 'react';
import {connect} from 'react-redux';
import DataBox from '../genericComponents/DataBox';

function DailyParkingBoxes(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const {title, secondTitle, kindList, width} = props;

  const returnTxt = key => {
    let txt = key;
    if (key < 10) {
      txt = `0${key}`;
    }
    return selectedItem == key && kindList == 'hoursList'
      ? `${txt} : 00`
      : txt != undefined && `${txt}`;
  };

  return (
    <>
      <DataBox
        title={title}
        // secondTitle={secondTitle}
        kindList={kindList}
        returnTxt={returnTxt}
        width={width}
        height={150}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </>
  );
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DailyParkingBoxes);
