import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import SettingsList from '../../genericComponents/SettingsList';
import HeaderWrapper from '../../header/HeaderWrapper';

function AdminPrivileges(props) {
    const { t } = useTranslation();
    const txt = 'adminiPrivileges'.toString();
    const {
        navigation,
    } = props;

    const jsonSetting = [
        {
            item: t(`${txt}.usersList`),
            navigate: 'UsersList'
        },
        {
            item: t(`${txt}.adminList`),
            // navigate: 'GeneralManagement'
        },
        {
            item: t(`${txt}.reports`),
            // navigate: 'GeneralManagement'
        },
        {
            item: t(`${txt}.installationAndWarranty`),
            // navigate: 'GeneralManagement'
        }
    ]
    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <SettingsList
                    settingsList={jsonSetting}
                    {...props}
                />
            </HeaderWrapper>

        </>
    )
}
const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPrivileges)