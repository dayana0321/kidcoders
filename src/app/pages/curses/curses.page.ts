import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curses',
  templateUrl: './curses.page.html',
  styleUrls: ['./curses.page.scss'],
})
export class CursesPage implements OnInit {

  cursos: any = []
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (res:any) => {
        console.log(res);
        this.cursos = res;
      },
      (err) => console.log(err)
    );
  } 

    //Obtener cursos por id
    getCourseById(id:string){
      console.log(id);

      if(id == '1'){
        console.log("Es igual a 1");
        // Navegar a la página "lesson1"
        this.router.navigate(['/lessonscourse1']);

      }
      if(id == '2'){
        console.log("Es igual a 2");
        // Navegar a la página "lesson1"
        this.router.navigate(['/lessonscourse2']);

      }
      if(id == '3'){
        console.log("Es igual a 3");
        // Navegar a la página "lesson1"
        this.router.navigate(['/lessonscourse3']);

      }
      if(id == '4'){
        console.log("Es igual a 4");
        // Navegar a la página "lesson1"
        this.router.navigate(['/lessonscourse4']);

      }
  
    }

    navigateTo(destination: string) {
      if (destination === 'cursos') {
        this.router.navigate(['/curses']); // Reemplaza '/cursos' con tu ruta real
      } else if (destination === 'perfil') {
        this.router.navigate(['/profile']); // Reemplaza '/perfil' con tu ruta real
      }
    }
  
    logout() {
      // Realiza aquí el proceso de cierre de sesión (por ejemplo, elimina el token de autenticación, etc.).
      // Luego, redirige al usuario a la página de inicio de sesión.
      this.router.navigate(['/login']); // Reemplaza '/login' con tu ruta real
    }
}
