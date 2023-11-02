import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import {UserService} from 'src/app/user.service'

@Component({
  selector: 'app-contentlesson4',
  templateUrl: './contentlesson4.page.html',
  styleUrls: ['./contentlesson4.page.scss'],
})
export class Contentlesson4Page implements OnInit {
  lecciones: any = {};
  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.postService.getContentLesson4().subscribe(
      (res:any) => {
        console.log(res);
         // Transforma los datos en un formato más fácil de usar
         this.lecciones = res.data.attributes;
         console.log(this.lecciones);
      },
      (err) => console.log(err)
    );
  }


  saveProgress(){
      //Obteniendo el usuario "logueado"
    const userData = this.userService.getUser();
    const id = userData.attributes.usuario_id;
    console.log(userData);
    console.log(id);
  }

}
