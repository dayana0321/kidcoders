import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'app-contentlesson1',
  templateUrl: './contentlesson1.page.html',
  styleUrls: ['./contentlesson1.page.scss'],
})
export class Contentlesson1Page implements OnInit {
  lecciones: any = {}; 
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getContentLesson1().subscribe(
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
