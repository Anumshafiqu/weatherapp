import { Component } from '@angular/core';
import { Todo } from '../models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a to-do app', completed: false }
  ];

  constructor() { }

  ngOnInit(): void { }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  saveTodo(todo: Todo, newTitle: string): void {
    todo.title = newTitle;
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.editing = false;
  }
}
