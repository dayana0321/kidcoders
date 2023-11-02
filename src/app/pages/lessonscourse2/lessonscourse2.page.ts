import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessonscourse2',
  templateUrl: './lessonscourse2.page.html',
  styleUrls: ['./lessonscourse2.page.scss'],
})
export class Lessonscourse2Page implements OnInit {
  cursos: any = []
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getLessons2().subscribe(
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

    if(id == '5'){
      console.log("Es igual a 5");
        // Navegar a la página "contentlesson1"
        this.router.navigate(['/contentlesson5']);
    }
    if(id == '6'){
      console.log("Es igual a 6");
        // Navegar a la página "contentlesson2"
        this.router.navigate(['/contentlesson6']);
    }
    if(id == '7'){
      console.log("Es igual a 7");
        // Navegar a la página "contentlesson3"
        this.router.navigate(['/contentlesson7']);
    }
    if(id == '8'){
      console.log("Es igual a 8");
        // Navegar a la página "contentlesson1"
        this.router.navigate(['/contentlesson8']);
    }
  }
}
