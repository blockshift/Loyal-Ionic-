import { BarcodeScanner , BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-qrscanner',
  templateUrl: 'qrscanner.html',
})
export class QrscannerPage {

  scanData : {};
  options :BarcodeScannerOptions;
  encodeData : string ;
  encodedData : {} ;
  constructor(public navCtrl: NavController , public navParams: NavParams , private scanner : BarcodeScanner  ) {
  }

  ionViewDidLoad() {
     console.log('ionViewDidLoad QrscannerPage');

   }

  // async scanCode() {
  //   const results =   await this.barcode.scan();
  //   console.log(results);
  // }


  scan() {
    this.options = {
      prompt : "Scan your barcode "
  }
  this.scanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
  }, (err) => {
      console.log("Error occured : " + err);
  }); 
  }


  encodeText(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.encodeData).then((encodedData) => {

        console.log(encodedData);
        this.encodedData = encodedData;

    }, (err) => {
        console.log("Error occured : " + err);
    });                 
}

}
