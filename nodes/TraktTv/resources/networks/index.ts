import type { INodeProperties } from 'n8n-workflow';

export const networksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					]
				}
			},
			"options": [
				{
					"name": "Get Networks",
					"value": "Get Networks",
					"action": "Get networks",
					"description": "Get a list of all TV networks, including the name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Networks"
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
						"Networks"
					],
					"operation": [
						"Get Networks"
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
						"Networks"
					],
					"operation": [
						"Get Networks"
					]
				}
			}
		},
];
