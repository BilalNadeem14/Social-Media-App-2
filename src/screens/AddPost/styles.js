import { StyleSheet, Platform } from "react-native";

import theme from '../../utils/units/theme'
import fonts from '../../assets/fonts'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
    mainContainer: {
    },
    container: {

    },
    header_container: {
        justifyContent: 'space-between',
        paddingVertical: 3 * vh,
        paddingHorizontal: 5 * vw,
        alignItems: 'center'
    },
    headerBackground: {
        paddingBottom: 1 * vh,
        // height: 20 * vh,
        width: 100 * vh,
        color: '#ffffff'

    },
    headerTitleStyles: {
        fontSize: 3 * vh,
        fontWeight: 'bold',
        // textAlign: 'left',
        color: 'white'

    },
    titleContainer: {
        flexDirection: 'row',
        // width: '100%',
        // paddingVertical: 0.5 * vh,
        justifyContent: 'space-between',
        // paddingHorizontal: 1 * vw
    },
 
    btn: {
        width: 27 * vw,
        marginVertical: 2 * vh,
        marginLeft: 3*vw,
        // borderWidth: 0.3 * vh,
        backgroundColor: theme.colors.primaryColor
    },
    header_styles: {
        height: 10 * vh,
        width: 100 * vw,
        overflow: 'hidden',
        // borderBottomEndRadius: 6 * vh,
        // borderBottomStartRadius: 6 * vh,
        backgroundColor: '#442445'
    },
    scrollContent: {
        width: 100 * vw,
        alignItems: "center",
        paddingTop: 4 * vh,
        paddingHorizontal: 4 * vw,
    },
    expandedRow: {
        width: 92 * vw,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputWidth: {
        width: 43 * vw,
    },
    inputFieldStyle: {
        fontFamily: fonts.Fonts.JR
    },
    messageField: {
        height: 20 * vh
    },
    inputMessageFieldStyle: {
        fontFamily: fonts.Fonts.JR,
        height: 20 * vh,
        paddingTop: 1 * vh
    },
    btnLabel: {
        color: theme.colors.white
    },
    btn: {
        width: 90 * vw,
        marginVertical: 2 * vh,
        borderWidth: 0.3 * vh,
        borderColor: theme.colors.primaryColor
    },
    accountText: {
        fontSize: 1.8 * vh,
        color: theme.colors.blue
    },
    loginText: {
        fontSize: 1.8 * vh,
        color: theme.colors.primaryColor,
        textDecorationLine: "underline"
    },
    forgotRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 92 * vw,
        alignItems: "center"
    },
    forgotText: {
        fontSize: 1.8 * vh,
        color: theme.colors.purple3,
        textDecorationLine: "underline"
    },
    textRow: {
        width: 86 * vw,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 6 * vh,


    },


})