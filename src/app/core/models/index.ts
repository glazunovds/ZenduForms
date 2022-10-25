export interface ISubmission {
	id: string;
	taskName: string;
	status: SubmissionStatus;
	emailFrom: string;
	emailTo: string;
	customerAddress: string;
	dueDateRaw: number;
	dueDateShow: string;
}

export enum SubmissionStatus {
	low = 'low',
	uncompleted = 'uncompleted',
	unassigned = 'unassigned',
}

export interface IAddress {
	full_address: string;
}
