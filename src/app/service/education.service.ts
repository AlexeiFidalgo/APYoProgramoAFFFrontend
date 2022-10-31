import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
URL = 'http://localhost:8080/educacion';
constructor(private httpClient: HttpClient) { }

public verTodo(): Observable<Education[]>{
  return this.httpClient.get<Education[]>(this.URL + '/verTodo');
}

public verPorId(id: number): Observable<Education>{
  return this.httpClient.get<Education>(this.URL + `/verPorId/${id}`);
} 

public nuevo(education: Education): Observable<any>{
  return this.httpClient.post<any>(this.URL + '/nuevo', education);
}

public modificar(id: number, education: Education): Observable<any>{
  education.id=id;
  return this.httpClient.put<any>(this.URL + `/modificar/${id}`, education);
}

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `/borrar/${id}`);
}
}
