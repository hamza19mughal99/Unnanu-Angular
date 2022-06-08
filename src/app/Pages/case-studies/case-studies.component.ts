import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})


export class CaseStudiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  id:any = 'heard';
  tabChange(ids: any){
    this.id = ids
  }

}

