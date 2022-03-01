import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import { icons, sampleImages } from '../../assets/images';
import { connect } from 'react-redux';
import MainInput from '../../components/MainInput';
import Alert from '../../popups/AlertPopup';
import Button from '../../components/Button';
import JostRegular from '../../components/JostRegular';
import TouchableHOC from '../../components/TouchableHOC';
import { StackActions } from '@react-navigation/native';
import { actions } from '../../redux/actions';
import { msg, regex, toast } from '../../utils';
import DeviceInfo from 'react-native-device-info';

// or ES6+ destructured imports

import { getUniqueId, getManufacturer } from 'react-native-device-info';
import vw from '../../utils/units/vw';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      email: '',
      password: '',
      deviceId: null
    };
  }

  componentDidMount() {
    if (Platform.OS == 'android')
      DeviceInfo.getAndroidId().then((androidId) => {
        // androidId here  
        console.log('android deviceId: ', androidId);
        this.setState({
          deviceId: androidId
        })
      });
  }

  onChangeText = (value, type) => {
    // console.log('baby')
    this.setState({ ...this.state, [type]: value });
    // state[type]
  };

  login = async (id) => {


    if
      (!this.state.email) {
      toast("Enter a valid title for post");
    }
    else if (this.state.password == '') {
      toast("Enter a valid description for post")
    }
    else {
      const data = {
        title: this.state.email,
        body: this.state.password,
      };
      try {
        const auth = await this.props.add_post(data);
        setTimeout(() => this.setState({
          email: '',
          password: ''
        }), 1000)
      } catch (e) {
        console.log('addPostScrren error: ', e);
        toast(e)
      }
    }

  };
  renderHeaderContent = () => <View style={styles.header_container}>

    <View style={styles.titleContainer}>
      <Text style={styles.headerTitleStyles}>
        Add Post
      </Text>

      {this.state.searchBoxVisible && <View style={styles.searchBarContainer}>
        <TextInput placeholder="Add Post" style={{ color: 'black', textAlign: 'left', justifyContent: 'center' }} />
      </View>}



    </View>


  </View>


  renderListHeader = () =>
    <View style={styles.headerBackground}>
      <View style={styles.header_styles}>
        <View resizeMode='cover' style={styles.back} >
          {this.renderHeaderContent()}
        </View>
      </View>
    </View>
  render() {
    return (
      <View style={styles.mainContainer}>
        <Alert
          ref={(e) => (this.confirmPopup = e)}
          icon={icons.confirmCheck}
          titleText={'Confirmation'}
          description={'Message Has been sent successfully!'}
          onCross={() => { }}
        />

        {this.renderListHeader()}


        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}>
          <MainInput
            label="Title"
            placeholder="Enter Post Title"
            style={styles.input}
            fieldStyle={styles.inputFieldStyle}
            value={this.state.email}
            type="email"
            onChangeText={this.onChangeText}
            keyboardType='email-address'
          />

          <MainInput
            label="Description"
            placeholder="Enter Description"
            style={styles.input}
            bigBox
            fieldStyle={styles.inputFieldStyle}
            // secureTextEntry
            value={this.state.password}
            type="password"
            onChangeText={this.onChangeText}
          />
          <View style={styles.forgotRow}>
            <TouchableHOC
              onPress={() =>
                this.props.navigation.navigate('PasswordRecovery')
              }>
              {/* <JostRegular style={styles.forgotText}>
                Forgot Password?
              </JostRegular> */}
            </TouchableHOC>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 90 * vw }}>
            <Button
              title="ADD POST"
              style={styles.btn}
              labelStyle={styles.btnLabel}
              onPress={() => {
                this.login();

                // this.props.navigation.navigate("HomeTabNavigator")
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStates = (state) => {
  // console.log('state login', state)
  return state;
};
const mapProps = (dispatch) => {
  return {
    add_post: (data) => dispatch(actions.addPost(data)),
  };
};

export default connect(mapStates, mapProps)(AddPost);
