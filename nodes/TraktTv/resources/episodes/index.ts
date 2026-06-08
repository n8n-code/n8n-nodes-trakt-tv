import type { INodeProperties } from 'n8n-workflow';

export const episodesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					]
				}
			},
			"options": [
				{
					"name": "Get A Single Episode For A Show",
					"value": "Get A Single Episode For A Show",
					"action": "Get a single episode for a show",
					"description": "#### &#10024; Extended Info\n\nReturns a single episode's details. All date and times are in UTC and were calculated using the episode's `air_date` and show's `country` and `air_time`.\n\n**Note:** If the `first_aired` is unknown, it will be set to `null`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}"
						}
					}
				},
				{
					"name": "Get All Episode Comments",
					"value": "Get All Episode Comments",
					"action": "Get all episode comments",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for an episode. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}/comments/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Lists Containing This Episode",
					"value": "Get Lists Containing This Episode",
					"action": "Get lists containing this episode",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this episode. By default, `personal` lists are returned sorted by the most `popular`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}/lists/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get All People For An Episode",
					"value": "Get All People For An Episode",
					"action": "Get all people for an episode",
					"description": "#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for an episode. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.\n\n#### Guest Stars\n\nIf you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in the episode.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}/people"
						}
					}
				},
				{
					"name": "Get Episode Ratings",
					"value": "Get Episode Ratings",
					"action": "Get episode ratings",
					"description": "Returns rating (between 0 and 10) and distribution for an episode.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}/ratings"
						}
					}
				},
				{
					"name": "Get Episode Stats",
					"value": "Get Episode Stats",
					"action": "Get episode stats",
					"description": "Returns lots of episode stats.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}/stats"
						}
					}
				},
				{
					"name": "Get All Episode Translations",
					"value": "Get All Episode Translations",
					"action": "Get all episode translations",
					"description": "Returns all translations for an episode, including language and translated values for title and overview.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}/translations/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "GET Shows Seasons Episodes Watching",
					"value": "GET Shows Seasons Episodes Watching",
					"action": "Get users watching right now",
					"description": "#### &#10024; Extended Info\n\nReturns all users watching this episode right now.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/seasons/{{$parameter[\"season\"]}}/episodes/{{$parameter[\"episode\"]}}/watching"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get A Single Episode For A Show"
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
						"Episodes"
					],
					"operation": [
						"Get A Single Episode For A Show"
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
						"Episodes"
					],
					"operation": [
						"Get A Single Episode For A Show"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get A Single Episode For A Show"
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
						"Episodes"
					],
					"operation": [
						"Get A Single Episode For A Show"
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
						"Episodes"
					],
					"operation": [
						"Get A Single Episode For A Show"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get All Episode Comments"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Comments"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Comments"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get All Episode Comments"
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
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get All Episode Comments"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Comments"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
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
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
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
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
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
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
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
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
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
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
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
						"Episodes"
					],
					"operation": [
						"Get Lists Containing This Episode"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}/people",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get All People For An Episode"
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
						"Episodes"
					],
					"operation": [
						"Get All People For An Episode"
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
						"Episodes"
					],
					"operation": [
						"Get All People For An Episode"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get All People For An Episode"
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
						"Episodes"
					],
					"operation": [
						"Get All People For An Episode"
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
						"Episodes"
					],
					"operation": [
						"Get All People For An Episode"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}/ratings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get Episode Ratings"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Ratings"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Ratings"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "12",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get Episode Ratings"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Ratings"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Ratings"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get Episode Stats"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Stats"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Stats"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get Episode Stats"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Stats"
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
						"Episodes"
					],
					"operation": [
						"Get Episode Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get All Episode Translations"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Translations"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Translations"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get All Episode Translations"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Translations"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Translations"
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
						"Episodes"
					],
					"operation": [
						"Get All Episode Translations"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/seasons/{season}/episodes/{episode}/watching",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"GET Shows Seasons Episodes Watching"
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
						"Episodes"
					],
					"operation": [
						"GET Shows Seasons Episodes Watching"
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
						"Episodes"
					],
					"operation": [
						"GET Shows Seasons Episodes Watching"
					]
				}
			}
		},
		{
			"displayName": "Episode",
			"name": "episode",
			"required": true,
			"description": "episode number",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"GET Shows Seasons Episodes Watching"
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
						"Episodes"
					],
					"operation": [
						"GET Shows Seasons Episodes Watching"
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
						"Episodes"
					],
					"operation": [
						"GET Shows Seasons Episodes Watching"
					]
				}
			}
		},
];
