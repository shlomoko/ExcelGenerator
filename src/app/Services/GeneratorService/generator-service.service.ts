import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http: HttpClient) { }

  uploadFiles(file: String) {
    this.http.post('/api/upload', file)
    .subscribe((response) => {
        console.log('response received is ', response);
    })
  }

  downloadData(data: Response) {

  }
}
