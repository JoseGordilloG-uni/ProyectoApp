import { Component, OnInit } from '@angular/core';
import { ServlugaresService } from 'src/app/services/servlugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  public listluga:any = [];
  public pagina = 1;
  public totalpaginas = 1;

  constructor(private lugarService:ServlugaresService) { }

  ionViewWillEnter(){
    this.buscarlugares(1);
  }

  ngOnInit() {
  }

  buscarlugares(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
    this.pagina = pagina;

    this.lugarService.buscarTodos2(pagina).subscribe(datos =>{
      this.listluga = datos['results'];
      this.totalpaginas = datos['pages'];
      console.log("lista: ", this.listluga);
    });
  }

}
