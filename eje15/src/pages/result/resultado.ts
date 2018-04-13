import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../pages/services/user';


@Component({
    selector: 'resultado',
    templateUrl: 'resultado.html'
})


export class ResultadoPage {

    public valuie: any;
    public sexo: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams, public userSrv: UserService) {
        this.valuie = this.navParams.get('dato');
        this.sexo = this.valuie.curp[10];
        if(this.sexo=='M' || this.sexo=='m')
        this.userSrv.sexo = true;
        else
        this.userSrv.sexo = false;
    }

}
