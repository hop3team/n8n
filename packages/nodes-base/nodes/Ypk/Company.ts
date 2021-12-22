import {
	INodeProperties,
} from 'n8n-workflow';

export const companyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'company',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a company',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a company',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of a company',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all companies',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a company',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
];

const additionalFieldsCompanies: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		description: `company's email`,
	},
	{
		displayName: 'Phone',
		name: 'phone_number',
		type: 'string',
		default: '',
		description: `company's phone`,
	},
	{
		displayName: 'Siret',
		name: 'siret',
		type: 'string',
		default: '',
		description: `company's siret`,
	},
  {
		displayName: 'Company type',
		name: 'company_type_id',
		type: 'string',
		default: '',
		description: `company's email`,
	},
  {
		displayName: 'Website',
		name: 'website',
		type: 'string',
		default: '',
		description: `company's website`,
	},
  {
		displayName: 'TVA',
		name: 'numero_tva_intracommunautaire',
		type: 'string',
		default: '',
		description: `company's tva`,
	},
  {
		displayName: 'Address Street',
		name: 'street',
		type: 'string',
		default: '',
		description: `company's address street`,
	},
  {
		displayName: 'Address ZIP Code',
		name: 'zip_code',
		type: 'string',
		default: '',
		description: `learner's address ZIP Code`,
	},
	{
		displayName: 'Address City',
		name: 'city',
		type: 'string',
		default: '',
		description: `company's address City`,
	},
	{
		displayName: 'Address Country',
		name: 'country',
		type: 'string',
		default: '',
		description: `company's address City`,
	},
	{
		displayName: 'Company category',
		name: 'company_category',
		type: 'collection',
		default: '',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'TPE/PME',
						value: 'TPE/PME',
					},
					{
						name: 'Grand compte',
						value: 'Grand compte',
					},
					{
						name: 'Public',
						value: 'Public',
					},
          {
						name: 'Collectivité territoriale',
						value: 'Collectivité territoriale',
					},
				],
				default: '',
			},
		],
		description: `companies' type`,
	},
];

export const companyFields: INodeProperties[] = [
	// ----------------------------------
	//         company:create
	// ----------------------------------
	{
		displayName: 'Raison Sociale',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'company',
				],
			},
		},
		description: 'company\'s name.',
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
					'company',
				],
			},
		},
		default: {},
		options: [
			...additionalFieldsCompanies,
		],
	},
	// ----------------------------------
	//         company:update
	// ----------------------------------
	{
		displayName: 'company ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'company',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the company to update.',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		description: 'The fields to update.',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'company',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Raison Sociale',
				name: 'name',
				type: 'string',
				default: '',
				description: 'company\'s firstname.',
			},
			...additionalFieldsCompanies,
		],
	},
	// ----------------------------------
	//         company:delete
	// ----------------------------------
	{
		displayName: 'Company ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'delete',
				],
				resource: [
					'company',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the company to delete.',
	},
	// ----------------------------------
	//         company:get
	// ----------------------------------
	{
		displayName: 'company ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'company',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the company to get.',
	},
	// ----------------------------------
	//         companies:getAll
	// ----------------------------------
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'company',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Search by name',
				name: 'search_name',
				type: 'string',
				default: '',
				description: 'Search by name',
			},
			{
				displayName: 'Search by Email',
				name: 'search_email',
				type: 'string',
				default: '',
				description: 'Search by Email',
			},
		],
	},
];
