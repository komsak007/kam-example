import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGetTodoResponse, ITodo } from '@pricing-sample-nx/shared-models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pricing-sample-nx-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  todo = '';
  tododes: ITodo[] = [] as ITodo[];

  errorMessage = '';
  destroy$: Subject<void> = new Subject<void>();
  value: ITodo = {} as ITodo;

  constructor(public router: Router, public todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  //add
  addTodo() {
    console.log(this.todo);
    this.todoService.addTodo(this.todo).subscribe((response) => {
      console.log('response:', response);
      this.getTodo();
      this.todo = '';
    });
  }

  //get all
  getTodo() {
    const mockInput = {
      todo: this.todo,
    };
    // {
    //   todo:string
    // }
    this.todoService
      .getTodo(mockInput)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response: ITodo[]) => {
          this.errorMessage = '';
          this.tododes = response;
          console.log('this.tododes', this.tododes);
        },
        (ex) => {
          this.errorMessage = ex.message;
        }
      );
  }

  //Delete
  deleteTodo(id: any) {
    this.todoService.deleteTodo(id).subscribe((response) => {
      console.log('response:', response);
      this.getTodo();
      this.todo = '';
    });
  }

  //Update
  updateTodo(id: any) {
    this.todoService.updateTodo(id, this.todo).subscribe((response) => {
      console.log('response:', response);
      this.getTodo();
      this.todo = '';
    });
  }
}
