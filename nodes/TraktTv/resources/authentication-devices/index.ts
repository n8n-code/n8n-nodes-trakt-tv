import type { INodeProperties } from 'n8n-workflow';

export const authenticationDevicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Devices"
					]
				}
			},
			"options": [
				{
					"name": "Generate New Device Codes",
					"value": "Generate New Device Codes",
					"action": "Generate new device codes",
					"description": "Generate new codes to start the device authentication process. The `device_code` and `interval` will be used later to poll for the `access_token`. The `user_code` and `verification_url` should be presented to the user as mentioned in the flow steps above.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/oauth/device/code"
						}
					}
				},
				{
					"name": "Poll For The Access Token",
					"value": "Poll For The Access Token",
					"action": "Poll for the access_token",
					"description": "Use the `device_code` and poll at the `interval` (in seconds) to check if the user has authorized you app. Use `expires_in` to stop polling after that many seconds, and gracefully instruct the user to restart the process. **It is important to poll at the correct interval and also stop polling when expired.**\n\nWhen you receive a `200` success response, save the `access_token` so your app can authenticate the user in methods that require it. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. Check below for all the error codes that you should handle.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `code` <span style=\"color:red;\">*</a> | string | `device_code` from the initial method. |\n| `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |\n| `client_secret` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |\n\n####  Status Codes\n\nThis method will send various HTTP status codes that you should handle accordingly.\n\n| Code | Description |\n|---|---|\n| `200` | Success - *save the `access_token`*\n| `400` | Pending - *waiting for the user to authorize your app*\n| `404` | Not Found - *invalid `device_code`*\n| `409` | Already Used - *user already approved this code*\n| `410` | Expired - *the tokens have expired, restart the process*\n| `418` | Denied - *user explicitly denied this code*\n| `429` | Slow Down - *your app is polling too quickly*",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/oauth/device/token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /oauth/device/code",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Devices"
					],
					"operation": [
						"Generate New Device Codes"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "client_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "client_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Devices"
					],
					"operation": [
						"Generate New Device Codes"
					]
				}
			}
		},
		{
			"displayName": "POST /oauth/device/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Devices"
					],
					"operation": [
						"Poll For The Access Token"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "client_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "client_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Devices"
					],
					"operation": [
						"Poll For The Access Token"
					]
				}
			}
		},
		{
			"displayName": "Client Secret",
			"name": "client_secret",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "client_secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Devices"
					],
					"operation": [
						"Poll For The Access Token"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Devices"
					],
					"operation": [
						"Poll For The Access Token"
					]
				}
			}
		},
];
