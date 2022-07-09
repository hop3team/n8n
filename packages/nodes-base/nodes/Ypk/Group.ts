import { INodeProperties } from 'n8n-workflow';

export const groupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'group',
				],
			},
		},
		options: [

			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all groups of a session',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
];


export const groupFields: INodeProperties[] = [
	// ----------------------------------
	//         contact:create
	// ----------------------------------
	{
		displayName: 'Training Session ID',
		name: 'training_session_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'group',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the group to update.',
	},
];
