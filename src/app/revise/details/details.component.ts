import { Component, OnInit, Input } from '@angular/core';
import { Revise } from "../../shared/revise.model";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   @Input() notes : Revise;
  constructor() { }

  ngOnInit() {
  }

}
