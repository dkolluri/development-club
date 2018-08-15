import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	navItems = [{
		        name:'when??',
	            routeUrl: '/when'
	            },
	            {
	            name: 'Revise',
	            routeUrl: '/revise'
	            },
	            {
	            name: 'next??',
	            routeUrl: '/next'
	            },
	            {
	            name: 'showcase',
	            routeUrl: '/showcase'
	            },
	            {
	            name: 'questions??',
	            routeUrl: 'questions'
	            }];




  constructor() { }

  ngOnInit() {
  }

}
