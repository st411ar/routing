import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
	message: string;

	constructor(public auth: AuthService) {
		this.clearWarningMessage();
	}

	ngOnInit() {}


	getUser(): string {
		return this.auth.getUser();
	}

	signIn(username: string, password: string): boolean {
		this.clearWarningMessage();
		if (this.auth.signIn(username, password)) {
			return true;
		} else {
			this.message = `Incorrect credentials.`;
			setTimeout(() => this.clearWarningMessage(), 2500);
			return false;
		}
	}

	signOut(): boolean {
		return this.auth.signOut();
	}


	private clearWarningMessage(): void {
		this.message = ``;
	}

}
