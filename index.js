var CountryCoo = require('./conf/CountryCodesToCoo');
var tz = require("tz-lookup");
var moment = require('moment-timezone');


var country2timezone = function(country){
    var countryCoo = CountryCoo[country.toLowerCase()];
    var tzwhere =  tz(countryCoo[0],countryCoo[1]);

    var m1 = moment();
	return moment.tz(tzwhere).format();
    //return moment.tz(tzwhere).format('Z');

}

module.exports = country2timezone