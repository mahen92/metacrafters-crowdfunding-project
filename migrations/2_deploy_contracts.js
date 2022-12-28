const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const FundFactory = artifacts.require("FundFactory");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {   
    const factory = await deployProxy(FundFactory, { deployer });
    const token = await deployProxy(Token, [100000000], { deployer });
};