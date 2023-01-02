import { Component } from '@angular/core';
import { PostModel } from 'src/app/models/post-model';
import { PostService } from 'src/app/services/post.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  topPost: PostModel[] = [];
  constructor(private postService: PostService,
              private titleService:Title){}

  ngOnInit() {
    this.fetchTopPosts();

    this.titleService.setTitle('Home');
  }

  fetchTopPosts(){
    this.postService.getAllPosts().subscribe((resposne)=>{
      this.topPost = resposne.slice(0,4);
    });
  }
}
