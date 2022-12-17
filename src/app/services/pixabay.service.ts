import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Pixabay } from '../interfaces/pixabay.interface';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {


  constructor(private http: HttpClient) { }

  get(params?: { q?: string, category?: string }) {
    let { baseUrl, key } = environment;
    let sendParams: any = {};

    if (params && params.q)
      sendParams.q = params.q;
    if (params && params.category)
      sendParams.category = params.category;

    return this.http.get<{ hits: Pixabay[] }>(baseUrl, { params: { key, ...sendParams } })
  }
}
