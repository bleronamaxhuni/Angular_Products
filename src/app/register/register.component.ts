import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private _route:Router, private _http:HttpClient) { }
  register:FormGroup|any;
  signuser:any;
  ngOnInit(): void {
    this.register = new FormGroup({
      'fullName': new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password': new FormControl()
    })
  }

  registerdata(register:FormGroup){
    this.signuser = this.register.value.fullName
    this._http.post<any>("http://localhost:3000/register", this.register.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.register.reset();
      this._route.navigate(['login']);
    }, err=>{
      alert('Somthing went wrong');
    })

  }

  sbtn(){
   
    this._route.navigate(['login']);
    //$('.form-box1').css('z-index', '99');
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none');
  }
}
