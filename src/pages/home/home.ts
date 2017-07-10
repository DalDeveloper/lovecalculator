import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name1: string;
  name2: string;

  get score(){
    let letter = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for(let i = 0; i<letter.length; i++){
      sum = sum + letter.charCodeAt(i);
    }
    return sum % 101;
  }
  constructor(public navCtrl: NavController) {
    
    this.name1 = this.name2 =  "";
    if(!this.isLoggedIn()){
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
    }
  }

  isLoggedIn(){
    if(window.localStorage.getItem('currentUser')){
      return true;
    }
  }
}
