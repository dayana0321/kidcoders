import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {
  respuestas: string[] = ['', '', '', '', '']; // Un modelo para cada pregunta
  respuestasCorrectas: string[] = ['correct', 'correct', 'correct', 'correct', 'correct'];
  ganarCurso: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // Función para manejar cambios en el ion-radio
  manejarRespuestaSeleccionada(indice: number) {
    if (this.respuestas[indice] === 'correct') {
      //this.respuestasCorrectas++;
      //console.log(this.respuestasCorrectas);
      console.log('Respuesta correcta');
      // Realiza acciones adicionales cuando la respuesta es correcta.
    } else {
      console.log('Respuesta incorrecta');
      // Realiza acciones adicionales cuando la respuesta es incorrecta.
    }
  }

  evaluarResultado(){

    const respuestasCorrectas = this.respuestasCorrectas;
    const respuestasEstudiante = this.respuestas;
    const respuestasCorrectasCount = respuestasCorrectas.filter((resp, index) => resp === respuestasEstudiante[index]).length;

    if (respuestasCorrectasCount >= 3) {
      console.log('¡Has ganado el curso!');
      this.ganarCurso = true;
      // Realiza acciones adicionales cuando el estudiante gana el curso.
    } else {
      console.log('Lo siento, no has ganado el curso.');
      this.ganarCurso = false;
      // Realiza acciones adicionales cuando el estudiante no gana el curso.
    }
    
  }

}
