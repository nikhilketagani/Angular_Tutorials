import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class BlogPostTileComponent implements OnInit {
  // @Input('title') title: string;
  // @Input('summary') summary: string;
  
  @Input('post') blogPost: BlogPost;
  fullsummary: string;
  constructor(private truncatepipe:TruncatePipe) { }

  ngOnInit(): void {
    this.fullsummary=this.blogPost.summary;
    this.blogPost.summary=this.truncatepipe.transform(this.blogPost.summary,10,'***');
  }
  showFullSummary(){
    this.blogPost.summary=this.fullsummary; 
  }
  markFavorite(){
    this.blogPost.isFav=!this.blogPost.isFav;
  }
}
