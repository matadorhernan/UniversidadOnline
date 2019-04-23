import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';
import { CartingService } from '../../services/carting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private courses:any = [];


  constructor(private _courseService:CourseService,
              private _cartingService:CartingService,
              private router:Router) {
    this.courses = this._courseService.getCourses();
  }

  ngOnInit() {
  }

  rateCourse(rate:string, e:any) {

    let rating = this._courseService.notateRating(rate);
    e.style.width = `${(rating*90)/5}px`
    return rating;
  }

  fixCurrency(value:string) {
    return this._courseService.notateCurrency(value);
  }

  searchValue(value:string) {
    this.router.navigate(['/busqueda', value])
  }

  buyCourse(course:any){
    this._cartingService.cart = course;
  }
}
