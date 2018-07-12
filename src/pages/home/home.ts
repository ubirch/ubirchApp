import { BLE } from '@ionic-native/ble';
import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';



var byteArray = new Uint8Array([0x2f,0x3d, 0xff, 0x00]);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  devices: any[] = [];
  statusMessage: string;

  constructor(public navCtrl: NavController, 
              private toastCtrl: ToastController,
              private ble: BLE,
              private ngZone: NgZone) { 
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];  // clear list

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device), 
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
  scanError(error) {
    this.setStatus('Error ' + error);
    let toast = this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  deviceSelected(device) {
    console.log(JSON.stringify(device) + ' selected');
    this.navCtrl.push(DetailPage, {
      device: device
    });
  }

  convert() {

      var hexString = this.toHexString(byteArray);
      var byteArray2 = this.toByteArray(hexString);
      console.log(hexString)

  }

  // toHexString(byteArray) {
  //       return Array.prototype.map.call(byteArray, function(byte) {
  //           return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  //       }).join('');
  // }
    //
    //
    toHexString(byteArray) {
        return Array.prototype.map.call(byteArray,b =>
            ('00' + b.toString(16)).slice(-2).toString()
        ).join('');
    }


    toByteArray(hexString) {
        var result = [];
        while (hexString.length >= 2) {
            result.push(parseInt(hexString.substring(0, 2), 16));
            hexString = hexString.substring(2, hexString.length);
            }
        return result;
  }



}
