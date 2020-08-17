import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  signInWithGoogle() {
    this.as.loginWithGoogle()
    .then((res) => { 
      console.log(res);
        this.router.navigate(['home'])
      })
    .catch((err) => console.log(err));
  }
}
