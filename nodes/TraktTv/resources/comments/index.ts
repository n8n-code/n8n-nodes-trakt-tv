import type { INodeProperties } from 'n8n-workflow';

export const commentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					]
				}
			},
			"options": [
				{
					"name": "Post A Comment",
					"value": "Post A Comment",
					"action": "Post a comment",
					"description": "#### &#128274; OAuth Required &#128513; Emojis\n\nAdd a new comment to a movie, show, season, episode, or list. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | | `movie`, `show`, `season`, `episode`, or `list` object. (see examples &#8594;) |\n| `comment` <span style=\"color:red;\">*</a> | string |  | Text for the comment. |\n| `spoiler` | boolean | `false` | Is this a spoiler? |\n| `sharing`  | object | | Control sharing to any connected social networks. (see below &#8595;) |\n\n#### Sharing\n\nThe `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.\n\n| Key | Type |\n|---|---|\n| `twitter` | boolean |\n| `tumblr` | boolean |\n| `medium` | boolean |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/comments"
						}
					}
				},
				{
					"name": "Get Recently Created Comments",
					"value": "Get Recently Created Comments",
					"action": "Get recently created comments",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis\n\nReturns the most recently written comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/recent/{{$parameter[\"comment_type\"]}}/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Get Trending Comments",
					"value": "Get Trending Comments",
					"action": "Get trending comments",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis\n\nReturns all comments with the most likes and replies over the last 7 days. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/trending/{{$parameter[\"comment_type\"]}}/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Get Recently Updated Comments",
					"value": "Get Recently Updated Comments",
					"action": "Get recently updated comments",
					"description": "#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis\n\nReturns the most recently updated comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/updates/{{$parameter[\"comment_type\"]}}/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Delete A Comment Or Reply",
					"value": "Delete A Comment Or Reply",
					"action": "Delete a comment or reply",
					"description": "#### &#128274; OAuth Required\n\nDelete a single comment. The OAuth user must match the author of the comment in order to delete it. If not, a `401` HTTP status code is returned. The comment must also be less than 2 weeks old or have 0 replies. If not, a `409` HTTP status is returned.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/comments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get A Comment Or Reply",
					"value": "Get A Comment Or Reply",
					"action": "Get a comment or reply",
					"description": "####  &#128513; Emojis\n\nReturns a single comment and indicates how many replies it has. Use [**/comments/:id/replies**](/reference/comments/replies/) to get the actual replies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update A Comment Or Reply",
					"value": "Update A Comment Or Reply",
					"action": "Update a comment or reply",
					"description": "#### &#128274; OAuth Required &#128513; Emojis\n\nUpdate a single comment. The OAuth user must match the author of the comment in order to update it. If not, a `401` HTTP status is returned.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| `comment` | string |  | Text for the comment. |\n| `spoiler` | boolean | `false` | Is this a spoiler? |",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/comments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get The Attached Media Item",
					"value": "Get The Attached Media Item",
					"action": "Get the attached media item",
					"description": "#### &#10024; Extended Info\n\nReturns the media item this comment is attached to. The media type can be `movie`, `show`, `season`, `episode`, or `list` and it also returns the standard media object for that media type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/{{$parameter[\"id\"]}}/item"
						}
					}
				},
				{
					"name": "Remove Like On A Comment",
					"value": "Remove Like On A Comment",
					"action": "Remove like on a comment",
					"description": "#### &#128274; OAuth Required\n\nRemove a like on a comment.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/comments/{{$parameter[\"id\"]}}/like"
						}
					}
				},
				{
					"name": "Like A Comment",
					"value": "Like A Comment",
					"action": "Like a comment",
					"description": "#### &#128274; OAuth Required\n\nVotes help determine popular comments. Only one like is allowed per comment per user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/comments/{{$parameter[\"id\"]}}/like"
						}
					}
				},
				{
					"name": "Get All Users Who Liked A Comment",
					"value": "Get All Users Who Liked A Comment",
					"action": "Get all users who liked a comment",
					"description": "#### &#128196; Pagination\n\nReturns all users who liked a comment. If you only need the `replies` count, the main `comment` object already has that, so no need to use this method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/{{$parameter[\"id\"]}}/likes"
						}
					}
				},
				{
					"name": "Get Replies For A Comment",
					"value": "Get Replies For A Comment",
					"action": "Get replies for a comment",
					"description": "#### &#128196; Pagination &#128513; Emojis\n\nReturns all replies for a comment. It is possible these replies could have replies themselves, so in that case you would just call [**/comments/:id/replies**](/reference/comments/replies/) again with the new comment `id`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/{{$parameter[\"id\"]}}/replies"
						}
					}
				},
				{
					"name": "Post A Reply For A Comment",
					"value": "Post A Reply For A Comment",
					"action": "Post a reply for a comment",
					"description": "#### &#128274; OAuth Required &#128513; Emojis\n\nAdd a new reply to an existing comment. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| `comment` <span style=\"color:red;\">*</a> | string |  | Text for the reply. |\n| `spoiler` | boolean | `false` | Is this a spoiler? |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/comments/{{$parameter[\"id\"]}}/replies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Comment"
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
						"Comments"
					],
					"operation": [
						"Post A Comment"
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
						"Comments"
					],
					"operation": [
						"Post A Comment"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Comment"
					]
				}
			}
		},
		{
			"displayName": "Movie",
			"name": "movie",
			"type": "json",
			"default": "{\n  \"ids\": {}\n}",
			"routing": {
				"send": {
					"property": "movie",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Comment"
					]
				}
			}
		},
		{
			"displayName": "Sharing",
			"name": "sharing",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sharing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Comment"
					]
				}
			}
		},
		{
			"displayName": "Spoiler",
			"name": "spoiler",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "spoiler",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Comment"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/recent/{comment_type}/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get Recently Created Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Created Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Created Comments"
					]
				}
			}
		},
		{
			"displayName": "Include Replies",
			"name": "include_replies",
			"description": "include comment replies",
			"default": "false",
			"type": "string",
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
						"Comments"
					],
					"operation": [
						"Get Recently Created Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Created Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Created Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/trending/{comment_type}/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get Trending Comments"
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
						"Comments"
					],
					"operation": [
						"Get Trending Comments"
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
						"Comments"
					],
					"operation": [
						"Get Trending Comments"
					]
				}
			}
		},
		{
			"displayName": "Include Replies",
			"name": "include_replies",
			"description": "include comment replies",
			"default": "false",
			"type": "string",
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
						"Comments"
					],
					"operation": [
						"Get Trending Comments"
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
						"Comments"
					],
					"operation": [
						"Get Trending Comments"
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
						"Comments"
					],
					"operation": [
						"Get Trending Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/updates/{comment_type}/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get Recently Updated Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Updated Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Updated Comments"
					]
				}
			}
		},
		{
			"displayName": "Include Replies",
			"name": "include_replies",
			"description": "include comment replies",
			"default": "false",
			"type": "string",
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
						"Comments"
					],
					"operation": [
						"Get Recently Updated Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Updated Comments"
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
						"Comments"
					],
					"operation": [
						"Get Recently Updated Comments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /comments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Delete A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Delete A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Delete A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Delete A Comment Or Reply"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get A Comment Or Reply"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "A specific comment ID.",
			"default": "417",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Get A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Get A Comment Or Reply"
					]
				}
			}
		},
		{
			"displayName": "PUT /comments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Update A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Update A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Update A Comment Or Reply"
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
						"Comments"
					],
					"operation": [
						"Update A Comment Or Reply"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Update A Comment Or Reply"
					]
				}
			}
		},
		{
			"displayName": "Spoiler",
			"name": "spoiler",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "spoiler",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Update A Comment Or Reply"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/{id}/item",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get The Attached Media Item"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "A specific comment ID.",
			"default": "417",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get The Attached Media Item"
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
						"Comments"
					],
					"operation": [
						"Get The Attached Media Item"
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
						"Comments"
					],
					"operation": [
						"Get The Attached Media Item"
					]
				}
			}
		},
		{
			"displayName": "DELETE /comments/{id}/like",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Remove Like On A Comment"
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
						"Comments"
					],
					"operation": [
						"Remove Like On A Comment"
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
						"Comments"
					],
					"operation": [
						"Remove Like On A Comment"
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
						"Comments"
					],
					"operation": [
						"Remove Like On A Comment"
					]
				}
			}
		},
		{
			"displayName": "POST /comments/{id}/like",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Like A Comment"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "A specific comment ID.",
			"default": "417",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Like A Comment"
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
						"Comments"
					],
					"operation": [
						"Like A Comment"
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
						"Comments"
					],
					"operation": [
						"Like A Comment"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/{id}/likes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get All Users Who Liked A Comment"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "A specific comment ID.",
			"default": "417",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get All Users Who Liked A Comment"
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
						"Comments"
					],
					"operation": [
						"Get All Users Who Liked A Comment"
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
						"Comments"
					],
					"operation": [
						"Get All Users Who Liked A Comment"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/{id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get Replies For A Comment"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "A specific comment ID.",
			"default": "417",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Get Replies For A Comment"
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
						"Comments"
					],
					"operation": [
						"Get Replies For A Comment"
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
						"Comments"
					],
					"operation": [
						"Get Replies For A Comment"
					]
				}
			}
		},
		{
			"displayName": "POST /comments/{id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Reply For A Comment"
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
						"Comments"
					],
					"operation": [
						"Post A Reply For A Comment"
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
						"Comments"
					],
					"operation": [
						"Post A Reply For A Comment"
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
						"Comments"
					],
					"operation": [
						"Post A Reply For A Comment"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Reply For A Comment"
					]
				}
			}
		},
		{
			"displayName": "Spoiler",
			"name": "spoiler",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "spoiler",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comments"
					],
					"operation": [
						"Post A Reply For A Comment"
					]
				}
			}
		},
];
