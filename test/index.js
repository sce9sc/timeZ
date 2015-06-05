var should = require('chai').should();
var timez = require('../index.js');



describe('#test',function(){
	it('return this is a test', function(){
		timez('GB').should.equal('+01:00')
		
	})
	
	
})