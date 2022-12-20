import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl= environment.baseurl;
  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post<any>(this.baseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  get() {
    return this.http.get<any>(this.baseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  update(data: any, id: number) {
    return this.http.put<any>(this.baseUrl + id, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  delete(id: number) {
    return this.http.delete<any>(this.baseUrl + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}