import type { INodeProperties } from 'n8n-workflow';

export const certificationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Certifications"
					]
				}
			},
			"options": [
				{
					"name": "Get Certifications",
					"value": "Get Certifications",
					"action": "Get certifications",
					"description": "Get a list of all certifications, including names, slugs, and descriptions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certifications/{{$parameter[\"type\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /certifications/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certifications"
					],
					"operation": [
						"Get Certifications"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "movies",
			"type": "options",
			"options": [
				{
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Shows",
					"value": "shows"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Certifications"
					],
					"operation": [
						"Get Certifications"
					]
				}
			}
		},
		{
			"displayName": "Trakt Api Version",
			"name": "trakt-api-version",
			"description": "e.g. 2",
			"default": "2",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"trakt-api-version": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Certifications"
					],
					"operation": [
						"Get Certifications"
					]
				}
			}
		},
		{
			"displayName": "Trakt Api Key",
			"name": "trakt-api-key",
			"description": "e.g. [client_id]",
			"default": "[client_id]",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"trakt-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Certifications"
					],
					"operation": [
						"Get Certifications"
					]
				}
			}
		},
];
