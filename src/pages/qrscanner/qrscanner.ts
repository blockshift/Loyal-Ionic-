import { BarcodeScanner , BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrscanner',
  templateUrl: 'qrscanner.html',
})
export class QrscannerPage {

  options : BarcodeScannerOptions ; 

  constructor(public navCtrl: NavController, private barcode : BarcodeScanner , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrscannerPage');

  }

  async scanCode() {
    const results =   await this.barcode.scan();
    console.log(results);
  }

}
