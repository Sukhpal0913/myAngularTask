import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  
  propertyStatus:string;
  printedOption: string;

  id:number;
  name:string;

  options = [
    { id:1,  name: "Rent"},
    { id:2,  name: "Sale"},
    { id:3, name:"Building"},
    { id:4, name: "Office"}
  ]

  ngOnInit() {
  }

  // print() {
  //   this.printedOption = this.selectedOption;
  //   console.log("my input is: ", this.selectedOption);
  // }

  print() {
    this.printedOption = this.propertyStatus;
    console.log("My input is: " , this.propertyStatus);
  }

  onSubmit(propForm: NgForm): void {
    console.log(propForm.value);

}
}
