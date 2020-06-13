var MyToken = artifacts.require("./MyToken.sol");
var initialSupply = 2100000000000000;

module.exports = function(deployer) {
  deployer.deploy(MyToken, initialSupply);
};
