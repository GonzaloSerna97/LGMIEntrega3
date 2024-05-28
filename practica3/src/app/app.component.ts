import { Component } from '@angular/core';
import { Ciudad } from './models/ciudad';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  ciudadArray: Ciudad[] = [
    {id: 1, nombre: "Nueva York", pais: "EEUU"},
    {id: 1,nombre: "Madrid", pais: "España"},
    {id: 1,nombre: "Burgos", pais: "España"},
    {id: 1,nombre: "Baku", pais: "Azerbayan"},
  ];

  ciudadSeleccionada: Ciudad = new Ciudad();

  editar(ciudad: Ciudad) {
    this.ciudadSeleccionada = ciudad;
  }

  agregarOeditar(){
    if(this.ciudadSeleccionada.id === 0){
      this.ciudadSeleccionada.id = this.ciudadArray.length + 1;
      this.ciudadArray.push(this.ciudadSeleccionada);
    }

    
    this.ciudadSeleccionada = new Ciudad();
  }
  eliminar() {
    if (confirm('¿Seguro de eliminar la selección?')){
      this.ciudadArray = this.ciudadArray.filter(x => x!= this.ciudadSeleccionada);
      this.ciudadSeleccionada = new Ciudad ();
    }
  }


}
