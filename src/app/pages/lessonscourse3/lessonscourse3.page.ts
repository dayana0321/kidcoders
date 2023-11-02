import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessonscourse3',
  templateUrl: './lessonscourse3.page.html',
  styleUrls: ['./lessonscourse3.page.scss'],
})
export class Lessonscourse3Page implements OnInit {
  cursos: any = []
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getLessons3().subscribe(
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

    if(id == '9'){
      console.log("Es igual a 9");
        // Navegar a la página "contentlesson9"
        this.router.navigate(['/contentlesson9']);
    }
    if(id == '10'){
      console.log("Es igual a 10");
        // Navegar a la página "contentlesson10"
        this.router.navigate(['/contentlesson10']);
    }
    if(id == '11'){
      console.log("Es igual a 11");
        // Navegar a la página "contentlesson11"
        this.router.navigate(['/contentlesson11']);
    }
    if(id == '12'){
      console.log("Es igual a 12");
        // Navegar a la página "contentlesson12"
        this.router.navigate(['/contentlesson12']);
    }
  }

}
