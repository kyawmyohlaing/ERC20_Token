var MyToken = artifacts.require("./MyToken.sol");
var initialSupply = 10000;

module.exports = function(deployer) {
  deployer.deploy(MyToken, initialSupply);
};
