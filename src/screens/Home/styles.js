import {StyleSheet} from 'react-native';
import theme from '../../utils/units/theme';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContianer: {
    flex: 1,
    // height: 100 * vh,
    // width: 100 * vw
    // backgroundColor: 'red'
  },
  newPostContainer: {
    flexDirection: 'row',
    marginVertical: 1 * vh,
    paddingHorizontal: 6 * vw,
    justifyContent: 'space-between',
  },

  header_styles: {
    height: 10 * vh,
    width: 100 * vw,
    overflow: 'hidden',
    // borderBottomEndRadius: 6 * vh,
    // borderBottomStartRadius: 6 * vh,
    backgroundColor: '#442445',
  },
  back: {
    height: '100%',
    width: '100%',
  },
  searchBarContainer: {
    width: 60 * vw,
    height: 5 * vh,
    justifyContent: 'center',
    paddingLeft: 5 * vw,
    borderWidth: 0.1 * vh,
    borderColor: 'lightgray',
    borderRadius: 2 * vh,
    backgroundColor: '#ffffff',
    // alignItems:'center'
  },
  header_container: {
    justifyContent: 'space-between',
    paddingVertical: 3 * vh,
    paddingHorizontal: 5 * vw,
    alignItems: 'center',
  },
  headerBackground: {
    paddingBottom: 1 * vh,
    // height: 20 * vh,
    width: 100 * vh,
    color: '#ffffff',
  },
  headerTitleStyles: {
    fontSize: 3 * vh,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    // width: '100%',
    // paddingVertical: 1.5 * vh,
    justifyContent: 'space-between',
    // paddingHorizontal: 1 * vw
  },

  btn: {
    width: 90 * vw,
    marginVertical: 2 * vh,
    marginHorizontal: 5 * vw,
    // borderWidth: 0.3 * vh,
    backgroundColor: theme.colors.primaryColor,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    borderWidth: 2,
    marginBottom: 5 * vh,
  },
  headerBottomContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 3 * vw,
    width: 30 * vw,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerBottomEndContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 3 * vw,
    // width: 30 * vw,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerButtonStyles: {
    height: 5 * vh,
    width: 5 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray', //'pink',
    borderRadius: (5 * vh) / 2,
  },
  iconImageStyles: {
    height: 3 * vh,
    width: 3 * vh,
    tintColor: '#696969',
  },
  avatarContainer: {
    padding: 0.3 * vh,
    height: 11.5 * vh,
    width: 11.5 * vh,
    borderRadius: (11.5 * vh) / 2,
    borderColor: theme.colors.green, //'yellow',
    borderWidth: 0.4 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatarWrapperContainer: {
    padding: 0.3 * vh,
    height: 12.5 * vh,
    width: 12.5 * vh,
    borderRadius: (12.5 * vh) / 2,
    borderColor: 'white',
    borderWidth: 0.4 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 5 * vw,
    bottom: -16 * vh,
    backgroundColor: 'white',
  },

  avatarImage: {
    height: 10 * vh,
    width: 10 * vh,
    borderRadius: (10 * vh) / 2,
  },
  listStyles: {
    // paddingVertical: 1 * vh,
    // paddingHorizontal: 3 * vw,
    paddingBottom: 3 * vh,
  },
  // ListHeader: {
  //     paddingVertical: 0 * vh,
  //     paddingHorizontal: 0 * vw
  // },
  listSeperator: {
    marginVertical: 1 * vh,
    // marginTop: 18 * vh,
    height: 0.2 * vh,
    width: 90 * vw,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
  },
  postImage: {
    height: 20 * vh,
    width: 90 * vw,
    borderRadius: 2 * vh,
  },
  listItemStyles: {
    paddingVertical: 1 * vh,
    justifyContent: 'space-between',
    height: 15 * vh,
    width: 100 * vw,
    paddingHorizontal: 3 * vw,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2 * vh,
    // flexDirection:'row'
  },
  listItemTitleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5 * vw,
    // height: 40*vh
  },
  flatlistContainer: {
    height: 70 * vh,
  },
});
