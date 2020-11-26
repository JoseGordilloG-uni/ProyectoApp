import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServpersonajesService } from 'src/app/services/servpersonajes.service';

@Component({
  selector: 'app-description-personajes',
  templateUrl: './description-personajes.page.html',
  styleUrls: ['./description-personajes.page.scss'],
})
export class DescriptionPersonajesPage implements OnInit {

  id = 0;
  personajes:any[] = [];
  origen:any[] = [];
  locacion:any[] = [];

  constructor(private personajeService:ServpersonajesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.personajeService.buscarId(this.id).subscribe((datos:any[])=>{
      this.personajes = datos;
      this.origen = datos['origin'];
      this.locacion = datos['location'];
      console.log(this.personajes, this.origen, this.locacion);
    });
  }

}
