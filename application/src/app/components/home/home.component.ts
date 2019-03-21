import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/observables/datos';
import { UserModel } from 'src/app/model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  myForm:FormGroup;
  myForm2:FormGroup;
  Users;
  dtaSubscription:Subscription;
  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.dtaSubscription = this.userService.getUsers().subscribe({
        next : ((d)=>{
          this.Users = d; 
          console.log(this.Users);
        }),        
    });
    this.construirFormulario();
  }

  construirFormulario(){
    this.myForm = this.fb.group({
      user : ["",Validators.required],
      password : ["",Validators.required],
    });

    this.myForm2 = this.fb.group({
      usuario:["",Validators.requiredTrue],
      passwordRegister: ["",Validators.requiredTrue],
      nombre:["",Validators.requiredTrue],
      apellido:["",Validators.requiredTrue],     
    });
  }
  Enviar(){
    let dtaformulario = this.myForm.value;   

    this.Users.map(d => {
      console.log("form:" + dtaformulario.user);
      console.log("user:" + d.usuario);
        if((dtaformulario.user == d.usuario) && (dtaformulario.password == d.passwordRegister)){          
          // console.log(`/login/${dtaformulario.user}`);
          this.router.navigate([`/login/${dtaformulario.user}`]);
        }else{
          
        }          
    });
  }
  RegistrarPersona(){
    let user:UserModel = this.myForm2.value;    
    this.userService.createNewUser(user);
  }
  ngOnDestroy(){
    this.dtaSubscription.unsubscribe();
  }
}
