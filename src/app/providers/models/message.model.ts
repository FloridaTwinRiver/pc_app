/**
 * Message reprsents one message being sent in a Thread
 */

export class Message {
	id: number;
	thread_id: number;
	thread_name: string;
	thread_type: 'single' | 'group';
	sentAt: '' | Date;
	status: '' | 'sent' | 'received' | 'read';
	author: string;
	author_push_id: string; // It will be used to know if it is incoming or not
	text: string;
	type: '' | 'text' | 'file' | 'image' | 'voice' | 'custom';
	customObject?: CustomObject;
	incoming: boolean;
	duration?: number;
	base64?: string;

	/** 0: Not loaded, 1: being loaded, 2: loaded */
	base64_loaded?: 0 | 1 | 2;
	showTime: boolean;

	constructor(obj?: any) {
		this.id = obj?.id || null;
		this.thread_id = obj?.thread_id || null;
		this.thread_name = obj?.thread_name || '';
		this.thread_type = obj?.thread_type || null;
		this.sentAt = obj?.sentAt || new Date();
		this.status = obj?.status || 'sent';
		this.author = obj?.author || null;
		this.author_push_id = obj?.author_push_id || null;
		this.text = obj?.text || '';
		this.type = obj?.type || null;
		this.customObject = obj?.customObject || null;
		this.incoming = obj?.incoming || false;
		this.duration = obj?.duration || 0;
		this.base64 = obj?.base64 || '';
		this.showTime = obj?.showTime || false;
	}
}

export interface ListDiscussions {
	[employee_push_id: string]: [Message];
}

export interface CustomObject {
	type: string;
	id: string;
	content: string;
}

export type CustomType = 'sp' | 'asset' | 'wo' | '';
