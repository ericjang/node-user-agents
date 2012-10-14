var fs = require('fs'),
    xml2js = require('xml2js');
//a bunch of random user agents and browsers

var agents = (function(){
	var c = {};
	c.agents = [];
	
	c.setStrings = function(){
		var parser = new xml2js.Parser();
		fs.readFile(__dirname + '/allagents.xml', function(err, data) {
		    parser.parseString(data, function (err, result) {
					for (var i in result['user-agents']['user-agent']) {
						c.agents.push(result['user-agents']['user-agent'][i]['String'][0])
					}
		    });
		});
	}
	
	c.randomAgentString = function(){
		//fetches a random UserAgent String
		var randomIndex = Math.floor(Math.random()*c.agents.length);
		return c.agents[randomIndex];
	}
	return c;
	
})();

agents.setStrings();

module.exports = agents;