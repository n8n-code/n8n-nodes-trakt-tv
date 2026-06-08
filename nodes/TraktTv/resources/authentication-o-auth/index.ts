import type { INodeProperties } from 'n8n-workflow';

export const authenticationOAuthDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					]
				}
			},
			"options": [
				{
					"name": "Authorize Application",
					"value": "Authorize Application",
					"action": "Authorize Application",
					"description": "Construct then redirect to this URL. The Trakt website will request permissions for your app, which the user needs to approve. If the user isn't signed into Trakt, it will ask them to do so. Send `signup=true` if you prefer the account sign up page to be the default.\n\n**Note:** You should use the normal **https://trakt.tv** hostname when creating this URL and not the API URL.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/oauth/authorize"
						}
					}
				},
				{
					"name": "Revoke An Access Token",
					"value": "Revoke An Access Token",
					"action": "Revoke an access_token",
					"description": "An `access_token` can be revoked when a user signs out of their Trakt account in your app. This is not required, but might improve the user experience so the user doesn't have an unused app connection hanging around.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `token` <span style=\"color:red;\">*</a> | string | A valid OAuth `access_token`. |\n| `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |\n| `client_secret` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/oauth/revoke"
						}
					}
				},
				{
					"name": "Exchange Refresh Token For Access Token",
					"value": "Exchange Refresh Token For Access Token",
					"action": "Exchange refresh_token for access_token",
					"description": "Use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. The `access_token` is valid for 3 months before it needs to be refreshed again.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `refresh_token` <span style=\"color:red;\">*</a> | string | Saved from the initial token method. |\n| `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |\n| `client_secret` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |\n| `redirect_uri` <span style=\"color:red;\">*</a> | string | URI specified in your app settings. |\n| `grant_type` <span style=\"color:red;\">* </a> | string | `refresh_token` |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/oauth/token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /oauth/authorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Authorize Application"
					]
				}
			}
		},
		{
			"displayName": "Response Type",
			"name": "response_type",
			"required": true,
			"description": "Must be set to code.",
			"default": "code",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "response_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Authorize Application"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "client_id",
			"required": true,
			"description": "Get this from your app settings.",
			"default": " ",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "client_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Authorize Application"
					]
				}
			}
		},
		{
			"displayName": "Redirect Uri",
			"name": "redirect_uri",
			"required": true,
			"description": "URI specified in your app settings.",
			"default": " ",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "redirect_uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Authorize Application"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"description": "State variable for CSRF purposes.",
			"default": " ",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Authorize Application"
					]
				}
			}
		},
		{
			"displayName": "GET /oauth/authorize<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Authorize Application"
					]
				}
			}
		},
		{
			"displayName": "POST /oauth/revoke",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Revoke An Access Token"
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
						"Authentication O Auth"
					],
					"operation": [
						"Revoke An Access Token"
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
						"Authentication O Auth"
					],
					"operation": [
						"Revoke An Access Token"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Revoke An Access Token"
					]
				}
			}
		},
		{
			"displayName": "POST /oauth/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Exchange Refresh Token For Access Token"
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
						"Authentication O Auth"
					],
					"operation": [
						"Exchange Refresh Token For Access Token"
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
						"Authentication O Auth"
					],
					"operation": [
						"Exchange Refresh Token For Access Token"
					]
				}
			}
		},
		{
			"displayName": "Grant Type",
			"name": "grant_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "grant_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Exchange Refresh Token For Access Token"
					]
				}
			}
		},
		{
			"displayName": "Redirect Uri",
			"name": "redirect_uri",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "redirect_uri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Exchange Refresh Token For Access Token"
					]
				}
			}
		},
		{
			"displayName": "Refresh Token",
			"name": "refresh_token",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "refresh_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication O Auth"
					],
					"operation": [
						"Exchange Refresh Token For Access Token"
					]
				}
			}
		},
];
