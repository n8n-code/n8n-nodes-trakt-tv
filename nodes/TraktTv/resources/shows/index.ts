import type { INodeProperties } from 'n8n-workflow';

export const showsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					]
				}
			},
			"options": [
				{
					"name": "Get The Most Anticipated Shows",
					"value": "Get The Most Anticipated Shows",
					"action": "Get the most anticipated shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most anticipated shows based on the number of lists a show appears on.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/anticipated"
						}
					}
				},
				{
					"name": "Get The Most Collected Shows",
					"value": "Get The Most Collected Shows",
					"action": "Get the most collected shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most collected (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/collected/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get The Most Played Shows",
					"value": "Get The Most Played Shows",
					"action": "Get the most played shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most played (a single user can watch multiple episodes multiple times) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/played/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get Popular Shows",
					"value": "Get Popular Shows",
					"action": "Get popular shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most popular shows. Popularity is calculated using the rating percentage and the number of ratings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/popular"
						}
					}
				},
				{
					"name": "Get The Most Recommended Shows",
					"value": "Get The Most Recommended Shows",
					"action": "Get the most recommended shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most recommended shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/recommended/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get Trending Shows",
					"value": "Get Trending Shows",
					"action": "Get trending shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns all shows being watched right now. Shows with the most users are returned first.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/trending"
						}
					}
				},
				{
					"name": "Get Recently Updated Show Trakt I Ds",
					"value": "Get Recently Updated Show Trakt I Ds",
					"action": "Get recently updated show Trakt IDs",
					"description": "#### &#128196; Pagination\n\nReturns all show Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/updates/id/{{$parameter[\"start_date\"]}}"
						}
					}
				},
				{
					"name": "Get Recently Updated Shows",
					"value": "Get Recently Updated Shows",
					"action": "Get recently updated shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info\n\nReturns all shows updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/updates/{{$parameter[\"start_date\"]}}"
						}
					}
				},
				{
					"name": "Get The Most Watched Shows",
					"value": "Get The Most Watched Shows",
					"action": "Get the most watched shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most watched (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/watched/{{$parameter[\"period\"]}}"
						}
					}
				},
				{
					"name": "Get A Single Show",
					"value": "Get A Single Show",
					"action": "Get a single show",
					"description": "#### &#10024; Extended Info\n\nReturns a single shows's details. If you request extended info, the `airs` object is relative to the show's country. You can use the `day`, `time`, and `timezone` to construct your own date then convert it to whatever timezone your user is in.\n\n**Note:** When getting `full` extended info, the `status` field can have a value of `returning series` (airing right now),  `continuing` (airing right now), `in production` (airing soon), `planned` (in development), `upcoming` (in development),  `pilot`, `canceled`, or `ended`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get All Show Aliases",
					"value": "Get All Show Aliases",
					"action": "Get all show aliases",
					"description": "Returns all title aliases for a show.  Includes country where name is different.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/aliases"
						}
					}
				},
				{
					"name": "Get All Show Certifications",
					"value": "Get All Show Certifications",
					"action": "Get all show certifications",
					"description": "Returns all content certifications for a show, including the country.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/certifications"
						}
					}
				},
				{
					"name": "Get All Show Comments",
					"value": "Get All Show Comments",
					"action": "Get all show comments",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a show. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/comments/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Last Episode",
					"value": "Get Last Episode",
					"action": "Get last episode",
					"description": "#### &#10024; Extended Info\n\nReturns the most recently aired episode. If no episode is found, a `204` HTTP status code will be returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/last_episode"
						}
					}
				},
				{
					"name": "Get Lists Containing This Show",
					"value": "Get Lists Containing This Show",
					"action": "Get lists containing this show",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this show. By default, `personal` lists are returned sorted by the most `popular`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/lists/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Next Episode",
					"value": "Get Next Episode",
					"action": "Get next episode",
					"description": "#### &#10024; Extended Info\n\nReturns the next scheduled to air episode. If no episode is found, a `204` HTTP status code will be returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/next_episode"
						}
					}
				},
				{
					"name": "Get All People For A Show",
					"value": "Get All People For A Show",
					"action": "Get all people for a show",
					"description": "#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for a show, including the `episode_count` for which they appears. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.\n\n#### Guest Stars\n\nIf you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the show.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/people"
						}
					}
				},
				{
					"name": "Get Show Collection Progress",
					"value": "Get Show Collection Progress",
					"action": "Get show collection progress",
					"description": "#### &#128274; OAuth Required\n\nReturns collection progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should collect, if there are no upcoming episodes it will be set to `null`.\n\nBy default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.\n\nBy default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.\n\nBy default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has collected, even if they've collected older episodes more recently. To use their last collected episode for these calculations, set the `last_activity` flag to `collected`.\n\n**Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/progress/collection"
						}
					}
				},
				{
					"name": "Get Show Watched Progress",
					"value": "Get Show Watched Progress",
					"action": "Get show watched progress",
					"description": "#### &#128274; OAuth Required\n\nReturns watched progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should watch, if there are no upcoming episodes it will be set to `null`. If not `null`, the `reset_at` date is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.\n\nBy default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.\n\nBy default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.\n\nBy default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has watched, even if they've watched older episodes more recently. To use their last watched episode for these calculations, set the `last_activity` flag to `watched`.\n\n**Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/progress/watched"
						}
					}
				},
				{
					"name": "Undo Reset Show Progress",
					"value": "Undo Reset Show Progress",
					"action": "Undo reset show progress",
					"description": "#### &#128274; OAuth Required 🔥 VIP Only\n\nUndo the reset and have watched progress use all watched history for the show.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shows/{{$parameter[\"id\"]}}/progress/watched/reset"
						}
					}
				},
				{
					"name": "Reset Show Progress",
					"value": "Reset Show Progress",
					"action": "Reset show progress",
					"description": "#### &#128274; OAuth Required 🔥 VIP Only\n\nReset a show's progress when the user started re-watching the show. You can optionally specify the `reset_at` date to have it calculate progress from that specific date onwards.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shows/{{$parameter[\"id\"]}}/progress/watched/reset"
						}
					}
				},
				{
					"name": "Get Show Ratings",
					"value": "Get Show Ratings",
					"action": "Get show ratings",
					"description": "Returns rating (between 0 and 10) and distribution for a show.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/ratings"
						}
					}
				},
				{
					"name": "Get Related Shows",
					"value": "Get Related Shows",
					"action": "Get related shows",
					"description": "#### &#128196; Pagination &#10024; Extended Info\n\nReturns related and similar shows.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/related"
						}
					}
				},
				{
					"name": "Get Show Stats",
					"value": "Get Show Stats",
					"action": "Get show stats",
					"description": "Returns lots of show stats.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/stats"
						}
					}
				},
				{
					"name": "Get Show Studios",
					"value": "Get Show Studios",
					"action": "Get show studios",
					"description": "Returns all studios for a show.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/studios"
						}
					}
				},
				{
					"name": "Get All Show Translations",
					"value": "Get All Show Translations",
					"action": "Get all show translations",
					"description": "Returns all translations for a show, including language and translated values for title and overview.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/translations/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "GET Shows Watching",
					"value": "GET Shows Watching",
					"action": "Get users watching right now",
					"description": "#### &#10024; Extended Info\n\nReturns all users watching this show right now.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/watching"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shows/anticipated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get The Most Anticipated Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Anticipated Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Anticipated Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/collected/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get The Most Collected Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Collected Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Collected Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Collected Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/played/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get The Most Played Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Played Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Played Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Played Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/popular",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Popular Shows"
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
						"Shows"
					],
					"operation": [
						"Get Popular Shows"
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
						"Shows"
					],
					"operation": [
						"Get Popular Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/recommended/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get The Most Recommended Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Recommended Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Recommended Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Recommended Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/trending",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Trending Shows"
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
						"Shows"
					],
					"operation": [
						"Get Trending Shows"
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
						"Shows"
					],
					"operation": [
						"Get Trending Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/updates/id/{start_date}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Recently Updated Show Trakt I Ds"
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
						"Shows"
					],
					"operation": [
						"Get Recently Updated Show Trakt I Ds"
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
						"Shows"
					],
					"operation": [
						"Get Recently Updated Show Trakt I Ds"
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
						"Shows"
					],
					"operation": [
						"Get Recently Updated Show Trakt I Ds"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/updates/{start_date}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Recently Updated Shows"
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
						"Shows"
					],
					"operation": [
						"Get Recently Updated Shows"
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
						"Shows"
					],
					"operation": [
						"Get Recently Updated Shows"
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
						"Shows"
					],
					"operation": [
						"Get Recently Updated Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/watched/{period}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get The Most Watched Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Watched Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Watched Shows"
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
						"Shows"
					],
					"operation": [
						"Get The Most Watched Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get A Single Show"
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
						"Shows"
					],
					"operation": [
						"Get A Single Show"
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
						"Shows"
					],
					"operation": [
						"Get A Single Show"
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
						"Shows"
					],
					"operation": [
						"Get A Single Show"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/aliases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get All Show Aliases"
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
						"Shows"
					],
					"operation": [
						"Get All Show Aliases"
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
						"Shows"
					],
					"operation": [
						"Get All Show Aliases"
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
						"Shows"
					],
					"operation": [
						"Get All Show Aliases"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/certifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get All Show Certifications"
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
						"Shows"
					],
					"operation": [
						"Get All Show Certifications"
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
						"Shows"
					],
					"operation": [
						"Get All Show Certifications"
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
						"Shows"
					],
					"operation": [
						"Get All Show Certifications"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/comments/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get All Show Comments"
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
						"Shows"
					],
					"operation": [
						"Get All Show Comments"
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
						"Shows"
					],
					"operation": [
						"Get All Show Comments"
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
						"Shows"
					],
					"operation": [
						"Get All Show Comments"
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
						"Shows"
					],
					"operation": [
						"Get All Show Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/last_episode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Last Episode"
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
						"Shows"
					],
					"operation": [
						"Get Last Episode"
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
						"Shows"
					],
					"operation": [
						"Get Last Episode"
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
						"Shows"
					],
					"operation": [
						"Get Last Episode"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/lists/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Lists Containing This Show"
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
						"Shows"
					],
					"operation": [
						"Get Lists Containing This Show"
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
						"Shows"
					],
					"operation": [
						"Get Lists Containing This Show"
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
						"Shows"
					],
					"operation": [
						"Get Lists Containing This Show"
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
						"Shows"
					],
					"operation": [
						"Get Lists Containing This Show"
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
						"Shows"
					],
					"operation": [
						"Get Lists Containing This Show"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/next_episode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Next Episode"
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
						"Shows"
					],
					"operation": [
						"Get Next Episode"
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
						"Shows"
					],
					"operation": [
						"Get Next Episode"
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
						"Shows"
					],
					"operation": [
						"Get Next Episode"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/people",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get All People For A Show"
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
						"Shows"
					],
					"operation": [
						"Get All People For A Show"
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
						"Shows"
					],
					"operation": [
						"Get All People For A Show"
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
						"Shows"
					],
					"operation": [
						"Get All People For A Show"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/progress/collection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
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
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"description": "include any hidden seasons",
			"default": "false",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "hidden",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
					]
				}
			}
		},
		{
			"displayName": "Specials",
			"name": "specials",
			"description": "include specials as season 0",
			"default": "false",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "specials",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
					]
				}
			}
		},
		{
			"displayName": "Count Specials",
			"name": "count_specials",
			"description": "count specials in the overall stats (only applies if specials are included)",
			"default": "true",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "count_specials",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
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
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
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
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/progress/collection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Collection Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/progress/watched",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
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
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"description": "include any hidden seasons",
			"default": "false",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "hidden",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
					]
				}
			}
		},
		{
			"displayName": "Specials",
			"name": "specials",
			"description": "include specials as season 0",
			"default": "false",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "specials",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
					]
				}
			}
		},
		{
			"displayName": "Count Specials",
			"name": "count_specials",
			"description": "count specials in the overall stats (only applies if specials are included)",
			"default": "true",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "count_specials",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
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
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
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
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/progress/watched<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Watched Progress"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shows/{id}/progress/watched/reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Undo Reset Show Progress"
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
						"Shows"
					],
					"operation": [
						"Undo Reset Show Progress"
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
						"Shows"
					],
					"operation": [
						"Undo Reset Show Progress"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Undo Reset Show Progress"
					]
				}
			}
		},
		{
			"displayName": "POST /shows/{id}/progress/watched/reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Reset Show Progress"
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
						"Shows"
					],
					"operation": [
						"Reset Show Progress"
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
						"Shows"
					],
					"operation": [
						"Reset Show Progress"
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
						"Shows"
					],
					"operation": [
						"Reset Show Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/ratings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Ratings"
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
						"Shows"
					],
					"operation": [
						"Get Show Ratings"
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
						"Shows"
					],
					"operation": [
						"Get Show Ratings"
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
						"Shows"
					],
					"operation": [
						"Get Show Ratings"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/related",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Related Shows"
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
						"Shows"
					],
					"operation": [
						"Get Related Shows"
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
						"Shows"
					],
					"operation": [
						"Get Related Shows"
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
						"Shows"
					],
					"operation": [
						"Get Related Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Stats"
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
						"Shows"
					],
					"operation": [
						"Get Show Stats"
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
						"Shows"
					],
					"operation": [
						"Get Show Stats"
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
						"Shows"
					],
					"operation": [
						"Get Show Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/studios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Show Studios"
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
						"Shows"
					],
					"operation": [
						"Get Show Studios"
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
						"Shows"
					],
					"operation": [
						"Get Show Studios"
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
						"Shows"
					],
					"operation": [
						"Get Show Studios"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/translations/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get All Show Translations"
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
						"Shows"
					],
					"operation": [
						"Get All Show Translations"
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
						"Shows"
					],
					"operation": [
						"Get All Show Translations"
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
						"Shows"
					],
					"operation": [
						"Get All Show Translations"
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
						"Shows"
					],
					"operation": [
						"Get All Show Translations"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/watching",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"GET Shows Watching"
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
						"Shows"
					],
					"operation": [
						"GET Shows Watching"
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
						"Shows"
					],
					"operation": [
						"GET Shows Watching"
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
						"Shows"
					],
					"operation": [
						"GET Shows Watching"
					]
				}
			}
		},
];
