import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../interfaces/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  public estudiantes: Estudiante[] = [];
  private serviceUrl:string='http://localhost:3001';

  constructor(private http:HttpClient) {}

  public listarEstudiantes():void{
    console.log('buscar')
    this.http.get('http://localhost:3001/estudiantes')
    .subscribe(
      resp => {
        console.log(resp);
      }
    )
  }
}
