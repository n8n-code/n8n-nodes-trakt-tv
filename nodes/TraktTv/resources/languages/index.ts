import type { INodeProperties } from 'n8n-workflow';

export const languagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Languages"
					]
				}
			},
			"options": [
				{
					"name": "Get Languages",
					"value": "Get Languages",
					"action": "Get languages",
					"description": "Get a list of all langauges, including names and codes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/languages/{{$parameter[\"type\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /languages/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Languages"
					],
					"operation": [
						"Get Languages"
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
						"Languages"
					],
					"operation": [
						"Get Languages"
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
						"Languages"
					],
					"operation": [
						"Get Languages"
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
						"Languages"
					],
					"operation": [
						"Get Languages"
					]
				}
			}
		},
];
