import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DADOS_DA_PONTUACAO, SEGUROS } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  public postcnh(user: SEGUROS): Observable<any> {
    return this.http.post("HTTPS://gateway.gr1d.io/sandbox/mongeral/segurosaude/v1", { headers: { 'xxx': 'xxx' } });
  }
  public postuser(user: DADOS_DA_PONTUACAO): Observable<any> {
    return this.http.post("https://gateway.gr1d.io/sandbox/infocar/cnh/v1/", { headers: { 'X-Api-Key': 'f1f8dd77-9fd9-4485-ae05-feca758ae9fb' } });
  }

}

