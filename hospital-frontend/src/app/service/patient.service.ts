import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  //private baseUrl = 'http://localhost:8080/api/patients';
  private baseUrl = `${environment.apiUrl}/api/patients`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl);
  }

  get(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/${id}`);
  }

  create(data: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, data);
  }

  update(id: string, data: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
