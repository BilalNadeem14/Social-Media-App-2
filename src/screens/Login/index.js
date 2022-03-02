import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import images, {icons} from '../../assets/images';
import {connect} from 'react-redux';
import MainInput from '../../components/MainInput';
import Alert from '../../popups/AlertPopup';
import Button from '../../components/Button';
import {actions} from '../../redux/actions';
import {msg, regex, toast} from '../../utils';
import formdata from '../../../form-data.json';

// or ES6+ destructured imports

import {getUniqueId, getManufacturer} from 'react-native-device-info';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';
import theme from '../../utils/units/theme';
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      email: '',
      name: '',
      dob: '',
      gender: 'Male',
      date: new Date(),
      open: false
    };
  }

  onChangeText = (value, type) => {
    this.setState({...this.state, [type]: value});
  };
  
  login = async id => {
    if(this.state.name == ''){
      toast('Please enter your name')
      return
    }
    else if(this.state.email == ''){
      toast('Please enter your email')
      return
    }
    else if(!regex.email.test(this.state.email)){
      toast('Please enter a valid email')
      return
    }
    else if(this.state.dob == ''){
      toast('Please select yout date of birth')
      return
    }
    const data = {
      name: this.state.name,
      email: this.state.email,
      dob: this.state.dob,
      gender: this.state.gender
    }
    console.log('data: ', data);
    try{
      this.props.login(data)
      toast('User logged in successfully')
    }
    catch(e){
      toast('login unsuccessful')
    }
  };
  
  identifyInputsToRender = (item, index) => {
    switch (item?.type) {
      case 'image':
        return this.renderImage();
        case 'text':
          return this.renderFormItem(item, index);
        case 'date':
          return this.renderDateFormItem(item, index);
      case 'radio':
        return (
          <View>
            <Text style={{fontSize: 1.7*vh, marginLeft: 2*vw}}>GENDER</Text>
            <View
              style={{
                flexDirection: 'row',
                // marginTop: 1*vh,  
                // width: 50 * vw,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {React.Children.toArray(item?.options.map(this.renderRadioItem))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  renderImage = () => {
    return <View style={styles.imageContainer}>
      <Image 
      style={styles.profileImage}
      source={icons.placeholder}
      // resizeMode='contain'
      />
    </View>
  }

  renderFormItem = (item, index) => (
    <MainInput
      label={item.label}
      placeholder={item.placeholder}
      style={styles.input}
      fieldStyle={styles.inputFieldStyle}
      value={this.state[item?.key]}
      type={item?.key}
      onChangeText={this.onChangeText}
      keyboardType="email-address"
    />
  );

  renderDateFormItem = (item, index) => (
    <TouchableOpacity
    onPress={() => this.setState({
      open: true
    })}
    >
      <MainInput
      editable={false}
      label={item.label}
      placeholder={item.placeholder}
      style={styles.input}
      fieldStyle={styles.inputFieldStyle}
      value={this.state.dob}
      type={item?.key}
      onChangeText={this.onChangeText}
      keyboardType="email-address"
    />
    </TouchableOpacity>
  );

  renderRadioItem = (item, index) => (
    <View
      style={{
        flexDirection: 'row',
        // width: 30*vw,
        marginHorizontal: 7 * vw,
        marginVertical: 1*vh, 
        // flex: 1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red'
      }}>
      <TouchableOpacity
        onPress={() => this.onChangeText(item?.label, 'gender')}
        style={{
          borderRadius: (2.25 / 2) * vh,
          height: 2.25 * vh,
          justifyContent: 'center',
          alignItems: 'center',
          width: 2.25 * vh,
          backgroundColor: 'white',
          borderWidth: 0.2 * vh,
          borderColor: theme.colors.primaryColor,
        }}>
        {this.state.gender == item?.label && (
          <View
            style={{
              height: 1.25 * vh,
              width: 1.25 * vh,
              borderRadius: (1.25 / 2) * vh,
              backgroundColor: theme.colors.primaryColor,
            }}
          />
        )}
      </TouchableOpacity>
      <Text style={{marginLeft: 1.5 * vw}}>{item?.label}</Text>
    </View>
  );

  renderFields = () =>
    React.Children.toArray(formdata.map(this.identifyInputsToRender));

  render() {
    return (
      <View style={styles.mainContainer}>
        <Alert
          ref={e => (this.confirmPopup = e)}
          icon={icons.confirmCheck}
          titleText={'Confirmation'}
          description={'Message Has been sent successfully!'}
          onCross={() => {}}
        />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}>
          <ScrollView style={{width: 90 * vw}}>
            {this.renderFields()}
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: 90 * vw,
            }}>
            <Button
              title="Submit"
              style={styles.btn}
              onPress={() => {
                this.login();
                // this.props.navigation.navigate("HomeTabNavigator")
              }}
            />
          </View>
        </ScrollView>
        <DatePicker
          mode='date'
          modal
          open={this.state.open}
          date={this.state.date}
          onConfirm={(date) => {
            // setOpen(false)
            // setDate(date)
            this.setState({
              open: false,
              date: date,
              dob: moment(date).format('DD/MM/YYYY'),
            })
            // setState({...state, dateOfVisit: moment(date).format('YYYY-MM-DD'), dateOfVisitChanged: true})
          }}
          onCancel={() => {
            this.setState({
              open: false,
            })
          }}
        />
      </View>
    );
  }
}

const mapStates = state => {
  // console.log('state login', state)
  return state;
};
const mapProps = dispatch => {
  return {
    login: data => dispatch(actions.login(data)),
  };
};

export default connect(mapStates, mapProps)(Login);
