const MyToken = artifacts.require('MyToken');

contract('MyToken', accounts => {

beforeEach(async function(){
    this.token = await MyToken.new("GOLD", "GLD");
});
    describe('token attributes', function(){
        it('has the correct name', function(){

        });
        it('has the correct symbol', function(){

        });
        
        it('has the correct decimals', function(){

        });
    });
});