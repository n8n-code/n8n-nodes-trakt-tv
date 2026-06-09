# @n8n-dev/n8n-nodes-trakt-tv

![trakt-tv Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-trakt-tv.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-trakt-tv)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing trakt-tv API integrations by hand.**

Every time you connect n8n to trakt-tv, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to trakt-tv took 5 minutes, not half a day?**

This node gives you **21+ resources** out of the box: **Authentication O Auth**, **Authentication Devices**, **Calendars**, **Checkin**, **Certifications**, and 16 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-trakt-tv
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-trakt-tv`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **trakt-tv API** → paste your API key
3. Drag the **trakt-tv** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Authentication O Auth | Get authorize application, Post revoke an accesstoken, Post exchange refreshtoken for accesstoken |
| Authentication Devices | Post generate new device codes, Post poll for the accesstoken |
| Calendars | Get dvd releases, Get movies, Get new shows, Get season premieres, Get shows, Get dvd releases, Get movies, Get new shows, Get season premieres, Get shows |
| Checkin | Delete any active checkins, Post check into an item |
| Certifications | Get certifications |
| Comments | Post a comment, Get recently created comments, Get trending comments, Get recently updated comments, Delete a comment or reply, Get a comment or reply, Put update a comment or reply, Get the attached media item, Delete remove like on a comment, Post like a comment, Get all users who liked a comment, Get replies for a comment, Post a reply for a comment |
| Countries | Get countries |
| Genres | Get genres |
| Languages | Get languages |
| Lists | Get popular lists, Get trending lists, Get list, Get all list comments, Get items on a list, Get all users who liked a list |
| Movies | Get the most anticipated movies, Get the weekend box office, Get the most collected movies, Get the most played movies, Get popular movies, Get the most recommended movies, Get trending movies, Get recently updated movie trakt ids, Get recently updated movies, Get the most watched movies, Get a movie, Get all movie aliases, Get all movie comments, Get lists containing this movie, Get all people for a movie, Get movie ratings, Get related movies, Get all movie releases, Get movie stats, Get movie studios, Get all movie translations, Get users watching right now |
| Networks | Get networks |
| People | Get recently updated people trakt ids, Get recently updated people, Get a single person, Get lists containing this person, Get movie credits, Get show credits |
| Recommendations | Get movie recommendations, Delete hide a movie recommendation, Get show recommendations, Delete hide a show recommendation |
| Scrobble | Post pause watching in a media center, Post start watching in a media center, Post stop or finish watching in a media center |
| Search | Get id lookup results, Get text query results |
| Shows | Get the most anticipated shows, Get the most collected shows, Get the most played shows, Get popular shows, Get the most recommended shows, Get trending shows, Get recently updated show trakt ids, Get recently updated shows, Get the most watched shows, Get a single show, Get all show aliases, Get all show certifications, Get all show comments, Get last episode, Get lists containing this show, Get next episode, Get all people for a show, Get show collection progress, Get show watched progress, Delete undo reset show progress, Post reset show progress, Get show ratings, Get related shows, Get show stats, Get show studios, Get all show translations, Get users watching right now |
| Seasons | Get all seasons for a show, Get single season for a show, Get all season comments, Get lists containing this season, Get all people for a season, Get season ratings, Get season stats, Get all season translations, Get users watching right now |
| Episodes | Get a single episode for a show, Get all episode comments, Get lists containing this episode, Get all people for an episode, Get episode ratings, Get episode stats, Get all episode translations, Get users watching right now |
| Sync | Post add items to collection, Post remove items from collection, Get collection, Post add items to watched history, Post remove items from history, Get watched history, Get last activity, Delete remove a playback item, Get playback progress, Post add new ratings, Post remove ratings, Get ratings, Post add items to personal recommendations, Post remove items from personal recommendations, Post reorder personally recommended items, Get personal recommendations, Get watched, Post add items to watchlist, Post remove items from watchlist, Post reorder watchlist items, Get watchlist |
| Users | Get hidden items, Post add hidden items, Post remove hidden items, Get follow requests, Get pending following requests, Delete deny follow request, Post approve follow request, Get saved filters, Get retrieve settings, Get user profile, Get collection, Get comments, Delete unfollow this user, Post follow this user, Get followers, Get following, Get friends, Get watched history, Get likes, Get a users personal lists, Post create personal list, Get all lists a user can collaborate on, Post reorder a users lists, Delete a users personal list, Get personal list, Put update personal list, Get all list comments, Post add items to personal list, Post remove items from personal list, Post reorder items on a list, Get items on a personal list, Delete remove like on a list, Post like a list, Get all users who liked a list, Get ratings, Get personal recommendations, Get stats, Get watched, Get watching, Get watchlist |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from trakt-tv docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official trakt-tv OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **trakt-tv** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the trakt-tv API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
