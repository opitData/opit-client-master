import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';
import styles, { headerWithTitle } from '../../styles/Styles';
import Row from '../genericComponents/Row';
import ArrowBack from '../../assets/arrowBack.svg';
import T from '../genericComponents/T';

function Wrap(props) {
    const {
        title,
        navigation
    } = props

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <Row style={_styles.row}>
                        <T
                            style={headerWithTitle()}
                            text={title}
                        />
                        {/* <Text style={headerWithTitle()}>
                            {title}
                        </Text> */}
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <View style={[_styles.arrow]}><ArrowBack /></View>
                        </TouchableOpacity>
                    </Row>
                }
            />
            {props.children}
        </>
    )

}

export default connect(null)(Wrap);

const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65
        },
        row: {
            alignItems: 'center'
        },
        arrow: {
            paddingHorizontal: 5,
            alignSelf: 'center'
        }
    }
)