var expect = require('expect')
var App = require('../src/App')

describe('App#stopWedding', function(){
	it('hides all components except Objection component', function(){
		// type dummy input
		// type "objection" when asked to proceed
		// the only text on the whole page should say "love is dead"
		expect(true).toEqual(false)
	})
})

describe('App#interpolateString', function(){
	it('interpolates all values inside [brackets]', function(){
		let fakeState = {bride: 1, groom: 2}
		var text = "[bride], do you take [groom] to be your lawfully wedded husband?"
		expect(App.interpolateString(fakeState[bride])).toEqual("1, do you take 2 to be your lawfully wedded husband?")
	})

	it('interpolates all values inside [brackets] even after App has been reset with reset button')
	// repeat the above test, and ensure that bride and groom values
	// have actually changed
})






