/* eslint-disable no-undef */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import HomeScreen from './home_screen'
import SpecialBle from 'rn-contact-tracing';

const {height, width} = Dimensions.get('window');
const SERVICE_UUID = '00000000-0000-1000-8000-00805F9B34FB';
const PUBLIC_KEY = 'IOS-1234';
const TAG = 'EXAMPLE';

class App extends Component {

  startScan() {
    // eslint-disable-next-line no-undef
    SpecialBle.setConfig(config)
    SpecialBle.startBLEScan(SERVICE_UUID);
}

  // Stop scanning
  stoptScan() {
    SpecialBle.stopBLEScan();
  }

  // Start advertising with SERVICE_UUID & PUBLIC_KEY
  startAdvertise() {
    SpecialBle.setConfig(config);
    SpecialBle.advertise(SERVICE_UUID, PUBLIC_KEY);
  }

  // Stop advertising
  stopAdvertise() {
    SpecialBle.stopAdvertise();
  }

  // get all devices from DB
  async getAllDevicesFromDB() {
    SpecialBle.getAllDevices((err, devices) => {
      setDevices(devices);
    })
  }

  // clean all devices from DB
  cleanAllDevicesFromDB() {
    SpecialBle.cleanDevicesDB();
    _getAllDevicesFromDB();
  }

  // add list of public_keys
  setPublicKeys() {
    // let publicKeys = ['12345', '12346', '12347', '12348', '12349']
    // SpecialBle.setPublicKeys(publicKeys);
    //        alert(config.scanInterval)
  }

  // get config
  getConfig() {
    SpecialBle.getConfig((config) => {
        setConfig(config);
    })
  }

  // set config
  setConfig() {
    SpecialBle.setConfig(config)
  }

  // clean all scans from DB
  cleanAllScansFromDB() {
    SpecialBle.cleanScansDB();
    _getAllDevicesFromDB();
  }

  // add demo device
  scanDemoDevice() {
    if (Platform.OS === 'ios') SpecialBle.addDemoDevice();
  }

  /////IGATES API For App

  // in IOS - starts the ble scan and peripheral services, sets the uuid and public keys and starts the scanning & advertising tasks
  startBLEService() {
    SpecialBle.setConfig(config);
    SpecialBle.startBLEService();
  }

  // stop background tasks
  stopBLEService() {
    SpecialBle.stopBLEService();
  }

  // clean all devices from DB
  wipe() {
    SpecialBle.deleteDatabase();
  }

  // match
  match(infected_db) {
    SpecialBle.match("", (res) => {
        alert(res);
      });
  }
  // function _match(infected_db) {
  //     return SpecialBle.match("infected_db");

  //     // return [[0,1,12,255,1,1,1,1,1,1,1,1,1,1,1,1], [0,1,12,255,1,1,1,1,1,1,1,1,1,1,1,1]];
  // }

  // fetch
  fetchInfectionDataByConsent() {
    // return SpecialBle.fetchInfectionDataByConsent();
    SpecialBle.fetchInfectionDataByConsent((res) => {
        alert(res);
    });
  }

  // add contacts to DB
  writeContactsToDB() {
    SpecialBle.writeContactsToDB(null);
  }


  componentWillMount(){
  }

  render() {
    return (
      <HomeScreen/>
    );
  }
}

export default App;

