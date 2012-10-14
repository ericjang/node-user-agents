node-user-agents
================

# agents

Quick HTTP user agent headers for slightly-immoral-and-very-improper web scraping. It's so stupidly simple that you could probably write this yourself.

##Usage:

```bash
npm install node-user-agents
```

```JavaScript
var request = require('request')
	, agents = require('agents');

request({'uri':'wikipedia.org','headers':{'User-Agent':agents.randomAgentString()}},function(error,response,body){
	console.log(body);
});
//See? It's like taking candy from a baby.
```
## Working use cases:

- Scripting HTTP requests to Wikipedia (has terrible bot detection)
- Any other site that isn't as big as Google to be able to invest in super-smart bot-detection systems.


## Non-working use cases:

- Google (based on IP address and no more than 20 requests in a minute)

