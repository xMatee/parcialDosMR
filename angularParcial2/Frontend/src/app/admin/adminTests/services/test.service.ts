import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from 'src/app/interfaces/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = 'http://10.4.200.117:3000/admin/tests';

  constructor(private http: HttpClient) { }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.apiUrl)
  }

  getTest(id: number): Observable<Test> {
    return this.http.get<Test>(`${this.apiUrl}/${id}`)
  }

  guardarTest(nuevoTest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoTest)
  }

  editarTest(testId: number, test: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${testId}`, test)
  }

  eliminarTest(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}
