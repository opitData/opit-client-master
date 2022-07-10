import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import HeaderWrapper from '../../header/HeaderWrapper';
import Wrap from '../Wrap'

function AauthorizedManagement(props) {
    const {
        navigation
    } = props;
    const { t } = useTranslation();
    const txt = 'authorizedManagement'.toString();

    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >

            </HeaderWrapper>


        </>
    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchTuProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchTuProps)(AauthorizedManagement);
