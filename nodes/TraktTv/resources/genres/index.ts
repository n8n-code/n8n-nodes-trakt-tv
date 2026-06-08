import type { INodeProperties } from 'n8n-workflow';

export const genresDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Genres"
					]
				}
			},
			"options": [
				{
					"name": "Get Genres",
					"value": "Get Genres",
					"action": "Get genres",
					"description": "Get a list of all genres, including names and slugs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/genres/{{$parameter[\"type\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /genres/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genres"
					],
					"operation": [
						"Get Genres"
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
						"Genres"
					],
					"operation": [
						"Get Genres"
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
						"Genres"
					],
					"operation": [
						"Get Genres"
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
						"Genres"
					],
					"operation": [
						"Get Genres"
					]
				}
			}
		},
];
