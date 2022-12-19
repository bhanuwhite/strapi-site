import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { blogs } from './blog-data';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient) {
  }

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, JSON.stringify(body), this.httpOptions);
  }

  public getBlog(): Observable<any> {
    return of(blogs);
  }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

}
