import type { INodeProperties } from 'n8n-workflow';

export const calendarsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					]
				}
			},
			"options": [
				{
					"name": "GET Calendars All Dvd",
					"value": "GET Calendars All Dvd",
					"action": "Get DVD releases",
					"description": "#### &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a DVD release date during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/all/dvd/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "GET Calendars All Movies",
					"value": "GET Calendars All Movies",
					"action": "Get movies",
					"description": "#### &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a release date during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/all/movies/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "GET Calendars All Shows New",
					"value": "GET Calendars All Shows New",
					"action": "Get new shows",
					"description": "#### &#10024; Extended Info &#127898; Filters\n\nReturns all new show premieres (season 1, episode 1) airing during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/all/shows/new/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "GET Calendars All Shows Premieres",
					"value": "GET Calendars All Shows Premieres",
					"action": "Get season premieres",
					"description": "#### &#10024; Extended Info &#127898; Filters\n\nReturns all show premieres (any season, episode 1) airing during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/all/shows/premieres/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "GET Calendars All Shows",
					"value": "GET Calendars All Shows",
					"action": "Get shows",
					"description": "#### &#10024; Extended Info &#127898; Filters\n\nReturns all shows airing during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/all/shows/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "Get DVD Releases",
					"value": "Get DVD Releases",
					"action": "Get DVD releases",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a DVD release date during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/my/dvd/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "Get Movies",
					"value": "Get Movies",
					"action": "Get movies",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a release date during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/my/movies/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "Get New Shows",
					"value": "Get New Shows",
					"action": "Get new shows",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all new show premieres (season 1, episode 1) airing during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/my/shows/new/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "Get Season Premieres",
					"value": "Get Season Premieres",
					"action": "Get season premieres",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all show premieres (any season, episode 1) airing during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/my/shows/premieres/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				},
				{
					"name": "Get Shows",
					"value": "Get Shows",
					"action": "Get shows",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all shows airing during the time period specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calendars/my/shows/{{$parameter[\"start_date\"]}}/{{$parameter[\"days\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /calendars/all/dvd/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Dvd"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Dvd"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Dvd"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Dvd"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Dvd"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/all/movies/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Movies"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Movies"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Movies"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Movies"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/all/shows/new/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows New"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows New"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows New"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows New"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows New"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/all/shows/premieres/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows Premieres"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows Premieres"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows Premieres"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows Premieres"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows Premieres"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/all/shows/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows"
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
						"Calendars"
					],
					"operation": [
						"GET Calendars All Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/my/dvd/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get DVD Releases"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get DVD Releases"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get DVD Releases"
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
						"Calendars"
					],
					"operation": [
						"Get DVD Releases"
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
						"Calendars"
					],
					"operation": [
						"Get DVD Releases"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/my/movies/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Movies"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Movies"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Movies"
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
						"Calendars"
					],
					"operation": [
						"Get Movies"
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
						"Calendars"
					],
					"operation": [
						"Get Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/my/shows/new/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get New Shows"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get New Shows"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get New Shows"
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
						"Calendars"
					],
					"operation": [
						"Get New Shows"
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
						"Calendars"
					],
					"operation": [
						"Get New Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/my/shows/premieres/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Season Premieres"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Season Premieres"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Season Premieres"
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
						"Calendars"
					],
					"operation": [
						"Get Season Premieres"
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
						"Calendars"
					],
					"operation": [
						"Get Season Premieres"
					]
				}
			}
		},
		{
			"displayName": "GET /calendars/my/shows/{start_date}/{days}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Shows"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start the calendar on this date.",
			"default": "2014-09-01",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Shows"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"required": true,
			"description": "Number of days to display.",
			"default": "7",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Calendars"
					],
					"operation": [
						"Get Shows"
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
						"Calendars"
					],
					"operation": [
						"Get Shows"
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
						"Calendars"
					],
					"operation": [
						"Get Shows"
					]
				}
			}
		},
];
