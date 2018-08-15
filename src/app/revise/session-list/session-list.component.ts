import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Revise } from '../../shared/revise.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() reviseItem : Revise;
  @Output() itemSelected = new EventEmitter<Revise>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(revise: Revise) {
    this.itemSelected.emit(revise);
  }
}
