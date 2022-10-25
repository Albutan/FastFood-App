import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CopyService {
  private data: any;

  constructor(private http: HttpClient) {}

  public getData() {
    return new Promise((resolve, reject) => {
      let language = 'en';
      if (navigator.language.startsWith('es')) {
        language = 'es';
      }
      this.http.get('assets/translations/'+ language + '.json').subscribe(data => {
        this.data = data;
        resolve(true);
      }, error => {
        console.error('Error al traducir: '+ error);
        reject(true);        
      })
    });
  }

  public getCopy(word: string){
    return this.data[word];
  }
}
