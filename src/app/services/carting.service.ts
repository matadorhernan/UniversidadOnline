import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class CartingService {

    public cartingArr:any = []; //used to save on local storage and filter new entries
    public cartSubject = new Subject(); //Suscribers can read this observable and it can contain data:any

    constructor() {
        // Load local storage to cartingArr only if local storage has something
        if(this.cart){
            this.cartingArr = this.cart;
        }
    }

    cleanCart() {//cleans all carting data
        this.cartingArr = []; //will clean the cart variable
        localStorage.removeItem('cart'); //will clean the local storage
    }

    cleanCourse(){
    }

    set cart(course: any) { //recive a course
        if (course) { //if the course is not null
            if (this.cartingArr.filter(function (bagCourse:any) { return bagCourse.id === course.id; }) < 1) { //if the course is not currently on the cart variable
                this.cartingArr.push(course); //will add to the cart variable
                localStorage.setItem('cart', JSON.stringify(this.cartingArr)); //adds the whole cart variable to local storage from JSON data to a string
                this.cartSubject.next(this.cart); // subscribers will get the localstorage
            }
        }
    }

    get cart() {
        return JSON.parse(localStorage.getItem('cart')); //returns local storage form a string to JSON data
    }
}