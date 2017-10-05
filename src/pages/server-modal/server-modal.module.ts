import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServerModalPage } from './server-modal';

@NgModule({
  declarations: [
    ServerModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ServerModalPage),
  ],
})
export class ServerModalPageModule {}
