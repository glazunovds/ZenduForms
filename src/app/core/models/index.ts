export interface ISubmission {
	taskName: string;
	status: SubmissionStatus;
	emailFrom: string;
	emailTo: string;
	customerAddress: string;
	dueDate: number;
}

export enum SubmissionStatus {
	low = 'low',
	uncompleted = 'uncompleted',
	unassigned = 'unassigned',
}

export interface IAddress {
	full_address: string;
}
