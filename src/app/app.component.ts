import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(
		private auth: AuthService,
		private location: Location,
		private router: Router
	) {}

	isActive(path: string): boolean {
		return path === this.location.path();
	}

	isSignedIn(): boolean {
		return this.auth.isSignedIn();
	}
}
