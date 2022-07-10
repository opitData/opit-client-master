import React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const gateOpenSuccess = 'gateOpenSuccess'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();


    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${gateOpenSuccess}.title`)}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${gateOpenSuccess}.submit`),
                    width: 120,
                }
            ]}
        />
    )
}

