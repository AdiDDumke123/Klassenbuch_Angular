import { Component, OnInit } from '@angular/core';
import {DataService, Student} from '../data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(public dataService: DataService) { }

  current: Student = null;

  ngOnInit() {
  }

  name: String = null;

  private addStudent() {
    let s = new Student("","",0);
    this.dataService.students.push(s);
    this.edit(s);
  }

  private edit(s: Student) {
    this.current = s;
  }

  private save() {
    this.dataService.save();
    this.current = null;
  }

  private remove() {
    this.dataService.students = this.dataService.students.filter(x => x != this.current);
    this.save();
  }

}
