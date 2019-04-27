import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {



  assetsImages:any[] = ["./assets/images/property-4.jpg", "./assets/images/property-2.jpg", "./assets/images/property-3.jpg", 
   "./assets/images/property-4.jpg", "./assets/images/property-5.jpg", "./assets/images/property-6.jpg"]

//   myhref:any[] = ["30% Discount to Travel", "Planning for Vacation", "Visit Tokyo Japan", "30% Discount to Travel", "Planning for Vacation",
  
// ]



  constructor() {
  
   }

  ngOnInit() {
  }

  

}
