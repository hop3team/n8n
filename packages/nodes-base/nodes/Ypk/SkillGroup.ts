import {
	INodeProperties
} from 'n8n-workflow';

export const skillGroupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'skillGroup',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all skillGroups of a session',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
];


export const skillGroupFields: INodeProperties[] = [
	// ----------------------------------
	//         skillGroup:getAll
	// ----------------------------------
	{
		displayName: 'Training ID',
		name: 'training_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'skillGroup',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the skillGroup to get.',
	},
];
