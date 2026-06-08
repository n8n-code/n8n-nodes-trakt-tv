import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "Get ID Lookup Results",
					"value": "Get ID Lookup Results",
					"action": "Get ID lookup results",
					"description": "#### &#128196; Pagination &#10024; Extended Info\n\nLookup items by their Trakt, IMDB, TMDB, or TVDB ID. If you use the search url without a `type` it might return multiple items if the `id_type` is not globally unique. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.\n\n| Type | URL |\n|---|---|\n| `trakt` | `/search/trakt/:id` |\n|  | `/search/trakt/:id?type=movie` |\n|  | `/search/trakt/:id?type=show` |\n|  | `/search/trakt/:id?type=episode` |\n|  | `/search/trakt/:id?type=person` |\n| `imdb` | `/search/imdb/:id` |\n| `tmdb` | `/search/tmdb/:id` |\n|  | `/search/tmdb/:id?type=movie` |\n|  | `/search/tmdb/:id?type=show` |\n|  | `/search/tmdb/:id?type=episode` |\n|  | `/search/tmdb/:id?type=person` |\n| `tvdb` | `/search/tvdb/:id` |\n|  | `/search/tvdb/:id?type=show` |\n|  | `/search/tvdb/:id?type=episode` |",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/{{$parameter[\"id_type\"]}}/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Text Query Results",
					"value": "Get Text Query Results",
					"action": "Get text query results",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nSearch all text fields that a media object contains (i.e. title, overview, etc). Results are ordered by the most relevant score. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.\n\n#### Special Characters\n\nOur search engine (Solr) gives the following characters special meaning when they appear in a query:\n\n`+ - && || ! ( ) { } [ ] ^ \" ~ * ? : /`\n\nTo interpret any of these characters literally (and not as a special character), precede the character with a backslash `\\` character.\n\n#### Search Fields\n\nBy default, all text fields are used to search for the `query`. You can optionally specify the `fields` parameter with a single value or comma delimited string for multiple fields. Each `type` has specific `fields` that can be specified. This can be useful if you want to support more strict searches (i.e. title only).\n\n| Type | Field |\n|---|---|\n| `movie` | `title` |\n|  | `tagline` |\n|  | `overview` |\n|  | `people` |\n|  | `translations` |\n|  | `aliases` |\n| `show` | `title` |\n|  | `overview` |\n|  | `people` |\n|  | `translations` |\n|  | `aliases` |\n| `episode` | `title` |\n|  | `overview` |\n| `person` | `name` |\n|  | `biography` |\n| `list` | `name` |\n|  | `description` |",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/{{$parameter[\"type\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search/{id_type}/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get ID Lookup Results"
					]
				}
			}
		},
		{
			"displayName": "Id Type",
			"name": "id_type",
			"required": true,
			"description": "Type of ID to lookup.",
			"default": "imdb",
			"type": "options",
			"options": [
				{
					"name": "Trakt",
					"value": "trakt"
				},
				{
					"name": "Imdb",
					"value": "imdb"
				},
				{
					"name": "Tmdb",
					"value": "tmdb"
				},
				{
					"name": "Tvdb",
					"value": "tvdb"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get ID Lookup Results"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID that matches with the type.",
			"default": "tt0848228",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get ID Lookup Results"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Search type.",
			"default": "movie",
			"type": "options",
			"options": [
				{
					"name": "Movie",
					"value": "movie"
				},
				{
					"name": "Show",
					"value": "show"
				},
				{
					"name": "Episode",
					"value": "episode"
				},
				{
					"name": "Person",
					"value": "person"
				},
				{
					"name": "List",
					"value": "list"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get ID Lookup Results"
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
						"Search"
					],
					"operation": [
						"Get ID Lookup Results"
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
						"Search"
					],
					"operation": [
						"Get ID Lookup Results"
					]
				}
			}
		},
		{
			"displayName": "GET /search/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Text Query Results"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Search type.",
			"default": "movie",
			"type": "options",
			"options": [
				{
					"name": "Movie",
					"value": "movie"
				},
				{
					"name": "Show",
					"value": "show"
				},
				{
					"name": "Episode",
					"value": "episode"
				},
				{
					"name": "Person",
					"value": "person"
				},
				{
					"name": "List",
					"value": "list"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Text Query Results"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Search all text based fields.",
			"default": "tron",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Text Query Results"
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
						"Search"
					],
					"operation": [
						"Get Text Query Results"
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
						"Search"
					],
					"operation": [
						"Get Text Query Results"
					]
				}
			}
		},
		{
			"displayName": "GET /search/{type}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Text Query Results"
					]
				}
			}
		},
];
