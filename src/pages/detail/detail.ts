import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import {ed25519} from 'ed25519';
// Bluetooth UUID

const GENERIC_ACCESS_SERVICE = '1800';
const DEVICE_NAME_CHARACTERISTIC = '2A00';

const HANDSHAKE_SERVICE = '80e4196e-e6a22-4c5e-bd8d-090c2660d898';
const SIGNATURE_CHARACTERISTIC = '80e4001-e6a2-4c5e-bd8d-090c2660d898';
const PUBLIC_KEY_CHARACTERISTIC= '80e4fe22-e6a2-4c5e-bd8d-090c2660d898';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  peripheral: any = {};
  statusMessage: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private ble: BLE,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private ngZone: NgZone) {

    let device = navParams.get('device');

    this.setStatus('Connecting to ' + device.name || device.id);

    this.ble.connect(device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );

  }

  onConnected(peripheral) {
    this.ngZone.run(() => {
      this.setStatus('');
      this.peripheral = peripheral;
    });
  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  showAlert(title, message) {
      let alert = this.alertCtrl.create({
          title: title,
          subTitle: message,
          buttons: ['OK']
      });
      alert.present();
  }

  // Disconnect peripheral when leaving the page
  ionViewWillLeave() {
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.peripheral.id).then(
      () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
      () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
    )
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }



  // The BLE plugin uses typed Arrays or ArrayBuffers for sending and receiving data


  stringToBytes(string) {
     var array = new Uint32Array(string.length);
     for (var i = 0, l = string.length; i < l; i++);{
         array[i] = string.charCodeAt(i);
     }
     return array.buffer;
  }

  bytesToString(buffer) {
      return String.fromCharCode.apply(null, new Uint32Array(buffer));
  }


  toArray( buffer ) {
      var len = buffer.length;
      var ret = [];
      for (var i = len-1; i >= 0; i--) {
          ret.push(buffer[i]);
       }
       return ret;
  };


  WriteRandomValue() {
      var data = new Uint32Array(1);
      data[0] = 10;
      this.ble.write(this.peripheral.id, HANDSHAKE_SERVICE,
          SIGNATURE_CHARACTERISTIC, data.buffer)
  }



   ReadSignature() {
      this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, PUBLIC_KEY_CHARACTERISTIC).then(
            data => this.showAlert('Success !', 'Characterisctic = '+ this.toArray(data)),
            () => this.showAlert('Unexpected Error', 'Failed to read signature')
      )
   }



}

