import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Logo from '../../assets/logo.svg';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { navigateScreen } from '../../routes/routes';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

function Home(props) {
    const {
        headerRightElement,
        _setTab,
        _tab
    } = props;

    return (
        <>
            <StatusBar
                animated={true}
            />
            <Row style={_styles.row}>
                <Col cols={1} style={_styles.leftCol}>
                    <TouchableOpacity
                        onPress={() => navigateScreen(props, 'Home')}
                    >
                        <Logo />
                    </TouchableOpacity>
                </Col>
                <Col cols={3} style={_styles.rightCol}>
                    {headerRightElement}
                </Col>
            </Row>
            <View style={styles.headerBottomDivider}></View>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _tab: state.general.tab
})

const mapDispatchToProps = dispatch => ({
    _setTab: (tab) => dispatch(actions.setTab(tab)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const _styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    rightCol: {
        alignItems: 'flex-end',
        margin: 2
    },
    leftCol: {
        margin: 2
    }
})
