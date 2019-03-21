import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/observables/datos';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/model/User';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private userService:UserService,private ar:ActivatedRoute,private router:Router) { }
  User = new UserModel();
  dtaSubscription:Subscription;
  ngOnInit() {   
    this.User.nombre="" ;
    this.dtaSubscription = this.userService.getUsers().subscribe({
      next : ((d)=>{                        
        d.map(j=>{                              
          if(this.ar.snapshot.paramMap.get("id")==j.usuario){
             this.User = j;
          }
        })
      }),
      
    });    
  }

}
