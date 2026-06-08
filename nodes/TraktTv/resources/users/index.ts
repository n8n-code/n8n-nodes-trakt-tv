import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Get Hidden Items",
					"value": "Get Hidden Items",
					"action": "Get hidden items",
					"description": "#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info\n\nGet hidden items for a section. This will return an array of standard media objects. You can optionally limit the `type` of results to return.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/hidden/{{$parameter[\"section\"]}}"
						}
					}
				},
				{
					"name": "Add Hidden Items",
					"value": "Add Hidden Items",
					"action": "Add hidden items",
					"description": "#### &#128274; OAuth Required\n\nHide items for a specific section. Here's what type of items can hidden for each section.\n\n#### Hideable Media Objects\n\n| Section | Objects |\n|---|---|---|\n| `calendar` | `movie`, `show` |\n| `progress_watched` | `show`, `season` |\n| `progress_collected` | `show`, `season` |\n| `recommendations` | `movie`, `show` |\n| `comments` | `user` |\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `users` | array | Array of `user` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/hidden/{{$parameter[\"section\"]}}"
						}
					}
				},
				{
					"name": "Remove Hidden Items",
					"value": "Remove Hidden Items",
					"action": "Remove hidden items",
					"description": "#### &#128274; OAuth Required\n\nUnhide items for a specific section. Here's what type of items can unhidden for each section.\n\n#### Unhideable Media Objects\n\n| Section | Objects |\n|---|---|---|\n| `calendar` | `movie`, `show` |\n| `progress_watched` | `show`, `season` |\n| `progress_collected` | `show`, `season` |\n| `recommendations` | `movie`, `show` |\n| `comments` | `user` |\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `users` | array | Array of `user` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/hidden/{{$parameter[\"section\"]}}/remove"
						}
					}
				},
				{
					"name": "Get Follow Requests",
					"value": "Get Follow Requests",
					"action": "Get follow requests",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info\n\nList a user's pending follow requests so they can either approve or deny them.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/requests"
						}
					}
				},
				{
					"name": "Get Pending Following Requests",
					"value": "Get Pending Following Requests",
					"action": "Get pending following requests",
					"description": "#### &#128274; OAuth Required &#10024; Extended Info\n\nList a user's pending following requests that they're waiting for the other user's to approve.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/requests/following"
						}
					}
				},
				{
					"name": "Deny Follow Request",
					"value": "Deny Follow Request",
					"action": "Deny follow request",
					"description": "#### &#128274; OAuth Required\n\nDeny a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/requests/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Approve Follow Request",
					"value": "Approve Follow Request",
					"action": "Approve follow request",
					"description": "#### &#128274; OAuth Required\n\nApprove a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/requests/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Saved Filters",
					"value": "Get Saved Filters",
					"action": "Get saved filters",
					"description": "#### &#128274; OAuth Required &#128196; Pagination 🔥 VIP Only\n\nGet all saved filters a user has created. The `path` and `query` can be used to construct an API path to retrieve the saved data. Think of this like a dynamically updated list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/saved_filters/{{$parameter[\"section\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Settings",
					"value": "Retrieve Settings",
					"action": "Retrieve settings",
					"description": "#### &#128274; OAuth Required\n\nGet the user's settings so you can align your app's experience with what they're used to on the trakt website. A globally unique `uuid` is also returned, which can be used to identify the user locally in your app if needed. However, the `uuid` can't be used to retrieve data from the Trakt API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/settings"
						}
					}
				},
				{
					"name": "Get User Profile",
					"value": "Get User Profile",
					"action": "Get user profile",
					"description": "#### &#128275; OAuth Optional &#10024; Extended Info\n\nGet a user's profile information. If the user is private, info will only be returned if you send OAuth and are either that user or an approved follower. Adding `?extended=vip` will return some additional VIP related fields so you can display the user's Trakt VIP status and year count.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Users Collection",
					"value": "GET Users Collection",
					"action": "Get collection",
					"description": "#### &#128275; OAuth Optional &#10024; Extended Info\n\nGet all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.\n\nEach `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.\n\nEach `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.\n\nIf you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/collection/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Get Comments",
					"value": "Get Comments",
					"action": "Get comments",
					"description": "#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info\n\nReturns the most recently written comments for the user. You can optionally filter by the `comment_type` and media `type` to limit what gets returned.\n\nBy default, only top level comments are returned. Set `?include_replies=true` to return replies in addition to top level comments. Set `?include_replies=only` to return only replies and no top level comments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/comments/{{$parameter[\"comment_type\"]}}/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Unfollow This User",
					"value": "Unfollow This User",
					"action": "Unfollow this user",
					"description": "#### &#128274; OAuth Required\n\nUnfollow someone you already follow.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"id\"]}}/follow"
						}
					}
				},
				{
					"name": "Follow This User",
					"value": "Follow This User",
					"action": "Follow this user",
					"description": "#### &#128274; OAuth Required\n\nIf the user has a private profile, the follow request will require approval (`approved_at` will be null). If a user is public, they will be followed immediately (`approved_at` will have a date).\n\n**Note:** If this user is already being followed, a `409` HTTP status code will returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"id\"]}}/follow"
						}
					}
				},
				{
					"name": "Get Followers",
					"value": "Get Followers",
					"action": "Get followers",
					"description": "#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all followers including when the relationship began.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/followers"
						}
					}
				},
				{
					"name": "Get Following",
					"value": "Get Following",
					"action": "Get following",
					"description": "#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all user's they follow including when the relationship began.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/following"
						}
					}
				},
				{
					"name": "Get Friends",
					"value": "Get Friends",
					"action": "Get friends",
					"description": "#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all friends for a user including when the relationship began. Friendship is a 2 way relationship where each user follows the other.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/friends"
						}
					}
				},
				{
					"name": "GET Users History",
					"value": "GET Users History",
					"action": "Get watched history",
					"description": "#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info\n\nReturns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.\n\nSpecify a `type` and trakt `item_id` to limit the history for just that item. If the `item_id` is valid, but there is no history, an empty array will be returned.\n\n| Example URL | Returns watches for... |\n|---|---|\n| `/history/movies/12601` | TRON: Legacy |\n| `/history/shows/1388` | All episodes of Breaking Bad |\n| `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |\n| `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/history/{{$parameter[\"type\"]}}/{{$parameter[\"item_id\"]}}"
						}
					}
				},
				{
					"name": "Get Likes",
					"value": "Get Likes",
					"action": "Get likes",
					"description": "#### &#128274; OAuth Optional &#128196; Pagination\n\nGet items a user likes. This will return an array of standard media objects. You can optionally limit the `type` of results to return.\n\n#### Comment Media Objects\n\nIf you add `?extended=comments` to the URL, it will return media objects for each comment like.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/likes/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Get A Users Personal Lists",
					"value": "Get A Users Personal Lists",
					"action": "Get a user's personal lists",
					"description": "#### &#128275; OAuth Optional &#128513; Emojis\n\nReturns all personal lists for a user. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items a specific list contains.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/lists"
						}
					}
				},
				{
					"name": "Create Personal List",
					"value": "Create Personal List",
					"action": "Create personal list",
					"description": "#### &#128274; OAuth Required 🔥 VIP Enhanced\n\nCreate a new personal list. The `name` is the only required field, but the other info is recommended to ask for.\n\n#### Limits\n\nIf the user's list limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| `name` <span style=\"color:red;\">*</a> | string |  | Name of the list. |\n| `description` | string |  | Description for this list. |\n| `privacy` | string | `private` | `private`, `friends`, `public` |\n| `display_numbers` | boolean | `false` | Should each item be numbered? |\n| `allow_comments` | boolean | `true` | Are comments allowed? |\n| `sort_by` | string | `rank` | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |\n| `sort_how` | string | `asc` | `asc`, `desc` |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"id\"]}}/lists"
						}
					}
				},
				{
					"name": "Get All Lists A User Can Collaborate On",
					"value": "Get All Lists A User Can Collaborate On",
					"action": "Get all lists a user can collaborate on",
					"description": "#### &#128275; OAuth Optional\n\nReturns all lists a user can collaborate on. This gives full access to add, remove, and re-order list items. It essentially works just like a list owned by the user, just make sure to use the correct list owner `user` when building the API URLs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/collaborations"
						}
					}
				},
				{
					"name": "Reorder A Users Lists",
					"value": "Reorder A Users Lists",
					"action": "Reorder a user's lists",
					"description": "#### &#128274; OAuth Required\n\nReorder all lists by sending the updated `rank` of list ids. Use the [**/users/:id/lists**](#reference/users/lists) method to get all list ids.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/reorder"
						}
					}
				},
				{
					"name": "Delete A Users Personal List",
					"value": "Delete A Users Personal List",
					"action": "Delete a user's personal list",
					"description": "#### &#128274; OAuth Required\n\nRemove a personal list and all items it contains.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}"
						}
					}
				},
				{
					"name": "Get Personal List",
					"value": "Get Personal List",
					"action": "Get personal list",
					"description": "#### &#128275; OAuth Optional &#128513; Emojis\n\nReturns a single personal list. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items this list contains.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}"
						}
					}
				},
				{
					"name": "Update Personal List",
					"value": "Update Personal List",
					"action": "Update personal list",
					"description": "#### &#128274; OAuth Required\n\nUpdate a personal list by sending 1 or more parameters. If you update the list name, the original slug will still be retained so existing references to this list won't break.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|---|\n| `name` | string | Name of the list. |\n| `description` | string | Description for this list. |\n| `privacy` | string | `private`, `friends`, `public` |\n| `display_numbers` | boolean | Should each item be numbered? |\n| `allow_comments` | boolean | Are comments allowed? |\n| `sort_by` | string | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |\n| `sort_how` | string | `asc`, `desc` |",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}"
						}
					}
				},
				{
					"name": "GET Users Lists Comments",
					"value": "GET Users Lists Comments",
					"action": "Get all list comments",
					"description": "#### &#128275; OAuth Optional &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/comments/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Add Items To Personal List",
					"value": "Add Items To Personal List",
					"action": "Add items to personal list",
					"description": "#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced\n\nAdd one or more items to a personal list. Items can be movies, shows, seasons, episodes, or people.\n\n#### Notes\n\nEach list item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.\n\n#### Limits\n\nIf the user's list item limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n| `people` | array | Array of `person` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/items"
						}
					}
				},
				{
					"name": "Remove Items From Personal List",
					"value": "Remove Items From Personal List",
					"action": "Remove items from personal list",
					"description": "#### &#128274; OAuth Required\n\nRemove one or more items from a personal list.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n| `people` | array | Array of `person` objects. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/items/remove"
						}
					}
				},
				{
					"name": "Reorder Items On A List",
					"value": "Reorder Items On A List",
					"action": "Reorder items on a list",
					"description": "#### &#128274; OAuth Required\n\nReorder all items on a list by sending the updated `rank` of list item ids. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get all list item ids.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/items/reorder"
						}
					}
				},
				{
					"name": "Get Items On A Personal List",
					"value": "Get Items On A Personal List",
					"action": "Get items on a personal list",
					"description": "#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nGet all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.\n\n#### Notes\n\nEach list item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nAll list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/items/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Remove Like On A List",
					"value": "Remove Like On A List",
					"action": "Remove like on a list",
					"description": "#### &#128274; OAuth Required\n\nRemove a like on a list.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/like"
						}
					}
				},
				{
					"name": "Like A List",
					"value": "Like A List",
					"action": "Like a list",
					"description": "#### &#128274; OAuth Required\n\nVotes help determine popular lists. Only one like is allowed per list per user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/like"
						}
					}
				},
				{
					"name": "GET Users Lists Likes",
					"value": "GET Users Lists Likes",
					"action": "Get all users who liked a list",
					"description": "#### &#128275; OAuth Optional &#128196; Pagination\n\nReturns all users who liked a list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/lists/{{$parameter[\"list_id\"]}}/likes"
						}
					}
				},
				{
					"name": "GET Users Ratings",
					"value": "GET Users Ratings",
					"action": "Get ratings",
					"description": "#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info\n\nGet a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/ratings/{{$parameter[\"type\"]}}/{{$parameter[\"rating\"]}}"
						}
					}
				},
				{
					"name": "GET Users Recommendations",
					"value": "GET Users Recommendations",
					"action": "Get personal recommendations",
					"description": "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nReturns the top 50 items a user personally recommendeds to others. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### Notes\n\nEach recommendation contains a `notes` field explaining why the user recommended the item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/recommendations/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				},
				{
					"name": "Get Stats",
					"value": "Get Stats",
					"action": "Get stats",
					"description": "#### &#128275; OAuth Optional\n\nReturns stats about the movies, shows, and episodes a user has watched, collected, and rated.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/stats"
						}
					}
				},
				{
					"name": "GET Users Watched",
					"value": "GET Users Watched",
					"action": "Get watched",
					"description": "#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all movies or shows a user has watched sorted by most plays.\n\nIf `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.\n\nEach `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.\n\nEach `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/watched/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Get Watching",
					"value": "Get Watching",
					"action": "Get watching",
					"description": "#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns a movie or episode if the user is currently watching something.  If they are not, it returns no data and a `204` HTTP status code.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/watching"
						}
					}
				},
				{
					"name": "GET Users Watchlist",
					"value": "GET Users Watchlist",
					"action": "Get watchlist",
					"description": "#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nReturns all items in a user's watchlist filtered by type.\n\n#### Notes\n\nEach watchlist item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nBy default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.\n\nWe also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.\n\n#### Auto Removal\n\nWhen an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.\n\n_**The watchlist should not be used as a list of what the user is actively watching.**_\n\nUse a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}/watchlist/{{$parameter[\"type\"]}}/{{$parameter[\"sort\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/hidden/{section}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "Section",
			"name": "section",
			"required": true,
			"description": "",
			"default": "calendar",
			"type": "options",
			"options": [
				{
					"name": "Calendar",
					"value": "calendar"
				},
				{
					"name": "Progress Watched",
					"value": "progress_watched"
				},
				{
					"name": "Progress Watched Reset",
					"value": "progress_watched_reset"
				},
				{
					"name": "Progress Collected",
					"value": "progress_collected"
				},
				{
					"name": "Recommendations",
					"value": "recommendations"
				},
				{
					"name": "Comments",
					"value": "comments"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Narrow down by element type.",
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
					"name": "Season",
					"value": "season"
				},
				{
					"name": "User",
					"value": "user"
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
						"Users"
					],
					"operation": [
						"Get Hidden Items"
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
						"Users"
					],
					"operation": [
						"Get Hidden Items"
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
						"Users"
					],
					"operation": [
						"Get Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "POST /users/hidden/{section}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "Section",
			"name": "section",
			"required": true,
			"description": "",
			"default": "calendar",
			"type": "options",
			"options": [
				{
					"name": "Calendar",
					"value": "calendar"
				},
				{
					"name": "Progress Watched",
					"value": "progress_watched"
				},
				{
					"name": "Progress Collected",
					"value": "progress_collected"
				},
				{
					"name": "Recommendations",
					"value": "recommendations"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add Hidden Items"
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
						"Users"
					],
					"operation": [
						"Add Hidden Items"
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
						"Users"
					],
					"operation": [
						"Add Hidden Items"
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
						"Users"
					],
					"operation": [
						"Add Hidden Items"
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
						"Users"
					],
					"operation": [
						"Add Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {}\n    ]\n  }\n]",
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
						"Users"
					],
					"operation": [
						"Add Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "POST /users/hidden/{section}/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "Section",
			"name": "section",
			"required": true,
			"description": "",
			"default": "calendar",
			"type": "options",
			"options": [
				{
					"name": "Calendar",
					"value": "calendar"
				},
				{
					"name": "Progress Watched",
					"value": "progress_watched"
				},
				{
					"name": "Progress Collected",
					"value": "progress_collected"
				},
				{
					"name": "Recommendations",
					"value": "recommendations"
				},
				{
					"name": "Comments",
					"value": "comments"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Hidden Items"
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
						"Users"
					],
					"operation": [
						"Remove Hidden Items"
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
						"Users"
					],
					"operation": [
						"Remove Hidden Items"
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
						"Users"
					],
					"operation": [
						"Remove Hidden Items"
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
						"Users"
					],
					"operation": [
						"Remove Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "Shows",
			"name": "shows",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {},\n    \"seasons\": [\n      {}\n    ]\n  }\n]",
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
						"Users"
					],
					"operation": [
						"Remove Hidden Items"
					]
				}
			}
		},
		{
			"displayName": "GET /users/requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Follow Requests"
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
						"Users"
					],
					"operation": [
						"Get Follow Requests"
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
						"Users"
					],
					"operation": [
						"Get Follow Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/requests/following",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Pending Following Requests"
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
						"Users"
					],
					"operation": [
						"Get Pending Following Requests"
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
						"Users"
					],
					"operation": [
						"Get Pending Following Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/requests/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Deny Follow Request"
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
						"Users"
					],
					"operation": [
						"Deny Follow Request"
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
						"Users"
					],
					"operation": [
						"Deny Follow Request"
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
						"Users"
					],
					"operation": [
						"Deny Follow Request"
					]
				}
			}
		},
		{
			"displayName": "POST /users/requests/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Approve Follow Request"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the follower request.",
			"default": "123",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Approve Follow Request"
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
						"Users"
					],
					"operation": [
						"Approve Follow Request"
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
						"Users"
					],
					"operation": [
						"Approve Follow Request"
					]
				}
			}
		},
		{
			"displayName": "GET /users/saved_filters/{section}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Saved Filters"
					]
				}
			}
		},
		{
			"displayName": "Section",
			"name": "section",
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
					"name": "Calendars",
					"value": "calendars"
				},
				{
					"name": "Search",
					"value": "search"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Saved Filters"
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
						"Users"
					],
					"operation": [
						"Get Saved Filters"
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
						"Users"
					],
					"operation": [
						"Get Saved Filters"
					]
				}
			}
		},
		{
			"displayName": "GET /users/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Retrieve Settings"
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
						"Users"
					],
					"operation": [
						"Retrieve Settings"
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
						"Users"
					],
					"operation": [
						"Retrieve Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User Profile"
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
						"Users"
					],
					"operation": [
						"Get User Profile"
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
						"Users"
					],
					"operation": [
						"Get User Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/collection/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Collection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Collection"
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
						"Users"
					],
					"operation": [
						"GET Users Collection"
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
						"Users"
					],
					"operation": [
						"GET Users Collection"
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
						"Users"
					],
					"operation": [
						"GET Users Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/comments/{comment_type}/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Comment Type",
			"name": "comment_type",
			"required": true,
			"description": "",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Reviews",
					"value": "reviews"
				},
				{
					"name": "Shouts",
					"value": "shouts"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
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
					"name": "Lists",
					"value": "lists"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Include Replies",
			"name": "include_replies",
			"description": "include comment replies",
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
				},
				{
					"name": "Only",
					"value": "only"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "include_replies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Comments"
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
						"Users"
					],
					"operation": [
						"Get Comments"
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
						"Users"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{id}/follow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Unfollow This User"
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
						"Users"
					],
					"operation": [
						"Unfollow This User"
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
						"Users"
					],
					"operation": [
						"Unfollow This User"
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
						"Users"
					],
					"operation": [
						"Unfollow This User"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{id}/follow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow This User"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow This User"
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
						"Users"
					],
					"operation": [
						"Follow This User"
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
						"Users"
					],
					"operation": [
						"Follow This User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/followers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Followers"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Followers"
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
						"Users"
					],
					"operation": [
						"Get Followers"
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
						"Users"
					],
					"operation": [
						"Get Followers"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/following",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Following"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Following"
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
						"Users"
					],
					"operation": [
						"Get Following"
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
						"Users"
					],
					"operation": [
						"Get Following"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/friends",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Friends"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Friends"
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
						"Users"
					],
					"operation": [
						"Get Friends"
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
						"Users"
					],
					"operation": [
						"Get Friends"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/history/{type}/{item_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users History"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users History"
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
						"Users"
					],
					"operation": [
						"GET Users History"
					]
				}
			}
		},
		{
			"displayName": "Item Id",
			"name": "item_id",
			"required": true,
			"description": "Trakt ID for a specific item.",
			"default": "123",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users History"
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
						"Users"
					],
					"operation": [
						"GET Users History"
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
						"Users"
					],
					"operation": [
						"GET Users History"
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
						"Users"
					],
					"operation": [
						"GET Users History"
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
						"Users"
					],
					"operation": [
						"GET Users History"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/likes/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Likes"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Likes"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "",
			"default": "comments",
			"type": "options",
			"options": [
				{
					"name": "Comments",
					"value": "comments"
				},
				{
					"name": "Lists",
					"value": "lists"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Likes"
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
						"Users"
					],
					"operation": [
						"Get Likes"
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
						"Users"
					],
					"operation": [
						"Get Likes"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get A Users Personal Lists"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get A Users Personal Lists"
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
						"Users"
					],
					"operation": [
						"Get A Users Personal Lists"
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
						"Users"
					],
					"operation": [
						"Get A Users Personal Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{id}/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
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
						"Users"
					],
					"operation": [
						"Create Personal List"
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
						"Users"
					],
					"operation": [
						"Create Personal List"
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
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "Allow Comments",
			"name": "allow_comments",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "allow_comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "Display Numbers",
			"name": "display_numbers",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "display_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "Privacy",
			"name": "privacy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "privacy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sort_by",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sort_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "Sort How",
			"name": "sort_how",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sort_how",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Personal List"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/lists/collaborations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get All Lists A User Can Collaborate On"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get All Lists A User Can Collaborate On"
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
						"Users"
					],
					"operation": [
						"Get All Lists A User Can Collaborate On"
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
						"Users"
					],
					"operation": [
						"Get All Lists A User Can Collaborate On"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{id}/lists/reorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Reorder A Users Lists"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Reorder A Users Lists"
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
						"Users"
					],
					"operation": [
						"Reorder A Users Lists"
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
						"Users"
					],
					"operation": [
						"Reorder A Users Lists"
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
						"Users"
					],
					"operation": [
						"Reorder A Users Lists"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{id}/lists/{list_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete A Users Personal List"
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
						"Users"
					],
					"operation": [
						"Delete A Users Personal List"
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
						"Users"
					],
					"operation": [
						"Delete A Users Personal List"
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
						"Users"
					],
					"operation": [
						"Delete A Users Personal List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete A Users Personal List"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/lists/{list_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Personal List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Personal List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Personal List"
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
						"Users"
					],
					"operation": [
						"Get Personal List"
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
						"Users"
					],
					"operation": [
						"Get Personal List"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{id}/lists/{list_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Personal List"
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
						"Users"
					],
					"operation": [
						"Update Personal List"
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
						"Users"
					],
					"operation": [
						"Update Personal List"
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
						"Users"
					],
					"operation": [
						"Update Personal List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Personal List"
					]
				}
			}
		},
		{
			"displayName": "Display Numbers",
			"name": "display_numbers",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "display_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Personal List"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Personal List"
					]
				}
			}
		},
		{
			"displayName": "Privacy",
			"name": "privacy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "privacy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Personal List"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sort_by",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sort_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Personal List"
					]
				}
			}
		},
		{
			"displayName": "Sort How",
			"name": "sort_how",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sort_how",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Personal List"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/lists/{list_id}/comments/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Lists Comments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Lists Comments"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Lists Comments"
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
						"Users"
					],
					"operation": [
						"GET Users Lists Comments"
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
						"Users"
					],
					"operation": [
						"GET Users Lists Comments"
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
						"Users"
					],
					"operation": [
						"GET Users Lists Comments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{id}/lists/{list_id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
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
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
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
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
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
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
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
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
					]
				}
			}
		},
		{
			"displayName": "People",
			"name": "people",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "people",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
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
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
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
						"Users"
					],
					"operation": [
						"Add Items To Personal List"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{id}/lists/{list_id}/items/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
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
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
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
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
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
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
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
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
					]
				}
			}
		},
		{
			"displayName": "People",
			"name": "people",
			"type": "json",
			"default": "[\n  {\n    \"ids\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "people",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
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
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
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
						"Users"
					],
					"operation": [
						"Remove Items From Personal List"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{id}/lists/{list_id}/items/reorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Reorder Items On A List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Reorder Items On A List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Reorder Items On A List"
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
						"Users"
					],
					"operation": [
						"Reorder Items On A List"
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
						"Users"
					],
					"operation": [
						"Reorder Items On A List"
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
						"Users"
					],
					"operation": [
						"Reorder Items On A List"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/lists/{list_id}/items/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Items On A Personal List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Items On A Personal List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Items On A Personal List"
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
						"Users"
					],
					"operation": [
						"Get Items On A Personal List"
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
						"Users"
					],
					"operation": [
						"Get Items On A Personal List"
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
						"Users"
					],
					"operation": [
						"Get Items On A Personal List"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{id}/lists/{list_id}/like",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Like On A List"
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
						"Users"
					],
					"operation": [
						"Remove Like On A List"
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
						"Users"
					],
					"operation": [
						"Remove Like On A List"
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
						"Users"
					],
					"operation": [
						"Remove Like On A List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove Like On A List"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{id}/lists/{list_id}/like",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Like A List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Like A List"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Like A List"
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
						"Users"
					],
					"operation": [
						"Like A List"
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
						"Users"
					],
					"operation": [
						"Like A List"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/lists/{list_id}/likes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Lists Likes"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Lists Likes"
					]
				}
			}
		},
		{
			"displayName": "List Id",
			"name": "list_id",
			"required": true,
			"description": "Trakt ID or Trakt slug",
			"default": "star-wars-in-machete-order",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Lists Likes"
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
						"Users"
					],
					"operation": [
						"GET Users Lists Likes"
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
						"Users"
					],
					"operation": [
						"GET Users Lists Likes"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/ratings/{type}/{rating}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Ratings"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Ratings"
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
						"Users"
					],
					"operation": [
						"GET Users Ratings"
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
						"Users"
					],
					"operation": [
						"GET Users Ratings"
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
						"Users"
					],
					"operation": [
						"GET Users Ratings"
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
						"Users"
					],
					"operation": [
						"GET Users Ratings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/recommendations/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Recommendations"
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
						"Users"
					],
					"operation": [
						"GET Users Recommendations"
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
						"Users"
					],
					"operation": [
						"GET Users Recommendations"
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
						"Users"
					],
					"operation": [
						"GET Users Recommendations"
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
						"Users"
					],
					"operation": [
						"GET Users Recommendations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Stats"
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
						"Users"
					],
					"operation": [
						"Get Stats"
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
						"Users"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/watched/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Watched"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Watched"
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
						"Users"
					],
					"operation": [
						"GET Users Watched"
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
						"Users"
					],
					"operation": [
						"GET Users Watched"
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
						"Users"
					],
					"operation": [
						"GET Users Watched"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/watching",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Watching"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Watching"
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
						"Users"
					],
					"operation": [
						"Get Watching"
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
						"Users"
					],
					"operation": [
						"Get Watching"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}/watchlist/{type}/{sort}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Watchlist"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "User slug",
			"default": "sean",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"GET Users Watchlist"
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
						"Users"
					],
					"operation": [
						"GET Users Watchlist"
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
						"Users"
					],
					"operation": [
						"GET Users Watchlist"
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
						"Users"
					],
					"operation": [
						"GET Users Watchlist"
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
						"Users"
					],
					"operation": [
						"GET Users Watchlist"
					]
				}
			}
		},
];
