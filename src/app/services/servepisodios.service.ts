import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServepisodiosService {

  private url = 'https://rickandmortyapi.com/api/episode'

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  buscarTodos3(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
    return this.http.get(`${this.url}?page=${pagina}`);
  }
  
}
