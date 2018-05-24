import { SendTransactionPage } from './../send-transaction/send-transaction';
import { TransactionHistoryPage } from './../transaction-history/transaction-history';
import { HelloIonicPage } from './../hello-ionic/hello-ionic';
import { Qrcode } from './../../models/qrcode';
import { Profile } from './../../models/profile';
import { BarcodeScanner , BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-qrscanner',
  templateUrl: 'qrscanner.html',
})
export class QrscannerPage {

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string ;

    alert(message : string) {
        this.alrtctrl.create({
      
          title: 'Info',
          subTitle: message,
          buttons: ['OK']
        }).present();
      
      } 



    

  scanData : {};
  options :BarcodeScannerOptions;
 encodemyData : number ;
  encodedData : {} ;
   createdCode  : null ; 
  
   user = {} as Profile ;

  //  data = {} as Qrcode ;
  constructor(public navCtrl: NavController , public navParams: NavParams , private scanner : BarcodeScanner , private alrtctrl :  AlertController  ) {
    if((window.localStorage.getItem('email') != "undefined" || window.localStorage.getItem('email') != null  )&&(window.localStorage.getItem('name') != "undefined" || window.localStorage.getItem('name') != null  )) 
    {



      
console.log("hello");
 this.user.emailaddress = window.localStorage.getItem('email')
this.user.name = window.localStorage.getItem('name')
 this.user.token = window.localStorage.getItem('userId')
console.log("email",this.user.emailaddress);
 console.log("name",this.user.token);
 this.value = this.user.token;
       }
      else {
        console.log("data doesnot exist");
      }  


}

  ionViewDidLoad() {
     console.log('ionViewDidLoad QrscannerPage');
    // this.sendToken();

   }

 username : any ;
  token :  any ;

  scan() {
    this.options = {
      prompt : "Scan your Code "
  }
  this.scanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
      console.log("scandata : ",this.scanData);
      this.token = this.scanData;
      console.log("token text :" ,this.token.text);


       var data = this.token.text ;
      // console.log(data.token);
       console.log(data);
      // this.username = data.token;

      //  console.log(this.username);
     // this.alert('Succesfully you gain ' + data.token + ' points from' + data.name  );
      this.navCtrl.setRoot(SendTransactionPage,{
        token : data ,
      } );

  }, (err) => {
      console.log("Error occured : " + err);
  }); 
  }

details = {} as Qrcode ;



  encodeText(){
this.details.token= this.user.token;
// this.details.token = this.encodemyData;
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.details).then((res) => {

        console.log(res);
        this.encodedData = res;
        console.log(this.encodedData);

    }, (err) => {
        console.log("Error occured : " + err);
    });                 
}

//this.createdCode = this.qrData;
  
// sendToken() {
// console.log("send token mey",this.username);
// }


}
