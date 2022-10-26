import { Injectable } from '@angular/core';
import { Moment } from 'moment';

@Injectable({
	providedIn: 'root',
})
export class FilterService {
	private filter: Filter = {
		search: '',
		form: '',
		status: '',
		date: null,
	};

	public getFilter(): Filter {
		return this.filter;
	}

	public setFilter(filter: Filter) {
		this.filter = Object.assign({}, this.filter, filter);
	}

	constructor() {}
}

export interface Filter {
	search: string;
	form: string;
	status: string;
	date: Moment | null;
}
