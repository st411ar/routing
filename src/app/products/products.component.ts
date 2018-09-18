import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

	constructor(
			private route: ActivatedRoute,
			private router: Router
	) {}

	ngOnInit() {}


	goToProduct(id: string): void {
		this.router.navigate(['./product'], { relativeTo: this.route });
	}
}
