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
      this.ble.write(this.peripheral.id, "80e4196e-e6a2-4c5e-bd8d-090c2660d898",
          "80e40001-e6a2-4c5e-bd8d-090c2660d898", data,
          function(data){
          console.log("Hooray we have data"+JSON.stringify(data));
          alert("Successfully read data from device."+JSON.stringify(data));
      },
          function(){
          alert("Failed to read characteristic from device."); } )
  }

  ReadSignature(){
      this.ble.read(this.peripheral.id,"80e4196e-e6a22-4c5e-bd8d-090c2660d898",
      "80e4fe22-e6a2-4c5e-bd8d-090c2660d898",
          function(data){
          console.log("Hooray we have data"+JSON.stringify(data));
          alert("Successfully read data from device."+JSON.stringify(data));
          },
          function(){
          alert("Failed to read characteristic from device.");
      });

  }


}
