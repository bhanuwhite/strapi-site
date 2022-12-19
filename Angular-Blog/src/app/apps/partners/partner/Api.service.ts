import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post<any>("https://d631-157-38-46-64.ngrok.io/api/partners", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  get() {
    return this.http.get<any>("https://d631-157-38-46-64.ngrok.io/api/partners")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  update(data: any, id: number) {
    return this.http.put<any>("https://d631-157-38-46-64.ngrok.io/api/partners/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  delete(id: number) {
    return this.http.delete<any>("https://d631-157-38-46-64.ngrok.io/api/partners/" + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}