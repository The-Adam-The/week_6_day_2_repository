//install mocha as a dev dependency using npm

const assert = require('assert');
const Taxi = require('../taxi.js')

//'describe' is an organisational function from Mocha
describe('Taxi', function(){

    let taxi;

    this.beforeEach(function(){
        taxi = new Taxi('Toyota', 'Prius', []);
    });

    it('should have a manufacturer', function() {//it is a readable expression for the tester
        assert.strictEqual( taxi.manufacturer, 'Toyota');
    }); 
    
    it('should have a model', function() {
        assert.strictEqual(taxi.model, 'Prius');
    });

    describe('passengers', function() {
        it('should start with no passengers', function() {
            assert.deepStrictEqual(taxi.passengers, []);
        }); 
    });
});
