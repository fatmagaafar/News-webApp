import { Component, OnInit } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
import { NewsService } from '../services/news.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsContainer:any = [];

  constructor(private _NewsService:NewsService ,private _router:Router)
   {


    //  _NewsService.getNews().subscribe(data=>this.newsContainer=data);

    _NewsService.getNews().subscribe( data => {

      for(var i=0; i<data.articles.length;i++)
      {

        if(data.articles[i].urlToImage == null)
      {
        data.articles[i].urlToImage = "./assets/Images/test.jpg"
      }
      }

      this.newsContainer = data;
          })

   }
   artNav(i:any)
   {
     this._router.navigate(['article',i]);

   }

  ngOnInit(): void {
  }

}
