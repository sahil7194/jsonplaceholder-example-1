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
  startPost : number = 0;
  endPost :number = 1 * this.postPerPage;
  postPagesCount :number = 0;

  constructor (private postService: PostService){
    
  }

  ngOnInit(){
    this.fetchAllposts(this.startPost,this.endPost);
  }

  fetchAllposts(start:number,end:number){

  this.postService.getAllPosts().subscribe((response)=>{

   this.posts = response.slice(start,end);

  });
  }

  updatePostPerPage($event:any) {

    this.postPerPage = $event.target.value;
    // console.log(this.postPerPage);
    this.fetchAllposts(this.startPost,this.postPerPage);
  }

}
