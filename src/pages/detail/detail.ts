import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController} from 'ionic-angular';

import { BLE } from '@ionic-native/ble';



/**
 * Bluetooth UUIDs
 **/

const HANDSHAKE_SERVICE = '80E4196E-E6A2-4C5E-BD8D-090C2660D898';
const SIGNATURE_CHARACTERISTIC = '80E4001-E6A2-4C5E-BD8D-090C2660D898';
const PUBLIC_KEY_CHARACTERISTIC= '80E4FE22-E6A2-4C5E-BD8D-090C2660D898';


/**
 * Message sent into the device
 */

var message = new Uint8Array(1);
message[0] = 42;



@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {

    peripheral: any = {};
    signature: ArrayBuffer;
    pubkey: ArrayBuffer;
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

    /**
     * Disconnect peripheral when leaving the page
     **/
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


    /**
     * The BLE plugin uses typed Arrays or ArrayBuffers for sending and receiving data
     **/

    // stringToBytes(string) {
    //     let array = new Uint32Array(string.length);
    //     for (var i = 0, l = string.length; i < l; i++);{
    //         array[i] = string.charCodeAt(i);
    //     }
    //     return array.buffer;
    // }
    //
    // bytesToString(buffer) {
    //     return String.fromCharCode.apply(null, new Uint8Array(buffer));
    // }



    toHexString(byteArray) {
        return Array.prototype.map.call(byteArray,b =>
            ('00' + b.toString(16)).slice(-2).toString()
        ).join('');
    }



    writeMessage() {
        this.ble.write(this.peripheral.id, HANDSHAKE_SERVICE,
            SIGNATURE_CHARACTERISTIC, message.buffer);
    }

    readPubKey() {
        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, PUBLIC_KEY_CHARACTERISTIC).then(
            data => this.showAlert('Success !', 'Characterisctic = ' + this.toHexString(new Uint8Array(data))),
            () => this.showAlert('Unexpected Error', 'Failed to read signature')
        )
    }

    readSignature() {
        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, SIGNATURE_CHARACTERISTIC).then(
            data => this.showAlert('Success !', 'Characterisctic = ' + this.toHexString(new Uint8Array(data))),
            () => this.showAlert('Unexpected Error', 'Failed to read signature')
        )
    }
/**
 *  nacl :
 *  verify(msg: Uint8Array, sig: Uint8Array, publicKey: Uint8Array): boolean;
 **/

    verifySignature() {
        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, PUBLIC_KEY_CHARACTERISTIC).then(
            data => this.pubkey = data,
            () => this.showAlert('Unexpected Error', 'Failed to read signature')
        );

        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, SIGNATURE_CHARACTERISTIC).then(
            data => this.signature = data,
            () => this.showAlert('Unexpected Error', 'Failed to read signature')
        );

        if (nacl.sign.detached.verify(message, new Uint8Array(this.signature), new Uint8Array(this.pubkey))) {
             console.log('Signature valid');
             this.showAlert('Success!', 'The signature is valid !');

        } else {
            console.log('Signature NOT valid');
            this.showAlert('Error', 'Signature NOT Valid');
        }
    }

}

