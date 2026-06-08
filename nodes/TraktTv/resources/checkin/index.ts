import type { INodeProperties } from 'n8n-workflow';

export const checkinDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					]
				}
			},
			"options": [
				{
					"name": "Delete Any Active Checkins",
					"value": "Delete Any Active Checkins",
					"action": "Delete any active checkins",
					"description": "#### &#128274; OAuth Required\n\nRemoves any active checkins, no need to provide a specific item.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/checkin"
						}
					}
				},
				{
					"name": "Check Into An Item",
					"value": "Check Into An Item",
					"action": "Check into an item",
					"description": "#### &#128274; OAuth Required\n\nCheck into a movie or episode. This should be tied to a user action to manually indicate they are watching something. The item will display as *watching* on the site, then automatically switch to *watched* status once the duration has elapsed. A unique history `id` (64-bit integer) will be returned and can be used to reference this checkin directly.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `sharing`  | object | Control sharing to any connected social networks. (see below &#8595;) |\n| `message`  | string | Message used for sharing. If not sent, it will use the watching string in the user settings. |\n| `venue_id` | string | Foursquare venue ID. |\n| `venue_name` | string | Foursquare venue name. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |\n\n#### Sharing\n\nThe `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.\n\n| Key | Type |\n|---|---|\n| `twitter` | boolean |\n| `tumblr` | boolean |\n\n**Note:** If a checkin is already in progress, a `409` HTTP status code will returned. The response will contain an `expires_at` timestamp which is when the user can check in again.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/checkin"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /checkin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					],
					"operation": [
						"Delete Any Active Checkins"
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
						"Checkin"
					],
					"operation": [
						"Delete Any Active Checkins"
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
						"Checkin"
					],
					"operation": [
						"Delete Any Active Checkins"
					]
				}
			}
		},
		{
			"displayName": "POST /checkin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
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
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
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
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
					]
				}
			}
		},
		{
			"displayName": "App Date",
			"name": "app_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "app_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
					]
				}
			}
		},
		{
			"displayName": "App Version",
			"name": "app_version",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "app_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
					]
				}
			}
		},
		{
			"displayName": "Movie",
			"name": "movie",
			"type": "json",
			"default": "{\n  \"ids\": {}\n}",
			"routing": {
				"send": {
					"property": "movie",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
					]
				}
			}
		},
		{
			"displayName": "Sharing",
			"name": "sharing",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sharing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkin"
					],
					"operation": [
						"Check Into An Item"
					]
				}
			}
		},
];
