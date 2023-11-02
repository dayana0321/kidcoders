import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'app-contentlesson11',
  templateUrl: './contentlesson11.page.html',
  styleUrls: ['./contentlesson11.page.scss'],
})
export class Contentlesson11Page implements OnInit {
  lecciones: any = {};

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getContentLesson11().subscribe(
      (res:any) => {
        console.log(res);
         // Transforma los datos en un formato más fácil de usar
         this.lecciones = res.data.attributes;
         console.log(this.lecciones);
      },
      (err) => console.log(err)
    );
  }

}
