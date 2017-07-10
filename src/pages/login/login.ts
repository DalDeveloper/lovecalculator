import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((res)=>{
      console.log("Login success" + JSON.stringify(res));
      let currentUser = {
        email: res.email,
        picture: res.photoURL,
        displayName: res.user.displayName
      };

      window.localStorage.setItem('currentUser',JSON.stringify(currentUser));
      this.navCtrl.pop();
    });
  }

  fbLogin(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res)=>{
      console.log("Login success Google Plus" + JSON.stringify(res));
      let currentUser = {
        email: res.email,
        picture: res.photoURL,
        displayName: res.user.displayName
      };

      window.localStorage.setItem('currentUser',JSON.stringify(currentUser));
      this.navCtrl.pop();
    });
  }
  gpLogin(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res)=>{
      console.log("Login success Google Plus" + JSON.stringify(res));
      let currentUser = {
        email: res.user.email,
        picture: res.user.photoURL,
        displayName: res.user.displayName
      };

      window.localStorage.setItem('currentUser',JSON.stringify(currentUser));
      this.navCtrl.pop();
    });
  }
  
}
