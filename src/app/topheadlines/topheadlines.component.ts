import { Component, OnInit } from '@angular/core';
import {TcNewsServiceService} from '../tc-news-service.service'

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {

  constructor(private TCNews:TcNewsServiceService) { }
topHeadLinesData:any=[];
  ngOnInit(): void {

    this.TCNews.tcHeadLines().subscribe((res)=>{
      console.log(res.articles);
      this.topHeadLinesData=res.articles;
    })
  }

}
