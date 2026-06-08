import type { INodeProperties } from 'n8n-workflow';

export const moviesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					]
				}
			},
			"options": [
				{
					"name": "Get The Most Anticipated Movies",
					"value": "Get The Most Anticipated Movies",
					"action": "Get the most anticipated movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most anticipated movies based on the number of lists a movie appears on.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/anticipated"
						}
					}
				},
				{
					"name": "Get The Weekend Box Office",
					"value": "Get The Weekend Box Office",
					"action": "Get the weekend box office",
					"description": "#### &#10024; Extended Info\n\nReturns the top 10 grossing movies in the U.S. box office last weekend. Updated every Monday morning.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/boxoffice"
						}
					}
				},
				{
					"name": "Get The Most Collected Movies",
					"value": "Get The Most Collected Movies",
					"action": "Get the most Collected movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most collected (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/collected/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get The Most Played Movies",
					"value": "Get The Most Played Movies",
					"action": "Get the most played movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most played (a single user can watch multiple times) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/played/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get Popular Movies",
					"value": "Get Popular Movies",
					"action": "Get popular movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most popular movies. Popularity is calculated using the rating percentage and the number of ratings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/popular"
						}
					}
				},
				{
					"name": "Get The Most Recommended Movies",
					"value": "Get The Most Recommended Movies",
					"action": "Get the most recommended movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most recommended movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/recommended/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get Trending Movies",
					"value": "Get Trending Movies",
					"action": "Get trending movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns all movies being watched right now. Movies with the most users are returned first.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/trending"
						}
					}
				},
				{
					"name": "Get Recently Updated Movie Trakt I Ds",
					"value": "Get Recently Updated Movie Trakt I Ds",
					"action": "Get recently updated movie Trakt IDs",
					"description": "#### &#128196; Pagination\n\nReturns all movie Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/updates/id/{{$parameter[\"start_date\"]}}"
						}
					}
				},
				{
					"name": "Get Recently Updated Movies",
					"value": "Get Recently Updated Movies",
					"action": "Get recently updated movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info\n\nReturns all movies updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/updates/{{$parameter[\"start_date\"]}}"
						}
					}
				},
				{
					"name": "Get The Most Watched Movies",
					"value": "Get The Most Watched Movies",
					"action": "Get the most watched movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most watched (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/watched/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get A Movie",
					"value": "Get A Movie",
					"action": "Get a movie",
					"description": "#### &#10024; Extended Info\n\nReturns a single movie's details.\n\n**Note:** When getting `full` extended info, the `status` field can have a value of `released`, `in production`, `post production`, `planned`, `rumored`, or `canceled`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get All Movie Aliases",
					"value": "Get All Movie Aliases",
					"action": "Get all movie aliases",
					"description": "Returns all title aliases for a movie.  Includes country where name is different.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/aliases"
						}
					}
				},
				{
					"name": "Get All Movie Comments",
					"value": "Get All Movie Comments",
					"action": "Get all movie comments",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a movie. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/comments/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Lists Containing This Movie",
					"value": "Get Lists Containing This Movie",
					"action": "Get lists containing this movie",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this movie. By default, `personal` lists are returned sorted by the most `popular`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/lists/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get All People For A Movie",
					"value": "Get All People For A Movie",
					"action": "Get all people for a movie",
					"description": "#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for a movie. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/people"
						}
					}
				},
				{
					"name": "Get Movie Ratings",
					"value": "Get Movie Ratings",
					"action": "Get movie ratings",
					"description": "Returns rating (between 0 and 10) and distribution for a movie.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/ratings"
						}
					}
				},
				{
					"name": "Get Related Movies",
					"value": "Get Related Movies",
					"action": "Get related movies",
					"description": "#### &#128196; Pagination &#10024; Extended Info\n\nReturns related and similar movies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/related"
						}
					}
				},
				{
					"name": "Get All Movie Releases",
					"value": "Get All Movie Releases",
					"action": "Get all movie releases",
					"description": "Returns all releases for a movie including country, certification, release date, release type, and note. The release type can be set to `unknown`, `premiere`, `limited`, `theatrical`, `digital`, `physical`, or `tv`. The `note` might have optional info such as the film festival name for a `premiere` release or Blu-ray specs for a `physical` release. We pull this info from [TMDB](https://developers.themoviedb.org/3/movies/get-movie-release-dates).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/releases/{{$parameter[\"country\"]}}"
						}
					}
				},
				{
					"name": "Get Movie Stats",
					"value": "Get Movie Stats",
					"action": "Get movie stats",
					"description": "Returns lots of movie stats.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/stats"
						}
					}
				},
				{
					"name": "Get Movie Studios",
					"value": "Get Movie Studios",
					"action": "Get movie studios",
					"description": "Returns all studios for a movie.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/studios"
						}
					}
				},
				{
					"name": "Get All Movie Translations",
					"value": "Get All Movie Translations",
					"action": "Get all movie translations",
					"description": "Returns all translations for a movie, including language and translated values for title, tagline and overview.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/translations/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "Get Users Watching Right Now",
					"value": "Get Users Watching Right Now",
					"action": "Get users watching right now",
					"description": "#### &#10024; Extended Info\n\nReturns all users watching this movie right now.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movies/{{$parameter[\"id\"]}}/watching"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /movies/anticipated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Anticipated Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Anticipated Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Anticipated Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/boxoffice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Weekend Box Office"
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
						"Movies"
					],
					"operation": [
						"Get The Weekend Box Office"
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
						"Movies"
					],
					"operation": [
						"Get The Weekend Box Office"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/collected/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Collected Movies"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Time period.",
			"default": "weekly",
			"type": "options",
			"options": [
				{
					"name": "Daily",
					"value": "daily"
				},
				{
					"name": "Weekly",
					"value": "weekly"
				},
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Yearly",
					"value": "yearly"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Collected Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Collected Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Collected Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/played/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Played Movies"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Time period.",
			"default": "weekly",
			"type": "options",
			"options": [
				{
					"name": "Daily",
					"value": "daily"
				},
				{
					"name": "Weekly",
					"value": "weekly"
				},
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Yearly",
					"value": "yearly"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Played Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Played Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Played Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/popular",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Popular Movies"
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
						"Movies"
					],
					"operation": [
						"Get Popular Movies"
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
						"Movies"
					],
					"operation": [
						"Get Popular Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/recommended/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Recommended Movies"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Time period.",
			"default": "weekly",
			"type": "options",
			"options": [
				{
					"name": "Daily",
					"value": "daily"
				},
				{
					"name": "Weekly",
					"value": "weekly"
				},
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Yearly",
					"value": "yearly"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Recommended Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Recommended Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Recommended Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/trending",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Trending Movies"
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
						"Movies"
					],
					"operation": [
						"Get Trending Movies"
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
						"Movies"
					],
					"operation": [
						"Get Trending Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/updates/id/{start_date}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movie Trakt I Ds"
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
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movie Trakt I Ds"
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
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movie Trakt I Ds"
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
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movie Trakt I Ds"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/updates/{start_date}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movies"
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
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movies"
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
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movies"
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
						"Movies"
					],
					"operation": [
						"Get Recently Updated Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/watched/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Watched Movies"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Time period.",
			"default": "weekly",
			"type": "options",
			"options": [
				{
					"name": "Daily",
					"value": "daily"
				},
				{
					"name": "Weekly",
					"value": "weekly"
				},
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Yearly",
					"value": "yearly"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get The Most Watched Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Watched Movies"
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
						"Movies"
					],
					"operation": [
						"Get The Most Watched Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get A Movie"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get A Movie"
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
						"Movies"
					],
					"operation": [
						"Get A Movie"
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
						"Movies"
					],
					"operation": [
						"Get A Movie"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/aliases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Aliases"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Aliases"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Aliases"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Aliases"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/comments/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Comments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Comments"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Comments"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Comments"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/lists/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Lists Containing This Movie"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Lists Containing This Movie"
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
				},
				{
					"name": "Recommendations",
					"value": "recommendations"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Lists Containing This Movie"
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
						"Movies"
					],
					"operation": [
						"Get Lists Containing This Movie"
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
						"Movies"
					],
					"operation": [
						"Get Lists Containing This Movie"
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
						"Movies"
					],
					"operation": [
						"Get Lists Containing This Movie"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/people",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All People For A Movie"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All People For A Movie"
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
						"Movies"
					],
					"operation": [
						"Get All People For A Movie"
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
						"Movies"
					],
					"operation": [
						"Get All People For A Movie"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/ratings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Movie Ratings"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Movie Ratings"
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
						"Movies"
					],
					"operation": [
						"Get Movie Ratings"
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
						"Movies"
					],
					"operation": [
						"Get Movie Ratings"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/related",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Related Movies"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Related Movies"
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
						"Movies"
					],
					"operation": [
						"Get Related Movies"
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
						"Movies"
					],
					"operation": [
						"Get Related Movies"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/releases/{country}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Releases"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Releases"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"required": true,
			"description": "2 character country code",
			"default": "us",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Releases"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Releases"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Releases"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Movie Stats"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Movie Stats"
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
						"Movies"
					],
					"operation": [
						"Get Movie Stats"
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
						"Movies"
					],
					"operation": [
						"Get Movie Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/studios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Movie Studios"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Movie Studios"
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
						"Movies"
					],
					"operation": [
						"Get Movie Studios"
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
						"Movies"
					],
					"operation": [
						"Get Movie Studios"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/translations/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Translations"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get All Movie Translations"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Translations"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Translations"
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
						"Movies"
					],
					"operation": [
						"Get All Movie Translations"
					]
				}
			}
		},
		{
			"displayName": "GET /movies/{id}/watching",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Users Watching Right Now"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID, Trakt slug, or IMDB ID",
			"default": "tron-legacy-2010",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Movies"
					],
					"operation": [
						"Get Users Watching Right Now"
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
						"Movies"
					],
					"operation": [
						"Get Users Watching Right Now"
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
						"Movies"
					],
					"operation": [
						"Get Users Watching Right Now"
					]
				}
			}
		},
];
