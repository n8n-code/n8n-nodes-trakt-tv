import type { INodeProperties } from 'n8n-workflow';

export const peopleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					]
				}
			},
			"options": [
				{
					"name": "Get Recently Updated People Trakt I Ds",
					"value": "Get Recently Updated People Trakt I Ds",
					"action": "Get recently updated people Trakt IDs",
					"description": "#### &#128196; Pagination\n\nReturns all people Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/people/updates/id/{{$parameter[\"start_date\"]}}"
						}
					}
				},
				{
					"name": "Get Recently Updated People",
					"value": "Get Recently Updated People",
					"action": "Get recently updated people",
					"description": "#### &#128196; Pagination &#10024; Extended Info\n\nReturns all people updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/people/updates/{{$parameter[\"start_date\"]}}"
						}
					}
				},
				{
					"name": "Get A Single Person",
					"value": "Get A Single Person",
					"action": "Get a single person",
					"description": "#### &#10024; Extended Info\n\nReturns a single person's details.\n\n#### Gender\n\nIf available, the `gender` property will be set to `male`, `female`, or `non_binary`.\n\n#### Known For Department\n\nIf available, the `known_for_department` property will be set to `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, or `editing`. Many people have credits across departments, `known_for` allows you to select their default credits more accurately.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/people/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Lists Containing This Person",
					"value": "Get Lists Containing This Person",
					"action": "Get lists containing this person",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this person. By default, `personal` lists are returned sorted by the most `popular`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/people/{{$parameter[\"id\"]}}/lists/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Movie Credits",
					"value": "Get Movie Credits",
					"action": "Get movie credits",
					"description": "#### &#10024; Extended Info\n\nReturns all movies where this person is in the `cast` or `crew`. Each `cast` object will have a `characters` array and a standard `movie` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `movie` object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/people/{{$parameter[\"id\"]}}/movies"
						}
					}
				},
				{
					"name": "Get Show Credits",
					"value": "Get Show Credits",
					"action": "Get show credits",
					"description": "#### &#10024; Extended Info\n\nReturns all shows where this person is in the `cast` or `crew`, including the `episode_count` for which they appear. Each `cast` object will have a `characters` array and a standard `show` object. If `series_regular` is `true`, this person is a series regular and not simply a guest star.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `show` object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/people/{{$parameter[\"id\"]}}/shows"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /people/updates/id/{start_date}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Recently Updated People Trakt I Ds"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Updated since this date and time.",
			"default": "2020-11-27T00:00:00Z",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Recently Updated People Trakt I Ds"
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
						"People"
					],
					"operation": [
						"Get Recently Updated People Trakt I Ds"
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
						"People"
					],
					"operation": [
						"Get Recently Updated People Trakt I Ds"
					]
				}
			}
		},
		{
			"displayName": "GET /people/updates/{start_date}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Recently Updated People"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Updated since this date and time.",
			"default": "2020-11-27T00:00:00Z",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Recently Updated People"
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
						"People"
					],
					"operation": [
						"Get Recently Updated People"
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
						"People"
					],
					"operation": [
						"Get Recently Updated People"
					]
				}
			}
		},
		{
			"displayName": "GET /people/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get A Single Person"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "bryan-cranston",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get A Single Person"
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
						"People"
					],
					"operation": [
						"Get A Single Person"
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
						"People"
					],
					"operation": [
						"Get A Single Person"
					]
				}
			}
		},
		{
			"displayName": "GET /people/{id}/lists/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Lists Containing This Person"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "bryan-cranston",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Lists Containing This Person"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Filter for a specific list type",
			"default": "personal",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Personal",
					"value": "personal"
				},
				{
					"name": "Official",
					"value": "official"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Lists Containing This Person"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"required": true,
			"description": "How to sort",
			"default": "popular",
			"type": "options",
			"options": [
				{
					"name": "Popular",
					"value": "popular"
				},
				{
					"name": "Likes",
					"value": "likes"
				},
				{
					"name": "Comments",
					"value": "comments"
				},
				{
					"name": "Items",
					"value": "items"
				},
				{
					"name": "Added",
					"value": "added"
				},
				{
					"name": "Updated",
					"value": "updated"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Lists Containing This Person"
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
						"People"
					],
					"operation": [
						"Get Lists Containing This Person"
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
						"People"
					],
					"operation": [
						"Get Lists Containing This Person"
					]
				}
			}
		},
		{
			"displayName": "GET /people/{id}/movies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Movie Credits"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "bryan-cranston",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Movie Credits"
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
						"People"
					],
					"operation": [
						"Get Movie Credits"
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
						"People"
					],
					"operation": [
						"Get Movie Credits"
					]
				}
			}
		},
		{
			"displayName": "GET /people/{id}/shows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Show Credits"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "bryan-cranston",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"People"
					],
					"operation": [
						"Get Show Credits"
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
						"People"
					],
					"operation": [
						"Get Show Credits"
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
						"People"
					],
					"operation": [
						"Get Show Credits"
					]
				}
			}
		},
];
