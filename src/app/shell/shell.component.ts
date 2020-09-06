import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
@ContentChild('appHeader') headerElement;
  constructor() { }

  ngOnInit(): void {
    console.log("in shell")
    console.log(this.headerElement);
  }

}
