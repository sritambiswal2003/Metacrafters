// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address private owner;

    constructor() ERC20("Darth", "DRT") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function.");
        _;
    }

    // From remix, the contract owner should be able to mint tokens to a provided address.
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Any user should be able to burn tokens.
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    // Any user should be able to transfer tokens.
    function transfer(address to, uint256 amount) public override returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }
}
