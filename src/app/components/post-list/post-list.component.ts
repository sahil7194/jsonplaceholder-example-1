import { Component } from '@angular/core';
import { PostModel } from 'src/app/models/post-model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts :PostModel[]= [];
  postPerPage :number = 3;
  postStrating : number = 0;

  constructor (private postService: PostService){
    
  }

  ngOnInit(){
    this.fetchAllposts();
    console.log(this.LastPage , 'last ');

  }

  fetchAllposts(){

  this.postService.getAllPosts().subscribe((response)=>{
    this.posts = response.slice(0,9);
  });
  }

  get LastPage(){
    return this.posts.length
  }
}
