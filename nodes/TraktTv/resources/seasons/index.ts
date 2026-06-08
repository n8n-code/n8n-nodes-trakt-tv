import type { INodeProperties } from 'n8n-workflow';

export const seasonsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					]
				}
			},
			"options": [
				{
					"name": "Get All Seasons For A Show",
					"value": "Get All Seasons For A Show",
					"action": "Get all seasons for a show",
					"description": "#### &#10024; Extended Info\n\nReturns all seasons for a show including the number of episodes in each season.\n\n#### Episodes\n\nIf you add `?extended=episodes` to the URL, it will return all episodes for all seasons.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons"
						}
					}
				},
				{
					"name": "Get Single Season For A Show",
					"value": "Get Single Season For A Show",
					"action": "Get single season for a show",
					"description": "#### &#10024; Extended Info\n\nReturns all episodes for a specific season of a show.\n\n#### Translations\n\nIf you'd like to included translated episode titles and overviews in the response, include the `translations` parameter in the URL. Include all languages by setting the parameter to `all` or use a specific 2 digit country language code to further limit it.\n\n**Note:** This returns a lot of data, so please only use this parameter if you actually need it!",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}"
						}
					}
				},
				{
					"name": "Get All Season Comments",
					"value": "Get All Season Comments",
					"action": "Get all season comments",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a season. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/comments/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Lists Containing This Season",
					"value": "Get Lists Containing This Season",
					"action": "Get lists containing this season",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this season. By default, `personal` lists are returned sorted by the most `popular`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/lists/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get All People For A Season",
					"value": "Get All People For A Season",
					"action": "Get all people for a season",
					"description": "#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for a season, including the `episode_count` for which they appear. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions).. Each of those members will have a `jobs` array and a standard `person` object.\n\n#### Guest Stars\n\nIf you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the season.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/people"
						}
					}
				},
				{
					"name": "Get Season Ratings",
					"value": "Get Season Ratings",
					"action": "Get season ratings",
					"description": "Returns rating (between 0 and 10) and distribution for a season.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/ratings"
						}
					}
				},
				{
					"name": "Get Season Stats",
					"value": "Get Season Stats",
					"action": "Get season stats",
					"description": "Returns lots of season stats.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/stats"
						}
					}
				},
				{
					"name": "Get All Season Translations",
					"value": "Get All Season Translations",
					"action": "Get all season translations",
					"description": "Returns all translations for an season, including language and translated values for title and overview.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/translations/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "GET Shows Seasons Watching",
					"value": "GET Shows Seasons Watching",
					"action": "Get users watching right now",
					"description": "#### &#10024; Extended Info\n\nReturns all users watching this season right now.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/watching"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shows/{id}/seasons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Seasons For A Show"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Seasons For A Show"
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
						"Seasons"
					],
					"operation": [
						"Get All Seasons For A Show"
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
						"Seasons"
					],
					"operation": [
						"Get All Seasons For A Show"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Single Season For A Show"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Single Season For A Show"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Single Season For A Show"
					]
				}
			}
		},
		{
			"displayName": "Translations",
			"name": "translations",
			"description": "include episode translations",
			"default": "es",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "translations",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Single Season For A Show"
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
						"Seasons"
					],
					"operation": [
						"Get Single Season For A Show"
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
						"Seasons"
					],
					"operation": [
						"Get Single Season For A Show"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/comments/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Comments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Comments"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Comments"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"required": true,
			"description": "how to sort",
			"default": "newest",
			"type": "options",
			"options": [
				{
					"name": "Newest",
					"value": "newest"
				},
				{
					"name": "Oldest",
					"value": "oldest"
				},
				{
					"name": "Likes",
					"value": "likes"
				},
				{
					"name": "Replies",
					"value": "replies"
				},
				{
					"name": "Highest",
					"value": "highest"
				},
				{
					"name": "Lowest",
					"value": "lowest"
				},
				{
					"name": "Plays",
					"value": "plays"
				},
				{
					"name": "Watched",
					"value": "watched"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Comments"
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
						"Seasons"
					],
					"operation": [
						"Get All Season Comments"
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
						"Seasons"
					],
					"operation": [
						"Get All Season Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/lists/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Lists Containing This Season"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Lists Containing This Season"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Lists Containing This Season"
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
				},
				{
					"name": "Watchlists",
					"value": "watchlists"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Lists Containing This Season"
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
						"Seasons"
					],
					"operation": [
						"Get Lists Containing This Season"
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
						"Seasons"
					],
					"operation": [
						"Get Lists Containing This Season"
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
						"Seasons"
					],
					"operation": [
						"Get Lists Containing This Season"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/people",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All People For A Season"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All People For A Season"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All People For A Season"
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
						"Seasons"
					],
					"operation": [
						"Get All People For A Season"
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
						"Seasons"
					],
					"operation": [
						"Get All People For A Season"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/ratings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Season Ratings"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Season Ratings"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Season Ratings"
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
						"Seasons"
					],
					"operation": [
						"Get Season Ratings"
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
						"Seasons"
					],
					"operation": [
						"Get Season Ratings"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Season Stats"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Season Stats"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get Season Stats"
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
						"Seasons"
					],
					"operation": [
						"Get Season Stats"
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
						"Seasons"
					],
					"operation": [
						"Get Season Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/translations/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Translations"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Translations"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Translations"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"required": true,
			"description": "2 character language code",
			"default": "es",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"Get All Season Translations"
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
						"Seasons"
					],
					"operation": [
						"Get All Season Translations"
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
						"Seasons"
					],
					"operation": [
						"Get All Season Translations"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/watching",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"GET Shows Seasons Watching"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "game-of-thrones",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"GET Shows Seasons Watching"
					]
				}
			}
		},
		{
			"displayName": "Season",
			"name": "season",
			"required": true,
			"description": "season number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Seasons"
					],
					"operation": [
						"GET Shows Seasons Watching"
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
						"Seasons"
					],
					"operation": [
						"GET Shows Seasons Watching"
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
						"Seasons"
					],
					"operation": [
						"GET Shows Seasons Watching"
					]
				}
			}
		},
];
