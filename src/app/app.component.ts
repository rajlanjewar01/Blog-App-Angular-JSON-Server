import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loggedStatus = 'false';

  constructor(private api: ApiService, private dialog: MatDialog, private router: Router ){}
  
  ngOnInit(): void {
    if(localStorage.getItem('loggedUser')){
      if(localStorage.getItem('loggedUser') === 'true'){
        this.loggedStatus = 'true';
      }
    }else{
      localStorage.setItem('loggedUser', 'false');
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: "60%"
    }).afterClosed().subscribe(val => {
      if(val === "save"){
        // this.getAllUsers();
      }
    })
  }

  //log out
  logOut(){
    if(confirm("Are you sure?, want to Logout")){
      this.loggedStatus = 'false';
        if(localStorage.getItem('loggedUser')){
          localStorage.setItem('loggedUser', 'false');
          this.router.navigate(['home']);
        }
      }
    }
}
