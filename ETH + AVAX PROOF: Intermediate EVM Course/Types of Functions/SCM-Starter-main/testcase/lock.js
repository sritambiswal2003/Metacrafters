// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SCM {
    address public owner;
    uint256 public balance;

    event Deposit(address indexed account, uint256 amount);
    event Withdraw(address indexed account, uint256 amount);
    event Buy(address indexed account, uint256 item, uint256 amount);

    constructor() payable {
        owner = msg.sender;
        balance = msg.value;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this account");
        _;
    }

    function deposit() public payable {
        balance += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    error InsufficientBalance(uint256 availableBalance, uint256 withdrawAmount);

    function withdraw(uint256 _withdrawAmount) public onlyOwner {
        if (balance < _withdrawAmount) {
            revert InsufficientBalance(balance, _withdrawAmount);
        }
        balance -= _withdrawAmount;
        (bool success, ) = msg.sender.call{value: _withdrawAmount}("");
        require(success, "Withdrawal failed");
        emit Withdraw(msg.sender, _withdrawAmount);
    }

    function buy(uint256 item) external payable {
        uint256 amount;
        if (item == 1) {
            amount = 150;
        } else if (item == 2) {
            amount = 200;
        } else {
            amount = 600;
        }
        require(amount > 0, "Invalid redeem amount");
        require(msg.value >= amount, "Insufficient amount to buy the item");
        balance += msg.value;
        emit Buy(msg.sender, item, amount);
    }
}

