import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comment-model';
import { PostModel } from '../models/post-model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}
@Injectable({
  providedIn: 'root'
})


export class PostService {

  url: string = 'https://jsonplaceholder.typicode.com/';
 
  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<PostModel[]> 
  { 
    return this.httpClient.get<PostModel[]>(this.url+'posts');
  }

  getPostById(id: number): Observable<PostModel>
  {
    return this.httpClient.get<PostModel>(this.url+'posts/'+id);
  }

  getCommentByPostId(id: number): Observable<CommentModel>{
    return this.httpClient.get<CommentModel>(this.url+'posts/'+id+'comments');
  }

  addNewPost(post:PostModel):Observable<PostModel>
  {
      return this.httpClient.post<PostModel>(this.url,post,httpOptions);
  }
}
