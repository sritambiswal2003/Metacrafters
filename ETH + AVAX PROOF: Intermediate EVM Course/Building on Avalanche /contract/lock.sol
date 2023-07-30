// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Lock {
    uint public unlockTime;
    address public owner;
    uint public lockedAmount;

    event Withdrawal(address indexed owner, uint amount);

    constructor(uint _unlockTime) payable {
        require(_unlockTime > block.timestamp, "Unlock time should be in the future");

        unlockTime = _unlockTime;
        owner = msg.sender;
        lockedAmount = msg.value;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You aren't the owner");
        _;
    }

    function withdraw() public onlyOwner {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");

        uint amount = lockedAmount;
        lockedAmount = 0;

        emit Withdrawal(owner, amount);

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Transfer failed");
    }
}

