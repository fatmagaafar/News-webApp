import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  constructor(private router:Router) { }
  showText(name:string,pass:any) {
    if(name =="fatma" && pass== 123)
  {
     
     this.router.navigate(['/home']);


  }
  else
  {
   alert("Error!!");
  }
  }

  ngOnInit(): void {
  }

}