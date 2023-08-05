# Creating a Token

This Solidity program serves as my culminating project for the ETH PROOF: Beginner EVM Course module. The contract's primary objective is to generate a new token and facilitate its distribution to various addresses and users.

## Description
Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
Your contract will have a mapping of addresses to balances (address => uint)
You will have a mint function that takes two parameters: an address and a value. The function then increases the total supply by that number and increases the balance of the address by that amount.
Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. It will take an address and value just like the mint functions. It will then deduct the value from the total supply and from the balance of the address.
Lastly, your burn function should have conditionals to make sure the balance of account is greater than or equal to the amount that is supposed to be burned.

## Getting Started

Set Up Your Development Environment:
Before you start coding, ensure you have a development environment set up with Solidity installed. You can use tools like Remix, Truffle, or Hardhat to write, compile, and deploy your smart contract.

Create a New Solidity Contract:
Create a new Solidity file (e.g., MyToken.sol) and start by specifying the Solidity version at the beginning of the file using a pragma statement.

Define the ERC-20 Interface:
Inherit the ERC-20 interface to make your token ERC-20 compliant. The interface defines a set of standard functions that your token contract must implement.

Define Token Properties:
Inside your contract, define the properties of your token, such as the name, symbol, total supply, and decimals. These properties will be used to represent your token on the blockchain.

Declare Data Structures and Mappings:
Declare variables and mappings to keep track of token balances for each address and any other required data, such as allowances for token transfers.

Implement ERC-20 Functions:
Implement the functions defined by the ERC-20 interface. These include functions like balanceOf, transfer, approve, allowance, transferFrom, etc.

Handle Token Transfers:
In the transfer and transferFrom functions, ensure that token transfers follow the correct logic, such as checking for sufficient balances, updating balances, and emitting events.

Manage Token Allowances:
Implement the approve and allowance functions to manage allowances for delegated transfers.

Handle Events:
Emit events for token transfers and other important actions to make it easier for external applications to track token movements.

Deployment:
Compile your Solidity contract and deploy it to the Ethereum blockchain. You can use tools like Remix, Truffle, or Hardhat to compile and deploy your contract.

Testing:
Write test cases to ensure your token contract functions correctly and handles various scenarios, such as transfers, allowances, and edge cases.

Security Considerations:
Ensure your contract is secure and audited to prevent common vulnerabilities like reentrancy, overflow, and underflow.

Documentation:
Provide comprehensive documentation for your token contract to help other developers understand its functionality and how to interact with it.



## Authors

Name-Sritam Biswal
Contact info-sritambiswal03@gmail.com


## License

MIT License

Copyright (c) 2023 Sritam Biswal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This project is licensed under the MIT License - see the LICENSE.md file for details
