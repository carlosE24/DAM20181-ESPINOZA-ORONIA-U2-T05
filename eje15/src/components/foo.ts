import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../pages/services/user';

@Component({
    selector: 'primer-componente',
    templateUrl: 'foo.html'
})

export class MiComponente {


    public data:any = {
        valor: false
    }


    constructor(public navParams:NavParams,
        public navCtrl: NavController, 
        public userSrv: UserService) {
        if(this.userSrv.sexo)


        this.data.valor = true;
        else{
        this.data.valor = false;}

     
    }



}