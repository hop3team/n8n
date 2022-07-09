import {
	INodeProperties
} from 'n8n-workflow';

export const courseOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'course',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an course',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all courses of a session',
			},
		{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an course',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of an course',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an course',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
];

const additionalFieldsCourses: INodeProperties[] = [
	{
		displayName: 'Training Module ID',
		name: 'training_module_id',
		type: 'string',
		default: '',
		description: `course's training_module id`,
	},
	{
		displayName: 'ID of speakersTrainingSession',
		name: 'speakers_training_session_id',
		type: 'string',
		default: '',
		description: `course's speakersTrainingSession id`,
	},
	{
		displayName: 'Group id',
		name: 'group_id',
		type: 'string',
		default: '',
		description: `course's group id`,
	},
	{
		displayName: 'Label',
		name: 'label',
		type: 'string',
		default: '',
		description: `course's label`,
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'dateTime',
		default: '',
		description: `course's date`,
	},
	{
		displayName: 'Begin Time',
		name: 'begin_time',
		type: 'string',
		default: '',
		description: `course's begin_time`,
	},
	{
		displayName: 'End Time',
		name: 'end_time',
		type: 'string',
		default: '',
		description: `course's end_time`,
	},
];

export const courseFields: INodeProperties[] = [
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
					'create',
				],
				resource: [
					'course',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the course to get.',
	},
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
					'course',
				],
			},
		},
		default: {},
		options: [
			...additionalFieldsCourses,
		],
	},
	// ----------------------------------
	//         contact:update
	// ----------------------------------
	{
		displayName: 'course ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'course',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the course to update.',
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
					'course',
				],
			},
		},
		default: {},
		options: [
			...additionalFieldsCourses,
		],
	},
	// ----------------------------------
	//         course:delete
	// ----------------------------------
	{
		displayName: 'course ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'delete',
				],
				resource: [
					'course',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the course to delete.',
	},
	// ----------------------------------
	//         course:get
	// ----------------------------------
	{
		displayName: 'course ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'course',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the course to get.',
	},
	// ----------------------------------
	//         course:getAll
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
					'course',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the course to get.',
	},
];
