import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authenticationOAuthDescription } from './resources/authentication-o-auth';
import { authenticationDevicesDescription } from './resources/authentication-devices';
import { calendarsDescription } from './resources/calendars';
import { checkinDescription } from './resources/checkin';
import { certificationsDescription } from './resources/certifications';
import { commentsDescription } from './resources/comments';
import { countriesDescription } from './resources/countries';
import { genresDescription } from './resources/genres';
import { languagesDescription } from './resources/languages';
import { listsDescription } from './resources/lists';
import { moviesDescription } from './resources/movies';
import { networksDescription } from './resources/networks';
import { peopleDescription } from './resources/people';
import { recommendationsDescription } from './resources/recommendations';
import { scrobbleDescription } from './resources/scrobble';
import { searchDescription } from './resources/search';
import { showsDescription } from './resources/shows';
import { seasonsDescription } from './resources/seasons';
import { episodesDescription } from './resources/episodes';
import { syncDescription } from './resources/sync';
import { usersDescription } from './resources/users';

export class TraktTv implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'trakt-tv',
		name: 'N8nDevTraktTv',
		icon: { light: 'file:./trakt-tv.png', dark: 'file:./trakt-tv.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'At Trakt, we collect lots of interesting information about what tv shows and movies everyone is watching. Part of the fun with such data is making it available for anyone to mash up and use on thei..',
		defaults: { name: 'trakt-tv' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevTraktTvApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Authentication O Auth",
					"value": "Authentication O Auth",
					"description": "The API uses OAuth2.  If you know what's up with OAuth2, grab your library and starting rolling. If you have access to a web browser (mobile app, desktop app, website), use standard **OAuth**. If you don't have web browser access (media center plugins, smart watches, smart TVs, command line scripts, system services), use **Device** authentication.\n\nTo obtain a `client_id` and `client_secret`, create an application on the Trakt website. Here are some helpful links to get your started:\n\n- [Create a new API app](https://trakt.tv/oauth/applications/new)\n\n- [View your API apps](https://trakt.tv/oauth/applications)\n\n---\n\n#### Application Flow\n\n1. **Redirect to request Trakt access.** Using the [**/oauth/authorize**](/reference/authentication-oauth/authorize) method, construct then redirect to this URL. The Trakt website will request permissions for your app and the user will have the opportunity to sign up for a new Trakt account or sign in with their existing account.\n\n2. **Trakt redirects back to your site.** If the user accepts your request, Trakt redirects back to your site with a temporary code in a `code` GET parameter as well as the state (if provided) in the previous step in a `state` parameter. If the states don’t match, the request has been created by a third party and the process should be aborted.\n\n3. **Exchange the code for an access token.** If everything looks good in step 2, exchange the `code` for an access token using the [**/oauth/token**](reference/authentication-oauth/get-token/) method. Save the `access_token` so your app can authenticate the user by sending the `Authorization` header as indicated below or in any example code. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate."
				},
				{
					"name": "Authentication Devices",
					"value": "Authentication Devices",
					"description": "Device authentication is for apps and services with limited input or display capabilities. This include media center plugins, smart watches, smart TVs, command line scripts, and system services.\n\nYour app displays an alphanumeric code (typically 8 characters) to the user. They are then instructed to visit the verification URL on their computer or mobile device. After entering the code, the user will be prompted to grant permission for your app. After your app gets permissions, the device receives an `access_token` and works like standard OAuth from that point on. More details below.\n\n---\n\n#### Application Flow\n\n1. **Generate codes.** Your app calls [**/oauth/device/code**](/reference/authentication-devices/code) to generate new codes. Save this entire response for later use.\n\n2. **Display the code.** Display the `user_code` and instruct the user to visit the `verification_url` on their computer or mobile device.\n\n3. **Poll for authorization.** Poll the [**/oauth/device/token**](/reference/authentication-devices/token) method to see if the user successfully authorizes your app. Use the `device_code` and poll at the `interval` (in seconds) to check if the user has authorized your app. Check the docs below for the specific error codes you need to handle. Use `expires_in` to stop polling after that many seconds, and gracefully instruct the user to restart the process. **It is important to poll at the correct interval and also stop polling when expired.**\n\n4. **Successful authorization.** When you receive a `200` success response, save the `access_token` so your app can authenticate the user in methods that require it. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. It's normal OAuth from this point.\n\n---\n\n#### User Flow\n\n1. **Call to action.** Consider your user experience when asking a user to connect their Trakt account. For some devices this will be right away, and for others it might be later in the experience.\n\n2. **Display the code.** When a user clicks the call to action, your app calls [**/oauth/device/code**](/reference/authentication-devices/code) to generate new codes. In your UI, display the `user_code` and instruct the user to visit the `verification_url` on their computer or mobile device. The `user_code` is typically 8 characters, so make sure there is enough room to display the full code.\n\n3. **Authorizing your app.** When the user visits the `verification_url` it first checks to make sure they're signed in. If not signed in, they'll be able to or can sign up for a new account. After entering the code, the user will be prompted to grant permission for your app. Once approved, the user will see a success message indicating their device is connected.\n\n4. **Confirm successful authorization.** Your app will be polling to see if the user successfully authorizes your app. Once they have, refresh your UI to indicate a successful connection has been made."
				},
				{
					"name": "Calendars",
					"value": "Calendars",
					"description": "By default, the calendar will return all shows or movies for the specified time period and can be global or user specific. The `start_date` defaults to today and `days` to 7. The maximum amount of `days` you can send is `33`. All dates (including the `start_date` and `first_aired`) are in UTC, so it's up to your app to handle any offsets based on the user's time zone.\n\nThe `my` calendar displays episodes for all shows that have been watched, collected, or watchlisted plus individual episodes on the watchlist. It will remove any shows that have been hidden from the calendar. The `all` calendar displays info for all shows airing during the specified period."
				},
				{
					"name": "Checkin",
					"value": "Checkin",
					"description": "Checking in is a manual action used by mobile apps allowing the user to indicate what they are watching right now. While not as effortless as scrobbling, checkins help fill in the gaps. You might be watching live tv, at a friend's house, or watching a movie in theaters. You can simply checkin from your phone or tablet in those situations. The item will display as *watching* on the site, then automatically switch to *watched* status once the duration has elapsed."
				},
				{
					"name": "Certifications",
					"value": "Certifications",
					"description": ""
				},
				{
					"name": "Comments",
					"value": "Comments",
					"description": "Comments are attached to any movie, show, season, episode, or list and can be a quick shout or a more detailed review. Each comment can have replies and can be liked. These likes are used to determine popular comments. Comments must follow these rules and your app should indicate these to the user. Failure to adhere to these rules could suspend the user's commenting abilities.\n\n- Comments must be at least 5 words.\n\n- Comments 200 words or longer will be automatically marked as a review.\n\n- Correctly indicate if the comment contains spoilers.\n\n- Only write comments in English - **This is important!**\n\n- **Do not include** app specific text like (via App Name) or #apphashtag. This clutters up the comments and failure to clean the comment text could get your app blacklisted from commenting.\n\n#### Possible Error Responses\n\n| Code | Description |\n|---|---|\n| `401` | Invalid user\n| `401` | User banned from commenting\n| `404` | Item not found or doesn't allow comments\n| `409` | Comment can't be deleted\n| `422` | Validation errors\n\n#### Validation Errors\n\nIf a comment doesn't pass validation, it returns a `422` HTTP error code and an array of validation errors in the response. The validation errors could include:\n\n| Error Message |\n|---|\n| `must be at least 5 words` |\n| `must be written in English` |\n\n#### Comment Formatting\n\nComments support [**markdown**](https://en.wikipedia.org/wiki/Markdown) formatting so you'll want to render this in your app so it matches what the website does. In addition, we support inline spoiler tags like `[spoiler]text[/spoiler]` which you should also handle independent of the top level `spoiler` attribute."
				},
				{
					"name": "Countries",
					"value": "Countries",
					"description": ""
				},
				{
					"name": "Genres",
					"value": "Genres",
					"description": ""
				},
				{
					"name": "Languages",
					"value": "Languages",
					"description": ""
				},
				{
					"name": "Lists",
					"value": "Lists",
					"description": ""
				},
				{
					"name": "Movies",
					"value": "Movies",
					"description": ""
				},
				{
					"name": "Networks",
					"value": "Networks",
					"description": ""
				},
				{
					"name": "People",
					"value": "People",
					"description": ""
				},
				{
					"name": "Recommendations",
					"value": "Recommendations",
					"description": "Trakt social recommendations use all the `Recommendations` lists from the users you follow. The more users you follow with similar tastes, the better your recommendations will be. We also use other factors for the algorithm to further personalize what gets recommended."
				},
				{
					"name": "Scrobble",
					"value": "Scrobble",
					"description": "Scrobbling is an automatic way to track what a user is watching in a media center. The media center should send events that correspond to starting, pausing, and stopping (or finishing) watching a movie or episode."
				},
				{
					"name": "Search",
					"value": "Search",
					"description": "Searches can use queries or ID lookups. Queries will search text fields like the title and overview. ID lookups are helpful if you have an external ID and want to get the Trakt ID and info. These methods can search for movies, shows, episodes, people, and lists."
				},
				{
					"name": "Shows",
					"value": "Shows",
					"description": ""
				},
				{
					"name": "Seasons",
					"value": "Seasons",
					"description": ""
				},
				{
					"name": "Episodes",
					"value": "Episodes",
					"description": ""
				},
				{
					"name": "Sync",
					"value": "Sync",
					"description": "Syncing with trakt opens up quite a few cool features. Most importantly, trakt can serve as a cloud based backup for the data in your app. This is especially useful when rebuilding a media center or installing a mobile app on your new phone. It can also be nice to sync up multiple media centers with a central trakt account. If everything is in sync, your media can be managed from trakt and be reflected in your apps.\n\n### Media objects for syncing\n\nAs a baseline, all *add* and *remove* sync methods accept arrays of `movies`, `shows`, and `episodes`. Each of these top level array elements should themselves be an array of standard `movie`, `show`, or `episode` objects. Full examples are in the intro section called **Standard Media Objects**. Keep in mind that `episode` objects really only need the `ids` so it can find an exact match. This is useful for absolute ordered shows. Some methods also have optional metadata you can attach, so check the docs for each specific method.\n\nMedia objects will be matched by ID first, then fall back to title and year. IDs will be matched in this order `trakt`, `imdb`, `tmdb`, `tvdb`, and `slug`. If nothing is found, it will match on the `title` and `year`. If still nothing, it would use just the `title` (or `name` for people) and find the most current object that exists.\n\n### Watched History Sync\n\nThis is a 2 way sync that will get items from trakt to sync locally, plus find anything new and sync back to trakt. Perform this sync on startup or at set intervals (i.e. once every day) to keep everything in sync. *This will only send data to trakt and not remove it.*\n\n### Collection Sync\n\nIt's very handy to have a snapshot on trakt of everything you have available to watch locally. Syncing your local connection will do just that. *This will only send data to trakt and not remove it.*\n\n### Clean Collection\n\nCleaning a collection involves comparing the trakt collection to what exists locally. This will remove items from the trakt collection if they don't exist locally anymore. You should make this clear to the user that data might be removed from trakt."
				},
				{
					"name": "Users",
					"value": "Users",
					"description": "User's with public data will return info with all GET methods. Private user's (including yourself) require valid OAuth and a friend relationship to return data.\n\n### Username vs. Slug\n\nAll `users` methods should use the `slug` to identify the user. The `slug` is a URL safe and globally unique version of the `username`.\n\n### Special ID for the OAuth user\n\nIf you send valid OAuth, you can use `me` to identify the OAuth user instead of needing their actual slug. You can of course still use their actual slug, it's up to you.\n\n### Extra Headers\n\nIf valid OAuth is sent, additional headers will be sent to better determine it is a data permissions issue (they aren't friends) and not bad OAuth. For example, you might try and access a private user's list you aren't friends with. This will return a `401` HTTP status code and the additional headers. This means the OAuth is valid, but authorization ultimately failed because there is no friend relationship.\n\n| Header | Value |\n|---|---|\n| `X-Private-User` | `true` or `false` |\n\n### Creating New Users\n\nSince the API uses OAuth, users can create a new account during that flow if they need to. As far as your app is concerned, you'll still receive OAuth tokens no matter if they sign in with an existing account or create a new one."
				}
			],
			"default": ""
		},
		...authenticationOAuthDescription,
		...authenticationDevicesDescription,
		...calendarsDescription,
		...checkinDescription,
		...certificationsDescription,
		...commentsDescription,
		...countriesDescription,
		...genresDescription,
		...languagesDescription,
		...listsDescription,
		...moviesDescription,
		...networksDescription,
		...peopleDescription,
		...recommendationsDescription,
		...scrobbleDescription,
		...searchDescription,
		...showsDescription,
		...seasonsDescription,
		...episodesDescription,
		...syncDescription,
		...usersDescription
		],
	};
}
