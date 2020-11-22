import { Component, OnInit } from '@angular/core';
import { ServpersonajesService } from 'src/app/services/servpersonajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  public listperso:any = [];
  public pagina = 1;
  public totalpaginas = 1;

  constructor(private personajeService:ServpersonajesService) { }

  ionViewWillEnter(){
    this.buscarpersonajes(1);
  }

  ngOnInit() {
  }

  buscarpersonajes(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
    this.pagina = pagina;

    this.personajeService.buscarTodos(pagina).subscribe(datos =>{
      this.listperso = datos['results'];
      this.totalpaginas = datos['pages'];
      console.log("lista: ", this.listperso);
    });
  }

}
