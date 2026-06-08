import type { INodeProperties } from 'n8n-workflow';

export const recommendationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					]
				}
			},
			"options": [
				{
					"name": "Get Movie Recommendations",
					"value": "Get Movie Recommendations",
					"action": "Get movie recommendations",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info\n\nMovie recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out movies the user has already collected or `ignore_watchlisted=true` to filter out movies the user has already watchlisted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/recommendations/movies"
						}
					}
				},
				{
					"name": "Hide A Movie Recommendation",
					"value": "Hide A Movie Recommendation",
					"action": "Hide a movie recommendation",
					"description": "#### &#128274; OAuth Required\n\nHide a movie from getting recommended anymore.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/recommendations/movies/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Show Recommendations",
					"value": "Get Show Recommendations",
					"action": "Get show recommendations",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info\n\nTV show recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out shows the user has already collected or `ignore_watchlisted=true` to filter out shows the user has already watchlisted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/recommendations/shows"
						}
					}
				},
				{
					"name": "Hide A Show Recommendation",
					"value": "Hide A Show Recommendation",
					"action": "Hide a show recommendation",
					"description": "#### &#128274; OAuth Required\n\nHide a show from getting recommended anymore.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/recommendations/shows/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /recommendations/movies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Get Movie Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Ignore Collected",
			"name": "ignore_collected",
			"description": "filter out collected movies",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore_collected",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Get Movie Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Ignore Watchlisted",
			"name": "ignore_watchlisted",
			"description": "filter out watchlisted movies",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore_watchlisted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Get Movie Recommendations"
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
						"Recommendations"
					],
					"operation": [
						"Get Movie Recommendations"
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
						"Recommendations"
					],
					"operation": [
						"Get Movie Recommendations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /recommendations/movies/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Hide A Movie Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "922",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Hide A Movie Recommendation"
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
						"Recommendations"
					],
					"operation": [
						"Hide A Movie Recommendation"
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
						"Recommendations"
					],
					"operation": [
						"Hide A Movie Recommendation"
					]
				}
			}
		},
		{
			"displayName": "GET /recommendations/shows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Get Show Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Ignore Collected",
			"name": "ignore_collected",
			"description": "filter out collected shows",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore_collected",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Get Show Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Ignore Watchlisted",
			"name": "ignore_watchlisted",
			"description": "filter out watchlisted movies",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore_watchlisted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Get Show Recommendations"
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
						"Recommendations"
					],
					"operation": [
						"Get Show Recommendations"
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
						"Recommendations"
					],
					"operation": [
						"Get Show Recommendations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /recommendations/shows/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Hide A Show Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "922",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Recommendations"
					],
					"operation": [
						"Hide A Show Recommendation"
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
						"Recommendations"
					],
					"operation": [
						"Hide A Show Recommendation"
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
						"Recommendations"
					],
					"operation": [
						"Hide A Show Recommendation"
					]
				}
			}
		},
];
