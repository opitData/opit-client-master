import React, { useState } from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import Col from './Col';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';
import Arrow1 from '../../assets/svg/Arrow1.svg';
import Arrow2 from '../../assets/svg/Arrow2.svg';
import styles, { returnBoldTxt, returnRegularTxt } from '../../styles/Styles';
import { dark } from '../../styles/SystemColor';
import AnimatedView from './AnimatedView';
import T from './T';

function DropDownArr(props) {
    const {
        arr,
        title,
    } = props;
    const [showData, setShowData] = useState(false);

    return (
        <>
            <View style={[_styles().wrap, styles.placeCenter]}>
                <Row style={[styles.placeCenter, _styles().item]}>
                    <Col cols={2} style={styles.placeCenter}>
                        {/* <Text style={returnBoldTxt(16, '#3EA2FF')}>{title}</Text> */}
                        <T
                            style={returnBoldTxt(16, '#3EA2FF')}
                            text={title}
                        />
                    </Col>
                    <Col cols={1} style={[styles.placeCenter]}>
                        {/* <Text style={returnRegularTxt(17)}> 19 </Text> */}
                        <T
                            style={returnRegularTxt(17)}
                            text={' ' + 19 + ' '}
                        />
                    </Col>
                    <Col cols={1} style={[styles.placeCenter]}>
                        <TouchableOpacity
                            onPress={() => {
                                setShowData(!showData)
                            }}
                        >
                            {showData ? <Arrow2
                                fill='#3EA2FF'
                            /> : <Arrow1
                                fill='#3EA2FF'
                            />}
                        </TouchableOpacity>
                    </Col>
                </Row>
                {showData &&
                    <AnimatedView style={{ width: '100%' }}>
                        <FlatList
                            style={{ width: '100%', maxHeight: 120 }}
                            data={arr}
                            renderItem={({ item, index }) =>
                                index != 0 &&
                                <Row style={[styles.placeCenter, _styles().item]}>
                                    <Col cols={2} style={styles.placeCenter}></Col>
                                    <Col cols={1} style={[styles.placeCenter]}>
                                        <TouchableOpacity>
                                            {/* <Text style={returnRegularTxt(17)}>{item}</Text> */}
                                            <T
                                                style={returnRegularTxt(17)}
                                                text={item}
                                            />
                                        </TouchableOpacity>
                                    </Col>
                                    <Col cols={1} style={[styles.placeCenter]}></Col>
                                </Row>
                            }
                        />
                    </AnimatedView>
                }
            </View>
        </>
    )
}

export default connect(null)(DropDownArr);

const _styles = () => StyleSheet.create({
    wrap: {
        backgroundColor: dark,
        width: 180,
        minHeight: 40,
        borderRadius: 5
    },
    item: {
        height: 30
    }
})