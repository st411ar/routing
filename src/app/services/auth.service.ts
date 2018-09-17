import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

	constructor() {}


	getUser(): string {
		return localStorage.getItem('username');
	}

	isSignedIn(): boolean {
		return this.getUser() !== null;
	}

	signIn(user: string, password: string): boolean {
		if (user === 'user' && password === 'password') {
			localStorage.setItem('username', user);
			return true;
		} else {
			return false;
		}
	}

	signOut(): boolean {
		try {
			localStorage.removeItem('username');
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}


export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
