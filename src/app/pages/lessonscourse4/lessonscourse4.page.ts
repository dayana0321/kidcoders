import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessonscourse4',
  templateUrl: './lessonscourse4.page.html',
  styleUrls: ['./lessonscourse4.page.scss'],
})
export class Lessonscourse4Page implements OnInit {
  cursos: any = []

  constructor(private postService: PostService,  private router: Router) { }

  ngOnInit() {
    this.postService.getLessons4().subscribe(
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

    if(id == '13'){
      console.log("Es igual a 13");
        // Navegar a la página "contentlesson13"
        this.router.navigate(['/contentlesson13']);
    }
    if(id == '14'){
      console.log("Es igual a 14");
        // Navegar a la página "contentlesson14"
        this.router.navigate(['/contentlesson14']);
    }
    if(id == '15'){
      console.log("Es igual a 15");
        // Navegar a la página "contentlesson15"
        this.router.navigate(['/contentlesson15']);
    }
    if(id == '16'){
      console.log("Es igual a 16");
        // Navegar a la página "contentlesson16"
        this.router.navigate(['/contentlesson16']);
    }
  }
}
