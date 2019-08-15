import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:string="";
password:string='';
errorshow:boolean=false; //initialy div will be hidden //you can test by making it true
  constructor() { }

  ngOnInit() {
  }
  isvalid(){
    // alert(this.name); uncomment and check this alert 
    if(this.name==''){ //here we are displaying warning message if name is empty or user doesnt enter input and submits
      this.errorshow=true; //here we are enabling/show , now div element is visiable
    }else{
      this.errorshow=false; //here we are disabling/hiding div  element
    }
  }
}
