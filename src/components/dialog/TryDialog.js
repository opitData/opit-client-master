import React, { useState } from 'react';
import UnableToOpenGateDialog from './ UnableToOpenGate.dialog';
import GateOpenSuccessDialog from './GateOpenSuccess.dialog';
import DeleteParkingDialog from './DeleteParking.dialog';
import ParkingPermitDialog from './ParkingPermit.dialog';
import DemandParking1Dialog from './DemandParking1.dialog';
import DemandParking2Dialog from './DemandParking2.dialog';
import CancelParkingDialog from './CancelParking.dialog';
import SaveParkingDialog from './SaveParking.dialog';
import SystemWarningDialog from './SystemWarning.dialog';
import DeleteCarDialog from './DeleteCar.dialog';
import ParkingPermit2Dialog from './ParkingPermit2.dialog';
import SystemAlertDialog from './SystemAlert.dialog';
import SystemAlert2Dialog from './SystemAlert2.dialog';

export default () => {

    const [visible, setVisible] = useState(true);

    return (
        <>
            <UnableToOpenGateDialog
                visible={visible}
                setVisible={setVisible}
            />
            {/* <GateOpenSuccessDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <DeleteParkingDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <ParkingPermitDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <DemandParking1Dialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <DemandParking2Dialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <CancelParkingDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <SaveParkingDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <SystemWarningDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <DeleteCarDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <ParkingPermit2Dialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            {/* <SystemAlertDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
             <SystemAlert2Dialog
                visible={visible}
                setVisible={setVisible}
            />
        </>
    )
}