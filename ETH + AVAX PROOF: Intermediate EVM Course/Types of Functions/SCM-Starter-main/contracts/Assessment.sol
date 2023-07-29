// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SCM {
    address payable public owner;
    uint256 public balance;

    event Deposit(uint256 amount);
    event Withdraw(uint256 amount);
    event Buy(uint256 item);

    constructor(uint initBalance) payable {
        owner = payable(msg.sender);
        balance = initBalance;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    function deposit(uint256 _amount) public payable {
        uint256 _previousBalance = balance;
        require(msg.sender == owner, "You are not the owner of this account");
        balance += _amount;
        assert(balance == _previousBalance + _amount);

        emit Deposit(_amount);
    }

    error InsufficientBalance(uint256 balance, uint256 withdrawAmount);

    function withdraw(uint256 _withdrawAmount) public {
        require(msg.sender == owner, "You are not the owner of this account");
        uint256 _previousBalance = balance;
        if (balance < _withdrawAmount) {
            revert InsufficientBalance(balance, _withdrawAmount);
        }
        balance -= _withdrawAmount;
        assert(balance == _previousBalance - _withdrawAmount);
        emit Withdraw(_withdrawAmount);
    }

    function buy(uint256 item) external {
        uint256 amount;
        if (item == 1) {
            amount = 150;
        } else if (item == 2) {
            amount = 200;
        } else {
            amount = 600;
        }
        require(amount > 0, "Invalid redeem amount");
        withdraw(amount);
        emit Buy(item);
    }
}
