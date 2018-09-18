import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
	id: string;

	constructor(private route: ActivatedRoute) {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = params['id'];
			}
		);
	}

	ngOnInit() {}

}
