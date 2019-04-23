import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CartingService } from '../../services/carting.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styles: []
})
export class CursoComponent implements OnInit {

  private renderable:boolean = false;
  private courseId:number;
  private course:any = [];

  constructor(private router:Router,
              private _route:ActivatedRoute,
              private _courseService:CourseService,
              private _cartingService:CartingService) {}

  ngOnInit() {

    this._route.params.subscribe(params => {
      this.courseId = Number(params['id']);
      this.course = this._courseService.getIndexCourse(this.courseId);
    })

   

    if (this.course == null ) {
    this.router.navigate(['/home'])
    } else {
      this.renderable = true;
    }

  }

  fixCurrency(value:string) {

    return this._courseService.notateCurrency(value);
  }

  rateCourse(rate:string, e:any) {

    let rating = this._courseService.notateRating(rate);
    e.style.width = `${(rating*90)/5}px`;
    return rating;
  }
  
  fixArray(value:any){
    return Object.values(value);
  }

  buyCourse(course:any){
    this._cartingService.cart = course;
  }
}
