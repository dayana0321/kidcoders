import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lessonscourse1',
  templateUrl: './lessonscourse1.page.html',
  styleUrls: ['./lessonscourse1.page.scss'],
  
})
export class Lessonscourse1Page implements OnInit {

  cursos: any = []

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getLessons().subscribe(
      (res:any) => {
        console.log(res);
        //this.cursos = res;
         // Transforma los datos en un formato más fácil de usar
         this.cursos = res.data.attributes;
         this.cursos.lecciones = res.data.attributes.lecciones.data;
      },
      (err) => console.log(err)
    );
  }

   //Obtener leccion por id
   getLessonById(id:string){
    console.log(id);

    if(id == '1'){
      console.log("Es igual a 1");
        // Navegar a la página "contentlesson1"
        this.router.navigate(['/contentlesson1']);
    }
    if(id == '2'){
      console.log("Es igual a 2");
        // Navegar a la página "contentlesson2"
        this.router.navigate(['/contentlesson2']);
    }
    if(id == '3'){
      console.log("Es igual a 3");
        // Navegar a la página "contentlesson3"
        this.router.navigate(['/contentlesson3']);
    }
    if(id == '4'){
      console.log("Es igual a 4");
        // Navegar a la página "contentlesson1"
        this.router.navigate(['/contentlesson4']);
    }

  }
}
