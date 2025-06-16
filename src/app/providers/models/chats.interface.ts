import { Message } from '../models/message.model';

export interface messageStatus {
	thread_id: number;
	message_id: number;
	status: '' | 'sent' | 'received' | 'read';
	author_push_id: string;
}

export interface msgStatus {
	status: '' | 'sent' | 'received' | 'read';
}

export interface threadType {
	type: 'single' | 'group';
}

export interface PushData {
	user_id: string;
	identifier: number;
	alert: string;
	type: string;
	id: string;
	time: string;
	object?: Message;
}
