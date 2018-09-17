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


	private clearWarningMessage(): void {
		this.message = ``;
	}

}
