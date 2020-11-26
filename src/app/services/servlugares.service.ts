import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServlugaresService {

  private url = 'https://rickandmortyapi.com/api/location'

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  buscarTodos2(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
    return this.http.get(`${this.url}?page=${pagina}`);
  }

  buscarId(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

}
