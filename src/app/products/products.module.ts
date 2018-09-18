import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{ path: 'main', component: MainComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [MainComponent]
})
export class ProductsModule { }
