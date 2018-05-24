import { Profile } from './../../models/profile';
import { Campaign } from './../../models/campaign';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController, ActionSheetController, Loading } from 'ionic-angular';
import { Http , Headers } from '@angular/http';
import { File } from '@ionic-native/file';
//import { Transfer, TransferObject, FileUploadOptions, FileTransferError } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera , CameraOptions } from '@ionic-native/camera';
//import { FileTransfer} from '@ionic-native/file-transfer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import 'rxjs/add/operator/map';

declare var cordova: any;


@IonicPage()


@Component({
  selector: 'page-campaign-build',
  templateUrl: 'campaign-build.html',
})
export class CampaignBuildPage {

  lastImage: string = null;
  loading: Loading;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private camera: Camera,
      private transfer: FileTransfer,
       private file: File,
        private filePath: FilePath,
         public actionSheetCtrl: ActionSheetController,
          public toastCtrl: ToastController,
           public platform: Platform,
            public loadingCtrl: LoadingController,
            public cameraPlugin: Camera,
          public actionsheetctrl : ActionSheetController,
          public http:Http,
         )
   { }

feed = {} as Campaign ;

user = {} as Profile;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaignBuildPage');
     this.feed.user_id = window.localStorage.getItem('userId');
  
  }


base64Image :  any ;



  // addfeed() {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {

  //     console.log(this.feed);
  //     console.log(this.feed.user_id);
  //     // const imgBlob = new Blob([reader.result], { type: this.base64Image.type });
  //     let headers = new Headers();
  //     headers.append('content-type', 'multipart/form-data');
  //     headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //     var form = new FormData();
  // form.append("campaign_name", "Offer");
  // //form.append("file", imgBlob,this.base64Image.name);
  // form.append("campaignValidityDate", "15-jan-2017");
  // form.append("campaignbalance", "5000"); 
  // form.append("campaignlocation", "North");
  // form.append("city_id", "1");
  // form.append("category_id", "1");
  // form.append("user_id", "42");
  
  
  //     this.http.post('https://gravynodeapi.azurewebsites.net/launchcampaign', form , {headers: headers})
  //     .subscribe(res => {
  //       (res);
  //     }, (err) => {
  //       (err);
  //     });
  //   }
  //   reader.readAsArrayBuffer(this.base64Image);
  // }


  openeditprofile() {
    let actionSheet = this.actionsheetctrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.takephoto();
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.openGallery();
          }
        },
  ]
});
actionSheet.present();
}

takephoto() {
        const options: CameraOptions = {
          quality: 70,
           destinationType: this.camera.DestinationType.DATA_URL,
           encodingType: this.camera.EncodingType.JPEG,
          //sourceType: this.camera.PictureSourceType.CAMERA
          mediaType: this.camera.MediaType.PICTURE
        }
   
        this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          this.base64Image  = 'data:image/jpeg;base64,' + imageData;
          console.log(this.base64Image); 
        }, (err) => {
          // Handle error
        })
      }
   
       openGallery() {
   
  
       const options: CameraOptions = {
         quality: 70,
         destinationType: this.camera.DestinationType.DATA_URL,
         //encodingType: this.camera.EncodingType.JPEG,
         //mediaType: this.camera.MediaType.PICTURE,
         sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
         saveToPhotoAlbum : false  
       }
   
       this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
         this.base64Image  = 'data:image/jpeg;base64,' + imageData;
         console.log(this.base64Image);
       }, (err) => {
         // Handle error
       })
      
      }

      
       addfeed() {
         let loader = this.loadingCtrl.create({
           content : "Uploading..."
         });
         loader.present();
         const fileTransfer :  FileTransferObject = this.transfer.create();

         var random = Math.floor(Math.random() * 100 );

         let options : FileUploadOptions = {
           fileKey : "photo",
           fileName : "MyImage_" + random + ".jpg",
           chunkedMode : false ,
           httpMethod : 'post' ,
           mimeType : "image/jpeg",
           headers : {}
         }


fileTransfer.upload(this.base64Image, 'https://gravynodeapi.azurewebsites.net/launchcampaign' , options )
.then((data)=> {
  alert("success");
  loader.dismiss();
},
(err)=>{
  console.log(err);
  alert("Failed");
  loader.dismiss();
});

       }



}
