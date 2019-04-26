import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

// public imglink = ["./assets/images/user-2.jpg"];
  public imglinks = ["./assets/images/user-1.jpg", "./assets/images/user-2.jpg"]
  constructor() { }

  ngOnInit() {
  }

}
