import { Component, OnInit } from '@angular/core';
import {Course, DataService} from "../data.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {

  constructor(public dataService: DataService) { }

  current: Course = null;

  ngOnInit() {
  }

  private addCourse() {
    let c = new Course("");
    this.dataService.courses.push(c);
    this.edit(c);
  }

  private edit(c: Course) {
    this.current = c;
  }

  private save() {
    this.dataService.save();
    this.current = null;
  }

  private remove() {
    this.dataService.courses = this.dataService.courses.filter(x => x != this.current);
    this.save();
  }
}
