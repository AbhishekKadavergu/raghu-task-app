import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskCreated:boolean = false

  constructor(private ps: ProductsService) { 
    ps.getCreateTaskSub().subscribe(res=>{
      this.taskCreated = res
    })
  }

  ngOnInit(): void {
  }

  

}
