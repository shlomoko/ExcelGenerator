import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http: HttpClient) { }

  uploadFiles(file: String): Observable<any> {
    return this.http.post('/api/upload', file)
  }

  downloadData(data: Response) {

  }
}
