import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(
		private location: Location,
		private router: Router
	) {}

	isActive(path: string): boolean {
		return path === this.location.path();
	}
}
