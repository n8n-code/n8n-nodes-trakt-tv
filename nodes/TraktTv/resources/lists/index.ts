import type { INodeProperties } from 'n8n-workflow';

export const listsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					]
				}
			},
			"options": [
				{
					"name": "Get Popular Lists",
					"value": "Get Popular Lists",
					"action": "Get popular lists",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns the most popular lists. Popularity is calculated using total number of likes and comments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/popular"
						}
					}
				},
				{
					"name": "Get Trending Lists",
					"value": "Get Trending Lists",
					"action": "Get trending lists",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists with the most likes and comments over the last 7 days.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/trending"
						}
					}
				},
				{
					"name": "Get List",
					"value": "Get List",
					"action": "Get list",
					"description": "#### &#128513; Emojis\n\nReturns a single list. Use the [**/lists/:id/items**](#reference/lists/list-items) method to get the actual items this list contains.\n\n**Note:** You must use an integer `id`, and only public lists will return data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get All List Comments",
					"value": "Get All List Comments",
					"action": "Get all list comments",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/{{$parameter[\"id\"]}}/comments/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Items On A List",
					"value": "Get Items On A List",
					"action": "Get items on a list",
					"description": "#### &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nGet all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.\n\n#### Notes\n\nEach list item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nAll list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/{{$parameter[\"id\"]}}/items/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Get All Users Who Liked A List",
					"value": "Get All Users Who Liked A List",
					"action": "Get all users who liked a list",
					"description": "#### &#128196; Pagination\n\nReturns all users who liked a list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/{{$parameter[\"id\"]}}/likes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /lists/popular",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get Popular Lists"
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
						"Lists"
					],
					"operation": [
						"Get Popular Lists"
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
						"Lists"
					],
					"operation": [
						"Get Popular Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/trending",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get Trending Lists"
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
						"Lists"
					],
					"operation": [
						"Get Trending Lists"
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
						"Lists"
					],
					"operation": [
						"Get Trending Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID",
			"default": "55",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get List"
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
						"Lists"
					],
					"operation": [
						"Get List"
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
						"Lists"
					],
					"operation": [
						"Get List"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/{id}/comments/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get All List Comments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID",
			"default": "55",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get All List Comments"
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
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get All List Comments"
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
						"Lists"
					],
					"operation": [
						"Get All List Comments"
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
						"Lists"
					],
					"operation": [
						"Get All List Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/{id}/items/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get Items On A List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID",
			"default": "55",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get Items On A List"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Filter for a specific item type",
			"default": "movies",
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
					"name": "Season",
					"value": "season"
				},
				{
					"name": "Episode",
					"value": "episode"
				},
				{
					"name": "Person",
					"value": "person"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get Items On A List"
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
						"Lists"
					],
					"operation": [
						"Get Items On A List"
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
						"Lists"
					],
					"operation": [
						"Get Items On A List"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/{id}/likes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get All Users Who Liked A List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID",
			"default": "55",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Lists"
					],
					"operation": [
						"Get All Users Who Liked A List"
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
						"Lists"
					],
					"operation": [
						"Get All Users Who Liked A List"
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
						"Lists"
					],
					"operation": [
						"Get All Users Who Liked A List"
					]
				}
			}
		},
];
