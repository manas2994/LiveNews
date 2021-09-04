import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcNewsServiceService {

  constructor(private http:HttpClient) { }

  topHeadLineNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=560ef402baf8499ebfbffb66bc6a8523'
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=560ef402baf8499ebfbffb66bc6a8523'
  
  tchNews():Observable<any>{

    return this.http.get(this.techNews);
      }
  tcHeadLines():Observable<any>{

    return this.http.get(this.topHeadLineNews);
      }
}
