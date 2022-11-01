import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  URL = 'https://apyoporogramoaffbackend.herokuapp.com/proyecto';
  constructor(private httpClient: HttpClient) { }
  
  public verTodo(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.URL + '/verTodo');
  }
  
  public verPorId(id: number): Observable<Project>{
    return this.httpClient.get<Project>(this.URL + `/verPorId/${id}`);
  } 
  
  public nuevo(project: Project): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/nuevo', project);
  }
  
  public modificar(id: number, project: Project): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/modificar/${id}`, project);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/${id}`);
  }
}
