import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {}

  userArrays = newArray;

  toDos: string[] =["Todo1","Todo2","Todo3"];
  trackByIndex(index: number, obj: any): any {
   return index;
 }
  addItem() {
     this.toDos.push('0');
 }

  ngOnInit() {
  }

}