import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';


export const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{ path: 'main', component: MainComponent },
	{ path: 'more-info', component: MoreInfoComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		MainComponent,
		MoreInfoComponent
	]
})
export class ProductsModule { }
