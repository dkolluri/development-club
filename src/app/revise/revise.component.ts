import { Component, OnInit } from '@angular/core';
import { Revise } from '../shared/revise.model';
@Component({
  selector: 'app-revise',
  templateUrl: './revise.component.html',
  styleUrls: ['./revise.component.css']
})
export class ReviseComponent implements OnInit {
	revisions: Revise[] = [
     new Revise('08/08/2018','angular demo')
  ];
  itemSelected: Revise;
  constructor() { }

  ngOnInit() {
  }

}
