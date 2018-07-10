import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import {ed25519} from 'ed25519';

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
     var array = new Uint8Array(string.length);
     for (var i = 0, l = string.length; i < l; i++);{
         array[i] = string.charCodeAt(i);
     }
     return array.buffer;
  }

  bytesToString(buffer) {
      return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }

  WriteRandomValue() {
      var data = this.stringToBytes("150150150")
      this.ble.write(this.peripheral.id, "ed95d93b0-251d-470a-a062-fa1922dfa9a8",
          "e95d93b1-251d-470a-a062-fa1922dfa9a8", data);
  }

  ReadSignature(){
      var buffer = this.ble.read(this.peripheral.id,"ed95d93b0-251d-470a-a062-fa1922dfa9a8",
      "e95d93b1-251d-470a-a062-fa1922dfa9a8");
      console.log(this.bytesToString(buffer))
  }


}
