import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderWrapper from '../header/HeaderWrapper';

export default (props) => {
    const { t } = useTranslation()
    const txt = 'messages'.toString();
    const {
        navigation
    } = props;
    return (
        <>
            <HeaderWrapper
                navigation={navigation}
                title={t(`${txt}.title`)}
            />
        </>
    )
}