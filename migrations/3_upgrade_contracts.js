const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const FundFactory = artifacts.require("FundFactory");
const FundFactory2 = artifacts.require("FundFactory2");

module.exports = async (deployer) => {   
    const existing = await FundFactory.deployed();
    console.log('Existing Address ===', existing.address);

    const instance = await upgradeProxy(existing.address, FundFactory2, { deployer });
    console.log("Upgraded Address ===", instance.address);
};
