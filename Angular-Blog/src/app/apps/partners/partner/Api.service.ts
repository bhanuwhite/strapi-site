import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post<any>("baseurl", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  get() {
    return this.http.get<any>("baseurl")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  update(data: any, id: number) {
    return this.http.put<any>("baseurl" + id, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  delete(id: number) {
    return this.http.delete<any>("baseurl" + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}