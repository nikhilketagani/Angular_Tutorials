import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
blogPost: BlogPost[]=[];
  constructor() { }

  ngOnInit(): void {
    this.blogPost.push(new BlogPost('Blog Post 1','Summary 1'));
    this.blogPost.push(new BlogPost('Blog Post 2','Excepteur nostrud eiusmod et dolor culpa officia tempor adipisicing pariatur consequat sunt. Qui laborum nostrud ea eiusmod. Sint aute amet irure esse nostrud laborum.'));

}
}
