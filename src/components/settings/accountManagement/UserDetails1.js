import React from 'react';
import Header from '../../header/Header';
import Wrap from '../Wrap';
import {
    Text,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import styles, { returnBoldTxt } from '../../../styles/Styles';
import { Bold, Regular } from '../../../styles/SystemFonts';
import { navigateScreen } from '../../../routes/routes';
import HeaderWrapper from '../../header/HeaderWrapper';
import T from '../../genericComponents/T';

function UserDetails1(props) {
    const {
        navigation,
        _user
    } = props;
    const { t } = useTranslation();
    const txt = 'userDetails'.toString();
    const renderItem = () => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() =>
                        // alert(item.navigate)
                        navigateScreen(props, 'UserDetails2', 'Setting')
                    }
                >
                    <T
                        style={[styles.settingItemTxt, returnBoldTxt(19)]}
                        text={`${_user.fname}  ${_user.lname}`}
                    />
                    {/* <Text style={[styles.settingItemTxt, returnBoldTxt(19)]}>
                        {`${_user.fname}  ${_user.lname}`}
                    </Text> */}
                </TouchableOpacity>
                <View style={styles.headerBottomDivider}></View>
            </>
        )
    }
    return (
        <>
            <HeaderWrapper
                title={t(`${txt}.title`)}
                navigation={navigation}
                arrow={true}
            >
                <ScrollView>

                    {renderItem()}

                </ScrollView>
            </HeaderWrapper>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _user: state.user.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails1);

const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65
        },
        row: {
            alignItems: 'center'
        },

    }
)