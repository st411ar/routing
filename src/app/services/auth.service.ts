import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

	constructor() {}


	getUser(): string {
		return localStorage.getItem('username');
	}

	login(user: string, password: string): boolean {
		if (user === 'user' && password === 'password') {
			localStorage.setItem('username', user);
			return true;
		} else {
			return false;
		}
	}
}
