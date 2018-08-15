import { Component, OnInit } from '@angular/core';
import { Revise } from '../../shared/revise.model';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  title: string;
  description: string;
  enteredData: Revise;
  constructor() { }

  ngOnInit() {
  }
 onTitleEntry(event: any) {
   this.title = (<HTMLInputElement>event.target).value;
 }
 onDescriptionEntry(event: any) {
    this.description = (<HTMLInputElement>event.target).value;
 }
 onSubmit(event: any) {

 }
}
