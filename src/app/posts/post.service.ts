import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  //Métodos para obtener las lecciones de los 4 cursos
  getPosts(){
    return this.http.get("http://localhost:1337/api/cursos");
  }

  getLessons(){
    return this.http.get("http://localhost:1337/api/cursos/1?populate=lecciones");
  }

  getLessons2(){
    return this.http.get("http://localhost:1337/api/cursos/2?populate=lecciones");
  }

  getLessons3(){
    return this.http.get("http://localhost:1337/api/cursos/3?populate=lecciones");
  }

  getLessons4(){
    return this.http.get("http://localhost:1337/api/cursos/4?populate=lecciones");
  }
  

  //Solicitudes para traer el contenido de las 16 lecciones

  getContentLesson1(){
    return this.http.get("http://localhost:1337/api/lecciones/1");
  }

  getContentLesson2(){
    return this.http.get("http://localhost:1337/api/lecciones/2");
  }

  getContentLesson3(){
    return this.http.get("http://localhost:1337/api/lecciones/3");
  }

  getContentLesson4(){
    return this.http.get("http://localhost:1337/api/lecciones/4");
  }

  getContentLesson5(){
    return this.http.get("http://localhost:1337/api/lecciones/5");
  }

  getContentLesson6(){
    return this.http.get("http://localhost:1337/api/lecciones/6");
  }

  getContentLesson7(){
    return this.http.get("http://localhost:1337/api/lecciones/7");
  }

  getContentLesson8(){
    return this.http.get("http://localhost:1337/api/lecciones/8");
  }

  getContentLesson9(){
    return this.http.get("http://localhost:1337/api/lecciones/9");
  }

  getContentLesson10(){
    return this.http.get("http://localhost:1337/api/lecciones/10");
  }

  getContentLesson11(){
    return this.http.get("http://localhost:1337/api/lecciones/11");
  }

  getContentLesson12(){
    return this.http.get("http://localhost:1337/api/lecciones/12");
  }

  getContentLesson13(){
    return this.http.get("http://localhost:1337/api/lecciones/13");
  }

  getContentLesson14(){
    return this.http.get("http://localhost:1337/api/lecciones/14");
  }

  getContentLesson15(){
    return this.http.get("http://localhost:1337/api/lecciones/15");
  }

  getContentLesson16(){
    return this.http.get("http://localhost:1337/api/lecciones/16");
  }

  //Obtener los usuarios
  getUsers(){
    return this.http.get("http://localhost:1337/api/usuarios");
  }

  getProgress(){
    return this.http.get('http://localhost:1337/api/progresos?populate=*');
 
  }

  createUser(userData: any) {
    return this.http.post('http://localhost:1337/api/usuarios', userData);
  }
}
