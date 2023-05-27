import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{


  constructor(public estudiante:EstudianteService){}
  ngOnInit(): void {
    this.estudiante.listarEstudiantes();
  }

}
