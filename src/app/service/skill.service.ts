import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = 'https://apyoporogramoaffbackend.herokuapp.com/habilidad';
  constructor(private httpClient: HttpClient) { }
  
  public verTodo(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + '/verTodo');
  }
  
  public verPorId(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `/verPorId/${id}`);
  } 
  
  public nuevo(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/nuevo', skill);
  }
  
  public modificar(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/modificar/${id}`, skill);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/${id}`);
  }
}
