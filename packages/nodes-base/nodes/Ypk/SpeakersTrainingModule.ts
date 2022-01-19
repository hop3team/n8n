import {
	INodeProperties
} from 'n8n-workflow';

export const speakersTrainingModuleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'speakersTrainingModule',
				],
			},
		},
		options: [
			{
				name: 'Create or Update',
				value: 'update',
				description: 'Create or update an speakersTrainingModule',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all speakersTrainingModules of a session',
			},
		/*
		{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an speakersTrainingModule',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of an speakersTrainingModule',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an speakersTrainingModule',
			},
			*/
		],
		default: 'update',
		description: 'The operation to perform.',
	},
];

const additionalFieldsSpeakersTrainingModules: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		description: `speakersTrainingModule's id`,
	},
	{
		displayName: 'Training Session ID',
		name: 'training_session_id',
		type: 'string',
		default: '',
		description: `speakersTrainingModule's training_session id`,
	},
	{
		displayName: 'Training Module ID',
		name: 'training_module_id',
		type: 'string',
		default: '',
		description: `speakersTrainingModule's training_module id`,
	},
	{
		displayName: 'Speaker ID of speakersTrainingSession',
		name: 'speaker_id',
		type: 'string',
		default: '',
		description: `speakersTrainingModule's speaker id`,
	},
	{
		displayName: 'Label',
		name: 'label',
		type: 'string',
		default: '',
		description: `speakersTrainingModule's label`,
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'dateTime',
		default: '',
		description: `speakersTrainingModule's date`,
	},
	{
		displayName: 'Begin Time',
		name: 'begin_time',
		type: 'string',
		default: '',
		description: `speakersTrainingModule's begin_time`,
	},
	{
		displayName: 'End Time',
		name: 'end_time',
		type: 'string',
		default: '',
		description: `speakersTrainingModule's end_time`,
	},
];

export const speakersTrainingModuleFields: INodeProperties[] = [
	// ----------------------------------
	//         contact:create
	// ----------------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'speakersTrainingModule',
				],
			},
		},
		default: {},
		options: [
			...additionalFieldsSpeakersTrainingModules,
		],
	},
	// ----------------------------------
	//         contact:update
	// ----------------------------------
	{
		displayName: 'speakersTrainingModule ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'speakersTrainingModule',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the speakersTrainingModule to update.',
	},
	{
		displayName: 'Update Fields',
		name: 'additionalFields',
		type: 'collection',
		description: 'The fields to update.',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'speakersTrainingModule',
				],
			},
		},
		default: {},
		options: [
			...additionalFieldsSpeakersTrainingModules,
		],
	},
	// ----------------------------------
	//         speakersTrainingModule:delete
	// ----------------------------------
	{
		displayName: 'speakersTrainingModule ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'delete',
				],
				resource: [
					'speakersTrainingModule',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the speakersTrainingModule to delete.',
	},
	// ----------------------------------
	//         speakersTrainingModule:get
	// ----------------------------------
	{
		displayName: 'speakersTrainingModule ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'speakersTrainingModule',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the speakersTrainingModule to get.',
	},
	// ----------------------------------
	//         speakersTrainingModule:getAll
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
					'speakersTrainingModule',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the speakersTrainingModule to get.',
	},
];
