import { Component, OnInit } from '@angular/core';
import { ServepisodiosService } from 'src/app/services/servepisodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.page.html',
  styleUrls: ['./episodios.page.scss'],
})
export class EpisodiosPage implements OnInit {

  public listepi:any = [];
  public pagina = 1;
  public totalpaginas = 1;

  constructor(private episodioService:ServepisodiosService) { }

  ionViewWillEnter(){
    this.buscarepisodios(1);
  }

  ngOnInit() {
  }

  buscarepisodios(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
    this.pagina = pagina;

    this.episodioService.buscarTodos3(pagina).subscribe(datos =>{
      this.listepi = datos['results'];
      this.totalpaginas = datos['pages'];
      console.log("lista: ", this.listepi);
    });
  }

}
