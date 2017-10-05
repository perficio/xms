import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Storage } from '@ionic/Storage';

/**
 * Generated class for the ServerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-server-modal',
  templateUrl: 'server-modal.html',
})
export class ServerModalPage {
  server = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public storage:Storage) {
   
  }
 
  closeModal() {
    this.storage.set('server',this.server);
    this.viewCtrl.dismiss(this.server);
  }
  ionViewDidLoad();
  ionViewDidLoad() {
   this.storage.get('server').then((val) => {
     this.server = val;
    console.log('server name is: '+ val);
   });
    
  }
 
}
