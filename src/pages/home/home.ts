import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import 'rxjs/add/operator/map';
import { ServerModalPage } from '../server-modal/server-modal';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData : {};
  options :BarcodeScannerOptions;
  format ='';
  result = '';
  urls = '';
  server = '';
  constructor(public navCtrl: NavController,private barcodeScanner:BarcodeScanner,public http:Http,public modalCtrl:ModalController,public storage:Storage) {
   
  }
  ionViewDidLoad();
  ionViewDidLoad() {
   this.storage.get('server').then((val) => {
     this.server = val;
    console.log('server url: '+ val);
   });
}
  resetScan(){
    this.format = '';
    this.result = '';
    this.urls = '';
  }
  scanPackage(){
    this.options = {
        prompt : "Scan your barcode "
    }

    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData;
        //this.format = barcodeData.format;
        //this.result = barcodeData.text;
        let url = 'http://'+ this.server +'/xms/Deliveries/GetPackage?TrackingNumber=' + barcodeData.text;
        this.urls = url 
        window.open(url, '_system');
        //cordova.InAppBrowser.open(url, "_system", "location=true");
        /*
        this.http.get(url).map(res => res.json()).subscribe(data => {
           this.result = data;
           this .format = 'app resonded.';
        });
        */   
    }, (err) => {
        console.log("Error occured : " + err);
    });         
}
editServername(){
        console.log('click');
        let serverModal = this.modalCtrl.create(ServerModalPage);
        serverModal.onDidDismiss(data => {
            this.server = data;
          });
          serverModal.present();
       
    } 
  
  

}
