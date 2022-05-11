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

  statusCode:number | undefined

  constructor(private ps: ProductsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  // createTask() {
  //   const TASK = {
  //     "description": this.description,
  //     "completed": this.isChecked
  //   }

  //   this.ps.createTask(TASK).then(res => {
  //     console.log(res.status)
  //     if (res.status === 201) {
  //       this.statusCode = res.status
  //       console.log("Inside promise"+this.statusCode)
  //       this._snackBar.open("Task created", "Success");
  //       this.ps.setCreateTaskSub(true)

  //       this.ps.getProducts().then(res => {

  //         ///
  //         //
  //         ///

  //       }).catch(e => {
  //         ///
  //         //
  //         //

  //       })

  //     }
  //     else {
  //       this._snackBar.open("Creation failed", "Failed");
  //       this.ps.setCreateTaskSub(false)
  //     }
  //   }).catch(e => {
  //     this._snackBar.open("Something went wrong", "Failed");
  //   })

  //   console.log("Outside promise"+this.statusCode)
  //   if(this.statusCode === 201){
  //     alert("Statuc success")
  //   }


  // }

  async createTask(){

    try {
      const TASK = {
        "description": this.description,
        "completed": this.isChecked
      }
      const TASK_RES = await this.ps.createTask(TASK)
      if(TASK_RES.status ===201){
        this.statusCode = TASK_RES.status
        console.log("Inside promise "+this.statusCode)
        this._snackBar.open("Task created", "Success");
        this.ps.setCreateTaskSub(true)
      }
      
    } catch (error) {
      this._snackBar.open("Something went wrong", "Failed");      
    }

    console.log("Inside promise "+this.statusCode)
    if(this.statusCode === 201){
      alert("Statuc success")
    }

  }

  

}
