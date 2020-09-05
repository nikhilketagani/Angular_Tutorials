import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
blogPost: BlogPost[][]=[];
  currentPage:number;
constructor() { }

  ngOnInit(): void {
    this.currentPage=0;
    this.blogPost=[
      [
        {title: 'Post 1',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 2',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 3',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 4',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 5',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'}
      ],
      [
        {title: 'Post 6',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 7',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 8',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 9',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 10',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'}
      ],
      [
        {title: 'Post 11',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 12',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 13',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 14',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'},
        {title: 'Post 15',
        summary: 'Excepteur aliqua proident exercitation ea sint ad veniam laborum laboris et aliqua occaecat ex. Reprehenderit reprehenderit quis in adipisicing aliqua in veniam ad commodo. Aute eiusmod minim laboris aliquip id mollit et nisi ex.'}
      ]
    ]

}
updatePage(newPage){
  console.log("Event emited and method executed and recieved new page"+newPage)
  this.currentPage=newPage;
}
}
