import { Injectable } from '@angular/core';
import { IAddress, ISubmission, SubmissionStatus } from '../models';
import { first, map, Observable, of, timeout } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class MockService {
	constructor(private http: HttpClient) {}

	public getMockData(count: number): Observable<ISubmission[]> {
		return of(this.generateMockData(count)).pipe(timeout(2000));
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

	private generateMockData(count: number): ISubmission[] {
		const data: ISubmission[] = [];
		this.getRandomAddress(count)
			.pipe(first())
			.subscribe((addresses) => {
				const keys = Object.keys(SubmissionStatus);
				const randomStatus = keys[
					Math.floor(Math.random() * keys.length)
				] as SubmissionStatus;
				for (let i = 0; i < count; i++) {
					data.push({
						taskName: 'Work Flow: Requires Location',
						status: randomStatus,
						emailFrom: 'zendu@zendu.com',
						emailTo: 'tracy@zendu.com',
						customerAddress: addresses[i],
						dueDate: this.getRandomDateTime(),
					});
				}
			});
		return data;
	}

	private getRandomAddress(size: number): Observable<string[]> {
		return this.http
			.get<IAddress[]>(`https://random-data-api.com/api/address/random_address?size=${size}`)
			.pipe(map((addresses) => addresses.map((address) => address.full_address)));
	}
}
