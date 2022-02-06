import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule,FormsModule, TodoRoutingModule],
  exports:[TodoComponent],
  providers:[TodoService]
})
export class TodoModule {}
