import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  private term:string;
  private filteredCourses:any;

  constructor(private activatedRoute:ActivatedRoute,
              private _courseService:CourseService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.term = params['value'];
      this.filteredCourses = this._courseService.filterCourses(this.term);
    })
    
    console.log(this.filteredCourses)
  }

  fixCurrency(value:string) {

    return this._courseService.notateCurrency(value);
  }

  rateCourse(rate:string, e:any) {

    let rating = this._courseService.notateRating(rate);
    e.style.width = `${(rating*90)/5}px`
    return rating;
  }



}
