import {
    Platform,
    StyleSheet,
    PixelRatio
} from 'react-native';
import {
    bg,
    dominant,
    ligth,
    darkBtn
} from '../styles/SystemColor';
import { Bold, Regular } from './SystemFonts';

export const returnBoldTxt = (fontSize, color) => {
    return {
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + fontSize,
        color: color ? color : 'white'
    }
}

export const returnRegularTxt = (fontSize, color) => {
    return {
        fontFamily: Regular,
        fontSize: PixelRatio.getFontScale() + fontSize,
        color: color ? color : 'white'

    }
}

export const avatar = (backgroundColor) => {
    return {
        width: 35,
        height: 35,
        backgroundColor: backgroundColor,
        borderRadius: 50,
        marginHorizontal: 5
    }
}

export const headerWithTitle = (fontSize) => {
    return {
        color: ligth,
        fontStyle: 'normal',
        fontSize: fontSize ? PixelRatio.getFontScale() + fontSize : PixelRatio.getFontScale() + 25,
        textAlign: 'right',
        alignSelf: 'flex-end',
        padding: 5,
        fontFamily: Bold
    }
}

export const returnDarkBtn = (width, height) => {
    return {
        width: width ? width : '90%',
        height: height == 0 ? '0%' : 50,
        backgroundColor: darkBtn,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 15
    }
}

export const returnGrayButton = (width, height) => {
    return {
        width: width ? width : '90%',
        height: height,
        backgroundColor: darkBtn,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 15
    }
}

export default StyleSheet.create({
    background: {
        //todo: global colors file
        backgroundColor: bg,
        flex: 1
    },
    settingItemTxt: {
        textAlign: 'right',
        marginRight: '5%',
        // fontWeight: 'bold',
        lineHeight: 20,
    },
    boldTxt: {
        fontFamily: Bold,
        fontSize: PixelRatio.getFontScale() + 20
    },
    headerText: {

    },
    bgImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center"
    },
    // headerWithTitle: {
    //     color: ligth,
    //     fontStyle: 'normal',
    //     fontSize: 25,
    //     textAlign: 'right',
    //     alignSelf: 'flex-end',
    //     padding: 5,
    //     fontFamily: Bold
    // },
    avatar: {
        width: 35,
        height: 35,
        backgroundColor: dominant,
        borderRadius: 50,
        marginHorizontal: 5
    },
    contentAuth: {
        alignItems: 'center',
    },
    screenAuth: {
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center'
    },

    addBtn: {
        width: 35,
        height: 35,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapHeader: {
        margin: 20
    },
    plus: {
        color: 'white',
        fontSize: PixelRatio.getFontScale() + 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftItem: {
        flex: 1,
    },
    rowDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        // direction: 'rtl'
    },
    rowDirectionForText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
        // direction: 'rtl'
    },
    bottomPlacement: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rightItem: {
        flex: 1,
    },
    headerBottomDivider: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        padding: 20,
        textAlign: 'right',
        color: '#FFFFFF99',
        fontSize: PixelRatio.getFontScale() + 18,
        fontFamily: Regular
    },
    placeCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    /// TEXT STYLE
    link: {
        color: '#3EA2FF',
        textDecorationLine: 'underline'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: PixelRatio.getFontScale() + 28,
        // fontWeight: 'bold',
        marginTop: 15,
        fontFamily: Bold
    },
    noteTxt: {
        color: '#FFFFFF99',
        fontSize: PixelRatio.getFontScale() + 17,
        fontFamily: Regular
    },
    txt: {
        color: '#FFFFFF',
        fontSize: PixelRatio.getFontScale() + 18,
        fontFamily: Regular
    },
    txtContentDialog: {
        fontWeight: 'normal',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: PixelRatio.getFontScale() + 18,
        lineHeight: 20,
        fontFamily: Regular
    }

})