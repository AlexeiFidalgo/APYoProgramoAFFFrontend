import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL = 'https://apyoprogramoaffbackend.onrender.com/persona';
  constructor(private httpClient: HttpClient) { }
  
  public verTodo(): Observable<Profile[]>{
    return this.httpClient.get<Profile[]>(this.URL + '/verTodo');
  }
  
  public verPorId(id: number): Observable<Profile>{
    return this.httpClient.get<Profile>(this.URL + `/verPorId/${id}`);
  } 
  
  public nuevo(profile: Profile): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/nuevo', profile);
  }
  
  public modificar(id: number, profile: Profile): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/modificar/${id}`, profile);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
