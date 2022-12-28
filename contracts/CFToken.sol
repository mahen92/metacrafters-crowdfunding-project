pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/*
The CFToken derives all the functions and variables from the ERC20 Contract. 
At the time of deloyment o the contract the total supply of the token is minted
and sent to the deployer of the token. 
*/
contract CFToken is ERC20{
     address owner;
     constructor(uint256 totalSupply) ERC20("CFToken","CF"){
         owner=msg.sender;
        _mint(owner, totalSupply);
     }
}