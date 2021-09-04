import { Component, OnInit } from '@angular/core';
import {TcNewsServiceService} from '../tc-news-service.service'

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private TCNews:TcNewsServiceService) { }
   TechNews:any=[];
  ngOnInit(): void {
    this.TCNews.tchNews().subscribe((res)=>{
      console.log(res.articles);
      this.TechNews=res.articles;
    })
  }
  
}

