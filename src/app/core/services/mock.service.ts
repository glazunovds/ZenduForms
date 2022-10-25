import { Injectable } from '@angular/core';
import { IAddress, ISubmission, SubmissionStatus } from '../models';
import { first, map, Observable, timeout } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as uuid from 'uuid';

@Injectable({
	providedIn: 'root',
})
export class MockService {
	private mockData: ISubmission[] = [];

	constructor(private http: HttpClient) {}

	public getMockData(count: number): Observable<ISubmission[]> {
		return this.generateMockData(count).pipe(timeout(2000));
	}

	public getSavedMockData(): ISubmission[] {
		return this.mockData;
	}

	private getRandomDateTime(): number {
		// 0 - 30 days in the past
		const days = Math.floor(Math.random() * 30);
		// 0 - 23 hours
		const hours = Math.floor(Math.random() * 24);
		// 0 - 59 minutes
		const minutes = Math.floor(Math.random() * 60);
		return (
			new Date().getTime() -
			days * 24 * 60 * 60 * 1000 -
			hours * 60 * 60 * 1000 -
			minutes * 60 * 1000
		);
	}

	private generateMockData(count: number): Observable<ISubmission[]> {
		return this.getRandomAddress(count).pipe(
			first(),
			map((addresses) => {
				const keys = Object.keys(SubmissionStatus);
				const result = addresses.map((address, index) => {
					const randomStatus = keys[
						Math.floor(Math.random() * keys.length)
					] as SubmissionStatus;
					const randomDate = this.getRandomDateTime();
					return {
						id: uuid.v4(),
						taskName: 'Work Flow: Requires Location',
						status: randomStatus,
						emailFrom: 'zendu@zendu.com',
						emailTo: 'tracy@zendu.com',
						customerAddress: address,
						dueDateRaw: randomDate,
						dueDateShow: new Date(randomDate).toLocaleString(),
					};
				});
				this.mockData = result;
				return result;
			}),
		);
	}

	private getRandomAddress(size: number): Observable<string[]> {
		return this.http
			.get<IAddress[]>(`https://random-data-api.com/api/address/random_address?size=${size}`)
			.pipe(map((addresses) => addresses.map((address) => address.full_address)));
	}
}
