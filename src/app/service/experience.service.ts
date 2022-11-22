import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'https://apyoporogramoaffbackend.herokuapp.com/experienciaLaboral';
  constructor(private httpClient: HttpClient) { }
  
  public verTodo(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.URL + '/verTodo');
  }
  
  public verPorId(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.URL + `/verPorId/${id}`);
  } 
  
  public nuevo(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/nuevo', experience);
  }
  
  public modificar(id: number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/modificar/${id}`, experience);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/${id}`);
  }
}
