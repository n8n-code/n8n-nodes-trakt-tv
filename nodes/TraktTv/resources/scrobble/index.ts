import type { INodeProperties } from 'n8n-workflow';

export const scrobbleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Scrobble"
					]
				}
			},
			"options": [
				{
					"name": "Pause Watching In A Media Center",
					"value": "Pause Watching In A Media Center",
					"action": "Pause watching in a media center",
					"description": "#### &#128274; OAuth Required\n\nUse this method when the video is paused. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position. Unpause a video by calling the [**/scrobble/start**](/reference/scrobble/start/) method again.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `progress` <span style=\"color:red;\">*</a> | float | Progress percentage between 0 and 100. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scrobble/pause"
						}
					}
				},
				{
					"name": "Start Watching In A Media Center",
					"value": "Start Watching In A Media Center",
					"action": "Start watching in a media center",
					"description": "#### &#128274; OAuth Required\n\nUse this method when the video initially starts playing or is unpaused. This will remove any playback progress if it exists.\n\n**Note:** A watching status will auto expire after the remaining runtime has elapsed. There is no need to call this method again while continuing to watch the same item.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `progress` <span style=\"color:red;\">*</a> | float | Progress percentage between 0 and 100. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scrobble/start"
						}
					}
				},
				{
					"name": "Stop Or Finish Watching In A Media Center",
					"value": "Stop Or Finish Watching In A Media Center",
					"action": "Stop or finish watching in a media center",
					"description": "#### &#128274; OAuth Required\n\nUse this method when the video is stopped or finishes playing on its own. If the progress is above 80%, the video will be scrobbled and the `action` will be set to **scrobble**. A unique history `id` (64-bit integer) will be returned and can be used to reference this `scrobble` directly.\n\nIf the progress is less than 80%, it will be treated as a *pause* and the `action` will be set to **pause**. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position.\n\n**Note:** If you prefer to use a threshold higher than 80%, you should use [**/scrobble/pause**](/reference/scrobble/pause/) yourself so it doesn't create duplicate scrobbles.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `progress` <span style=\"color:red;\">*</a> | flloat | Progress percentage between 0 and 100. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |\n\n**Note:** If the same item was just scrobbled, a `409` HTTP status code will returned to avoid scrobbling a duplicate. The response will contain a `watched_at` timestamp when the item was last scrobbled and a `expires_at` timestamp when the item can be scrobbled again.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scrobble/stop"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /scrobble/pause",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scrobble"
					],
					"operation": [
						"Pause Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Pause Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Pause Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Pause Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Pause Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Pause Watching In A Media Center"
					]
				}
			}
		},
		{
			"displayName": "Progress",
			"name": "progress",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scrobble"
					],
					"operation": [
						"Pause Watching In A Media Center"
					]
				}
			}
		},
		{
			"displayName": "POST /scrobble/start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scrobble"
					],
					"operation": [
						"Start Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Start Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Start Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Start Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Start Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Start Watching In A Media Center"
					]
				}
			}
		},
		{
			"displayName": "Progress",
			"name": "progress",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scrobble"
					],
					"operation": [
						"Start Watching In A Media Center"
					]
				}
			}
		},
		{
			"displayName": "POST /scrobble/stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scrobble"
					],
					"operation": [
						"Stop Or Finish Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Stop Or Finish Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Stop Or Finish Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Stop Or Finish Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Stop Or Finish Watching In A Media Center"
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
						"Scrobble"
					],
					"operation": [
						"Stop Or Finish Watching In A Media Center"
					]
				}
			}
		},
		{
			"displayName": "Progress",
			"name": "progress",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scrobble"
					],
					"operation": [
						"Stop Or Finish Watching In A Media Center"
					]
				}
			}
		},
];
