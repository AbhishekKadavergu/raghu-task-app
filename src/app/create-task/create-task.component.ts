import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  isChecked: boolean = false
  description: string = ''

  constructor(private ps:ProductsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  createTask() {
    const TASK = {
      "description": this.description,
      "completed": this.isChecked
    }

    this.ps.createTask(TASK).then(res=>{
      console.log(res.status)
      this._snackBar.open("Task created", "Success");
    })


  }

}
