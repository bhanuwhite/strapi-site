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
    return this.http.post<any>('/api/partners', data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  get() {
    return this.http.get<any>( '/api/partners')
      .pipe(map((res: any) => {
        return res;
      }))
  }

  update(data: any, id: number) {
    return this.http.put<any>('/api/partners/' +id, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  delete(id: number) {
    return this.http.delete<any>('/api/partners/' + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}