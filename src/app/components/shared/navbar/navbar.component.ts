import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartingService } from '../../../services/carting.service';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  private navarCart: any = [];

  constructor(private router: Router,
    private _courseService: CourseService,
    private _cartingService: CartingService) { }

  ngOnInit() {

    this.loadLocalCart()

    this._cartingService.cartSubject.subscribe((nextValue) => {
      this.navarCart = nextValue;
    })
  }
  

  fixCurrency(value:string) {
    return this._courseService.notateCurrency(value);
  }

  searchValue(value: string) {
    this.router.navigate(['/busqueda', value]);
  }

  loadLocalCart(){
    if(this._cartingService.cart){
      this.navarCart = this._cartingService.cart;
    } 
  }

  cleanNavCart(){
    this.navarCart = [];
    this._cartingService.cleanCart();
  }

  findCourse(id:string){
    this.router.navigate(['/curso', id]);
  }

  deleteCourse(id:string){
    console.log(id);
  }
}
