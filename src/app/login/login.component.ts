import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	message: string;

	constructor(public auth: AuthService) {
		this.clearWarningMessage();
	}

	ngOnInit() {}


	getUser(): string {
		return this.auth.getUser();
	}

	login(username: string, password: string): boolean {
		this.clearWarningMessage();
		if (this.auth.login(username, password)) {
			return true;
		} else {
			this.message = `Incorrect credentials.`;
			setTimeout(() => this.clearWarningMessage(), 2500);
			return false;
		}
	}

	logout(): boolean {
		return this.auth.logout();
	}


	private clearWarningMessage(): void {
		this.message = ``;
	}

}
