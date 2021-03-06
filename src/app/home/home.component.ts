import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = []

  displayedColumns: string[] = [];
  dataSource: any;

  constructor(private ps: ProductsService) {
    ps.getCreateTaskSub().subscribe(res=>{
      this.getTasksToDisplay()
    })
   }

  ngOnInit(): void {
    // this.getProductsData()
    this.getTasksToDisplay()
  
  }

  getTasksToDisplay(){
    this.ps.getTasks().then(res => {
      console.log(res)
      this.dataSource = res
      this.displayedColumns = ["description", "completed", "edit", "delete"]
      console.log(this.dataSource)
    })
  }

  onEdit(id: number) {
    console.log(id)
  }

  onDelete() {
    let array = [1, 2, 3]
    array.forEach(element => {

    });

    const student = [
      {
        "name": "Ragu",
        "id": 123
      },
      {
        "name": "Ragu",
        "id": 123
      },
      {
        "name": "Ragu",
        "id": 123
      },
    ]

  }

}
