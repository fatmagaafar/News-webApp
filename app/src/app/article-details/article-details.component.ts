import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {NewsService} from '../services/news.service';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  id:any;
  article:any=[];

  constructor(private  _Route:ActivatedRoute , private _NewsService:NewsService)
  {
    this.id =_Route.snapshot.paramMap.get('id');

this._NewsService.getNews().subscribe(data => {

  this.article = data.articles[this.id]
})

  }

  ngOnInit(): void {
  }

}
