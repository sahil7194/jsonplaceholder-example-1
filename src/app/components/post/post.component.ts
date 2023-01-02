import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route } from '@angular/router';
import { CommentModel } from 'src/app/models/comment-model';
import { PostModel } from 'src/app/models/post-model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post!:PostModel;
  comments :CommentModel [] = []; 

  constructor ( private postService: PostService,
                private router: ActivatedRoute,
                private titleService: Title,
      ){

  }

  ngOnInit(){
      const id = this.router.snapshot.paramMap.get('id');
      this.getPost(id);
      this.getPostComments(id);
       
  }

   getPost(id:any):void {

     this.postService.getPostById(id).subscribe((response)=>{
      this.post = response;
      this.titleService.setTitle(this.post.title);
    });

  }

  getPostComments(id:any):void {

    this.postService.getCommentByPostId(id).subscribe((response)=>{
      this.comments = response;
    })
  }

}
