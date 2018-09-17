import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../services/auth.service';


@Injectable()
export class SignedInGuard implements CanActivate {
	
	constructor(private auth: AuthService) {}


	canActivate(): boolean {
		return this.auth.isSignedIn();
	}
}