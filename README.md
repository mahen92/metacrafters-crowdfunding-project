# metacrafters-crowdfunding-project
The project consists of three smart contracts:
1. FundFactory.sol
2. Fund.sol
3. CFToken.sol

The FundFactory.sol is used to generate the Fund contracts. The factory pattern is being used instead of a single smart contract for all the crowdfunding projects
is to enable better scaling. There could be hundreds of funds created with thousands of addresses associated with them and tracking all of them in a single
smart contract will become tedious and costly. Using different smart contracts generated from the FundFactory for each Fund is much easier to track and we
can support multiple funds parallely.

The FundFactory has been made ugradeable using OpenZeppelin. We have not made the Fund contract as ugradeable as each instance of the contract has to be set
logically for complete trust. However since we have made the FundFactory ugradeable we can easily relace the logic for the Fund contract as well(we cannot do
it for a fund that is in progress).

The CFToken is derived from ERC20.sol and it inherits all the functions of the ERC20 token. All the fund contracts use the CFToken for tracking the 
funds.

