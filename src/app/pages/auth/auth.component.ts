import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public correo:string = '';
  public password:string = '';

  constructor(private router: Router) {}

  login():void{
    if(this.correo !== 'iber@gmail.com' || this.password !== "123456" ) return alert('invalido')
    this.router.navigate(['/dashboard']);
  }

}
