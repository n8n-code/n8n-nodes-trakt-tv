import type { INodeProperties } from 'n8n-workflow';

export const syncDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					]
				}
			},
			"options": [
				{
					"name": "Add Items To Collection",
					"value": "Add Items To Collection",
					"action": "Add items to collection",
					"description": "#### &#128274; OAuth Required\n\nAdd items to a user's collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.\n\nSend a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.\n\n**Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n\n#### Media Object POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. |\n| `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). |\n| `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. |\n| `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. |\n| `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. |\n| `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. |\n| `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` |\n| `3d` | boolean | Set `true` if in 3D. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/collection"
						}
					}
				},
				{
					"name": "Remove Items From Collection",
					"value": "Remove Items From Collection",
					"action": "Remove items from collection",
					"description": "#### &#128274; OAuth Required\n\nRemove one or more items from a user's collection.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/collection/remove"
						}
					}
				},
				{
					"name": "Get Collection",
					"value": "Get Collection",
					"action": "Get collection",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info\n\nGet all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.\n\nEach `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.\n\nEach `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.\n\nIf you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/collection/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Add Items To Watched History",
					"value": "Add Items To Watched History",
					"action": "Add items to watched history",
					"description": "#### &#128274; OAuth Required\n\nAdd items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.\n\nSend a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.\n\n**Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n\n#### Media Object POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. |\n| `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/history"
						}
					}
				},
				{
					"name": "Remove Items From History",
					"value": "Remove Items From History",
					"action": "Remove items from history",
					"description": "#### &#128274; OAuth Required\n\nRemove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.\n\nYou can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [**/sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n| `ids` | array | Array of history ids. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/history/remove"
						}
					}
				},
				{
					"name": "Get Watched History",
					"value": "Get Watched History",
					"action": "Get watched history",
					"description": "#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info\n\nReturns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.\n\nSpecify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.\n\n| Example URL | Returns watches for... |\n|---|---|\n| `/history/movies/12601` | TRON: Legacy |\n| `/history/shows/1388` | All episodes of Breaking Bad |\n| `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |\n| `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/history/{{$parameter[\"type\"]}}/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Last Activity",
					"value": "Get Last Activity",
					"action": "Get last activity",
					"description": "#### &#128274; OAuth Required\n\nThis method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.\n\n#### Account\n\n`settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/last_activities"
						}
					}
				},
				{
					"name": "Remove A Playback Item",
					"value": "Remove A Playback Item",
					"action": "Remove a playback item",
					"description": "#### &#128274; OAuth Required\n\nRemove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sync/playback/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Playback Progress",
					"value": "Get Playback Progress",
					"action": "Get playback progress",
					"description": "#### &#128274; OAuth Required &#128196; Pagination Optional\n\nWhenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.\n\nYou can optionally specify a `type` to only get `movies` or `episodes`.\n\nBy default, all results will be returned. Pagination is optional and can be used for something like an \"on deck\" feature, or if you only need a limited data set.\n\n**Note:** We only save playback progress for the last 6 months.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/playback/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Add New Ratings",
					"value": "Add New Ratings",
					"action": "Add new ratings",
					"description": "#### &#128274; OAuth Required\n\nRate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.\n\nSend a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n\n#### Media Object POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie`, `show`, `season`, or `episode` object. |\n| `rating` <span style=\"color:red;\">*</a> | integer | Between 1 and 10. |\n| `rated_at` | datetime | UTC datetime when the item was rated. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/ratings"
						}
					}
				},
				{
					"name": "Remove Ratings",
					"value": "Remove Ratings",
					"action": "Remove ratings",
					"description": "#### &#128274; OAuth Required\n\nRemove ratings for one or more items.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/ratings/remove"
						}
					}
				},
				{
					"name": "Get Ratings",
					"value": "Get Ratings",
					"action": "Get ratings",
					"description": "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info\n\nGet a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/ratings/{{$parameter[\"type\"]}}/{{$parameter[\"rating\"]}}"
						}
					}
				},
				{
					"name": "Add Items To Personal Recommendations",
					"value": "Add Items To Personal Recommendations",
					"action": "Add items to personal recommendations",
					"description": "#### &#128274; OAuth Required &#128513; Emojis\n\nIf the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### Notes\n\nEach recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.\n\n#### Limits\n\nIf the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/recommendations"
						}
					}
				},
				{
					"name": "Remove Items From Personal Recommendations",
					"value": "Remove Items From Personal Recommendations",
					"action": "Remove items from personal recommendations",
					"description": "#### &#128274; OAuth Required\n\nRemove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/recommendations/remove"
						}
					}
				},
				{
					"name": "Reorder Personally Recommended Items",
					"value": "Reorder Personally Recommended Items",
					"action": "Reorder personally recommended items",
					"description": "#### &#128274; OAuth Required\n\nReorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [**/sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/recommendations/reorder"
						}
					}
				},
				{
					"name": "Get Personal Recommendations",
					"value": "Get Personal Recommendations",
					"action": "Get personal recommendations",
					"description": "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nIf the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### Notes\n\nEach recommendation contains a `notes` field explaining why the user recommended the item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/recommendations/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Watched",
					"value": "Get Watched",
					"action": "Get watched",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info\n\nReturns all movies or shows a user has watched sorted by most plays.\n\nIf `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.\n\nEach `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.\n\nEach `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/watched/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Add Items To Watchlist",
					"value": "Add Items To Watchlist",
					"action": "Add items to watchlist",
					"description": "#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced\n\nAdd one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.\n\n#### Notes\n\nEach watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.\n\n#### Limits\n\nIf the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/watchlist"
						}
					}
				},
				{
					"name": "Remove Items From Watchlist",
					"value": "Remove Items From Watchlist",
					"action": "Remove items from watchlist",
					"description": "#### &#128274; OAuth Required\n\nRemove one or more items from a user's watchlist.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/watchlist/remove"
						}
					}
				},
				{
					"name": "Reorder Watchlist Items",
					"value": "Reorder Watchlist Items",
					"action": "Reorder watchlist items",
					"description": "#### &#128274; OAuth Required\n\nReorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [**/sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sync/watchlist/reorder"
						}
					}
				},
				{
					"name": "Get Watchlist",
					"value": "Get Watchlist",
					"action": "Get watchlist",
					"description": "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nReturns all items in a user's watchlist filtered by type.\n\n#### Notes\n\nEach watchlist item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nBy default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.\n\nWe also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.\n\n#### Auto Removal\n\nWhen an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.\n\n_**The watchlist should not be used as a list of what the user is actively watching.**_\n\nUse a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sync/watchlist/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sync/collection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Collection"
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
						"Sync"
					],
					"operation": [
						"Add Items To Collection"
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
						"Sync"
					],
					"operation": [
						"Add Items To Collection"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Collection"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Collection"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Collection"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Collection"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/collection/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Collection"
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
						"Sync"
					],
					"operation": [
						"Remove Items From Collection"
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
						"Sync"
					],
					"operation": [
						"Remove Items From Collection"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Collection"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Collection"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Collection"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/collection/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Collection"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "movies",
			"type": "options",
			"options": [
				{
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Shows",
					"value": "shows"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Collection"
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
						"Sync"
					],
					"operation": [
						"Get Collection"
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
						"Sync"
					],
					"operation": [
						"Get Collection"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watched History"
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
						"Sync"
					],
					"operation": [
						"Add Items To Watched History"
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
						"Sync"
					],
					"operation": [
						"Add Items To Watched History"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watched History"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watched History"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watched History"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watched History"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/history/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From History"
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
						"Sync"
					],
					"operation": [
						"Remove Items From History"
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
						"Sync"
					],
					"operation": [
						"Remove Items From History"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From History"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From History"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From History"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From History"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From History"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/history/{type}/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watched History"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "movies",
			"type": "options",
			"options": [
				{
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Shows",
					"value": "shows"
				},
				{
					"name": "Seasons",
					"value": "seasons"
				},
				{
					"name": "Episodes",
					"value": "episodes"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watched History"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Trakt ID for a specific item.",
			"default": "123",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watched History"
					]
				}
			}
		},
		{
			"displayName": "Start At",
			"name": "start_at",
			"description": "Starting date.",
			"default": "2016-06-01T00:00:00.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_at",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watched History"
					]
				}
			}
		},
		{
			"displayName": "End At",
			"name": "end_at",
			"description": "Ending date.",
			"default": "2016-07-01T23:59:59.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_at",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watched History"
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
						"Sync"
					],
					"operation": [
						"Get Watched History"
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
						"Sync"
					],
					"operation": [
						"Get Watched History"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/last_activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Last Activity"
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
						"Sync"
					],
					"operation": [
						"Get Last Activity"
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
						"Sync"
					],
					"operation": [
						"Get Last Activity"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sync/playback/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove A Playback Item"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "playback ID",
			"default": "13",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove A Playback Item"
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
						"Sync"
					],
					"operation": [
						"Remove A Playback Item"
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
						"Sync"
					],
					"operation": [
						"Remove A Playback Item"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/playback/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Playback Progress"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "movies",
			"type": "options",
			"options": [
				{
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Episodes",
					"value": "episodes"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Playback Progress"
					]
				}
			}
		},
		{
			"displayName": "Start At",
			"name": "start_at",
			"description": "Starting date.",
			"default": "2016-06-01T00:00:00.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_at",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Playback Progress"
					]
				}
			}
		},
		{
			"displayName": "End At",
			"name": "end_at",
			"description": "Ending date.",
			"default": "2016-07-01T23:59:59.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_at",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Playback Progress"
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
						"Sync"
					],
					"operation": [
						"Get Playback Progress"
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
						"Sync"
					],
					"operation": [
						"Get Playback Progress"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/ratings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add New Ratings"
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
						"Sync"
					],
					"operation": [
						"Add New Ratings"
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
						"Sync"
					],
					"operation": [
						"Add New Ratings"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add New Ratings"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add New Ratings"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add New Ratings"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add New Ratings"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/ratings/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Ratings"
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
						"Sync"
					],
					"operation": [
						"Remove Ratings"
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
						"Sync"
					],
					"operation": [
						"Remove Ratings"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Ratings"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Ratings"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Ratings"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Ratings"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/ratings/{type}/{rating}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Ratings"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "movies",
			"type": "options",
			"options": [
				{
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Shows",
					"value": "shows"
				},
				{
					"name": "Seasons",
					"value": "seasons"
				},
				{
					"name": "Episodes",
					"value": "episodes"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Ratings"
					]
				}
			}
		},
		{
			"displayName": "Rating",
			"name": "rating",
			"required": true,
			"description": "Filter for a specific rating.",
			"default": "9",
			"type": "options",
			"options": [
				{
					"name": "1",
					"value": "1"
				},
				{
					"name": "2",
					"value": "2"
				},
				{
					"name": "3",
					"value": "3"
				},
				{
					"name": "4",
					"value": "4"
				},
				{
					"name": "5",
					"value": "5"
				},
				{
					"name": "6",
					"value": "6"
				},
				{
					"name": "7",
					"value": "7"
				},
				{
					"name": "8",
					"value": "8"
				},
				{
					"name": "9",
					"value": "9"
				},
				{
					"name": "10",
					"value": "10"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Ratings"
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
						"Sync"
					],
					"operation": [
						"Get Ratings"
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
						"Sync"
					],
					"operation": [
						"Get Ratings"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/recommendations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Personal Recommendations"
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
						"Sync"
					],
					"operation": [
						"Add Items To Personal Recommendations"
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
						"Sync"
					],
					"operation": [
						"Add Items To Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/recommendations/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Personal Recommendations"
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
						"Sync"
					],
					"operation": [
						"Remove Items From Personal Recommendations"
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
						"Sync"
					],
					"operation": [
						"Remove Items From Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/recommendations/reorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Reorder Personally Recommended Items"
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
						"Sync"
					],
					"operation": [
						"Reorder Personally Recommended Items"
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
						"Sync"
					],
					"operation": [
						"Reorder Personally Recommended Items"
					]
				}
			}
		},
		{
			"displayName": "Rank",
			"name": "rank",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "rank",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Reorder Personally Recommended Items"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/recommendations/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Personal Recommendations"
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
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Shows",
					"value": "shows"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"required": true,
			"description": "How to sort (only if type is also sent)",
			"default": "rank",
			"type": "options",
			"options": [
				{
					"name": "Rank",
					"value": "rank"
				},
				{
					"name": "Added",
					"value": "added"
				},
				{
					"name": "Released",
					"value": "released"
				},
				{
					"name": "Title",
					"value": "title"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Personal Recommendations"
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
						"Sync"
					],
					"operation": [
						"Get Personal Recommendations"
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
						"Sync"
					],
					"operation": [
						"Get Personal Recommendations"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/watched/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watched"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "movies",
			"type": "options",
			"options": [
				{
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Shows",
					"value": "shows"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watched"
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
						"Sync"
					],
					"operation": [
						"Get Watched"
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
						"Sync"
					],
					"operation": [
						"Get Watched"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/watchlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watchlist"
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
						"Sync"
					],
					"operation": [
						"Add Items To Watchlist"
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
						"Sync"
					],
					"operation": [
						"Add Items To Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Add Items To Watchlist"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/watchlist/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Watchlist"
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
						"Sync"
					],
					"operation": [
						"Remove Items From Watchlist"
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
						"Sync"
					],
					"operation": [
						"Remove Items From Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Episodes",
			"name": "episodes",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "episodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Movies",
			"name": "movies",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "movies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Seasons",
			"name": "seasons",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "seasons",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {\n        \"episodes\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "shows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Remove Items From Watchlist"
					]
				}
			}
		},
		{
			"displayName": "POST /sync/watchlist/reorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Reorder Watchlist Items"
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
						"Sync"
					],
					"operation": [
						"Reorder Watchlist Items"
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
						"Sync"
					],
					"operation": [
						"Reorder Watchlist Items"
					]
				}
			}
		},
		{
			"displayName": "Rank",
			"name": "rank",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "rank",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Reorder Watchlist Items"
					]
				}
			}
		},
		{
			"displayName": "GET /sync/watchlist/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watchlist"
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
					"name": "Movies",
					"value": "movies"
				},
				{
					"name": "Shows",
					"value": "shows"
				},
				{
					"name": "Seasons",
					"value": "seasons"
				},
				{
					"name": "Episodes",
					"value": "episodes"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"required": true,
			"description": "How to sort (only if type is also sent)",
			"default": "rank",
			"type": "options",
			"options": [
				{
					"name": "Rank",
					"value": "rank"
				},
				{
					"name": "Added",
					"value": "added"
				},
				{
					"name": "Released",
					"value": "released"
				},
				{
					"name": "Title",
					"value": "title"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Sync"
					],
					"operation": [
						"Get Watchlist"
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
						"Sync"
					],
					"operation": [
						"Get Watchlist"
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
						"Sync"
					],
					"operation": [
						"Get Watchlist"
					]
				}
			}
		},
];
