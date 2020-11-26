import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServpersonajesService {

  private url = 'https://rickandmortyapi.com/api/character'

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  buscarTodos(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
    return this.http.get(`${this.url}?page=${pagina}`);
  }

  public buscarId(id: number){
    return this.http.get(`${this.url}/${id}`);
  }
}
