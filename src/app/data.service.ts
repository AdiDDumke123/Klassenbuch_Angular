import { Injectable } from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";

export class Student {

  name: String;
  lastname: String;
  id: number;
  active: boolean = true;
  courses: Course[] = [];


  constructor(name: String, lastname: String, id: number) {
    this.name = name;
    this.lastname = lastname;
    this.id = id;
  }

  kickStudent(){

    this.active = false;
  }

}

export class Course {
  name: String;

  constructor(name: String){
    this.name = name;
  }
}

@Injectable()
export class DataService {

  name: String = 'Patrick'
  students: Student [] = [];
  courses: Course [] = [];

  constructor() {
    if (localStorage.getItem("students") == null) {
      let s = new Student("Patrick", "Schön", 123456);
      let c = new Course("INF16A");
      this.students.push(s);
      this.courses.push(c);
    } else {
      this.get();
    }
  }

  save() {
    localStorage.setItem("students",JSON.stringify(this.students));
    localStorage.setItem("courses",JSON.stringify(this.courses));
  }

  get() {
    this.students = JSON.parse(localStorage.getItem("students"));
    this.courses = JSON.parse(localStorage.getItem("courses"));
  }

}
