import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: [] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.dataService.getCategory().subscribe(
      (result: any) => {
        if(result) {
          this.category = result.health_category;
        }
      },
      (error: any) => {
        alert("Error Found");
        return error;
      }
    );
  }
}
