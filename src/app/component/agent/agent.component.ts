import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

// public imglink = ["./assets/images/user-2.jpg"];
   images:any[] = ["./assets/images/user-1.jpg", "./assets/images/user-2.jpg", "./assets/images/user-3.jpg", "./assets/images/user-4.jpg", "./assets/images/user-1.jpg", 
  "./assets/images/user-2.jpg"]

  name:any[] = []


  constructor() { }

  ngOnInit() {
  }
  



}
