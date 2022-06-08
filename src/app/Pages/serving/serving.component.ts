import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-serving',
  templateUrl: './serving.component.html',
  styleUrls: ['./serving.component.css']
})
export class ServingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
