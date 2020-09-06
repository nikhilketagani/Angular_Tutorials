# ComponentsIndepth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
1.objective 
creating and using nested components
using template expressions( double curlys)
2.how do we pass input parameters(values) to component

it is done through atributes
just like you pass attributes to HTML element(<div class="btn")
you can pass parameters to attributes

@Input('attributeNametToBeUsed') abc: string
@Input('attributeNametToBeUsed1') abc: string
<component attributeNametToBeUsed="value" attributeNametToBeUsed1="value1">
</component>

3.passing object instances to component inputs
using [] syntax ,binds the value being passed in ,to the value of the component
member variable. The binding is applicable even when the value of the
component property changes

Recommended best practice is to pass in object of class instead of
having each property being passed as an attribute
1.use one property as input 
2. create a class with multiple properties 
3. pass instance of that class to input attribute of component

 @Input('post') blogPost: BlogPost;(child component) 
 ++++++++++++++++++++++++++++++++++++++++++++++++
parent component

<app-blog-post-tile 
*ngFor="let post of blogPost"
[post]="post">
</app-blog-post-tile>


4.understanding component life cycle hooks

5.creating a pipe
ng g p truncate

pipe function should be stateless. 
That is it should process an input to provide an output .
But it should not store or remember anything.

6.Accessing Angular pipes from the component class

"providers property lets you specify the services or providers that you
want to declare for your Angular application"

a. add pipe class in providers array of appmodules
b. inject pipe instance into constructor of component
c. calling pipe's transform method 

7.Handling click events on components
install Lorem ipsum extension in visual code studio
Press F1 type lorem ipsum and select to insert either a line or paragraph.

8.
a.Parent to child component communication (data)
with help of  @Input() and [] 
b.child to parent component communication (events)
with help of @Output(), EventEmitter, $event

9.using View Encapsulation
encapsulation: ViewEncapsulation.None -- no encapsulation of styling is applied for 
css or scss files of the component
encapsulation: ViewEncapsulation.Emulated  --  encapsulation of styling is applied for 
css or scss files of the component

by default (encapsulation: ViewEncapsulation.Emulated) is used by Angular

10.host selector
it is used when to apply styles to component itself 
instead of markup inside the component.
to use host selector(encapsulation: ViewEncapsulation.Emulated )
encapsulation property to be removed for component

11.viewChild
@ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;
expandAll(){
   this.blogPostTileComponent.showFullSummary()

}
<app-blog-post-tile #tile [post]="blogPost[0][0]"></app-blog-post-tile>
ViewChildren

12.viewChildren
@ViewChildren('tile1') blogPostTileComponent1 :QueryList<BlogPostTileComponent>;
expandAll(){
  this.blogPostTileComponent1.forEach((e)=>{e.showFullSummary()})
}
<app-blog-post-tile #tile1
*ngFor="let post of blogPost[currentPage]"
[post]="post">

13.ngClass
[ngClass]="{'cssClass': expression}"
apply css class based on condition

14.create a Directive
ng generate directive highlight

15.ngcontent
used to pass markup(dom element) from one component to other component(multi-slot content projection)
EX:ng g c shell
<div>
    <ng-content select="[header]"></ng-content>
</div>
<div>
    <ng-content select="[body]" ></ng-content>
</div>

<div>
    <ng-content select="[footer]" ></ng-content>
</div>
++++++++++
in appcomponent.html

<app-shell>
    

    <h1 header>Angular</h1>

    <app-blog-list body></app-blog-list>

    <h2 footer>Footer</h2>
    

    
</app-shell>
++++++++++++++++++++++++++++++++++++++++++++

https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2








