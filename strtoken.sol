// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public tokenName = "sritam";
    string public tokenAbbrv ="srt";
    uint256 public totalSupply= 20;
    mapping(address => uint256) public balances;

    constructor(string memory _name, string memory _abbrv, uint256 _intSupply) {
        tokenName = _name;
        tokenAbbrv = _abbrv;
        totalSupply = _intSupply;
        balances[msg.sender] = _intSupply;
    }

    function mint(address _address, uint256 _value) public {
        require(_value > 0, "Value must be greater than zero");

        totalSupply += _value;
        balances[_address] += _value;
    }

    function burn(uint256 _value) public {
        address sender = msg.sender;
        require(_value > 0, "Value must be greater than zero");
        require(balances[sender] >= _value, "Insufficient balance");

        totalSupply -= _value;
        balances[sender] -= _value;
    }
}
