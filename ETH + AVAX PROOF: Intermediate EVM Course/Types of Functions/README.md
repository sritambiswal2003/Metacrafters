# Creating an ERC20 Token using OpenZeppelin Interfaces

This project involves the development of a Solidity smart contract that leverages OpenZeppelin interfaces to create an ERC20 token contract named 'Rizzlers' (with the symbol 'RIZZ'). The contract is then deployed using the Hardhat framework.

## Description

The project entails a Solidity smart contract that conforms to the ERC20 token standard. It benefits from the security and reliability of OpenZeppelin's library, which offers standardized and secure methods for contract creation. The contract features a range of functions inherited from the OpenZeppelin Library, including Transfer, Mint, Allow, BalanceOf, Owner, Symbol, and Name, among others.

The process of creating and deploying the contract involves the following steps:

1. **Contract Creation**: The smart contract is coded and compiled using Solidity. OpenZeppelin interfaces are utilized to ensure adherence to best practices.

2. **Local Deployment**: The contract is deployed locally on the Hardhat server after successful compilation.

3. **RemixIDE Interaction**: Following deployment, the contract's address is accessed on RemixIDE, an online integrated development environment. This is achieved by connecting to the Hardhat Dev Provider on RemixIDE.

4. **Interacting with the Contract**: The RemixIDE provides a platform to interact with the contract. The functions defined in the contract are accessible within RemixIDE, enabling comprehensive testing and interaction with the deployed contract.

## Getting Started

To execute the program, follow these steps:

1. Inside the project directory, install the necessary dependencies by running: `npm i`

2. Open two additional terminals within your Visual Studio Code environment.

3. In the second terminal, start a Hardhat node by running: `npx hardhat node`

4. In the third terminal, deploy the contract to the local network by running: `npx hardhat run --network localhost scripts/deploy.js`

5. Access RemixIDE via: [https://remix.ethereum.org/](https://remix.ethereum.org/)

6. Navigate to the 'DEPLOY & RUN TRANSACTIONS' tab. In the 'At Address' input box, enter the contract address obtained after compiling and deploying the smart contract.

7. The contract's functions will be displayed, enabling seamless interaction within the RemixIDE environment.

## Authors

Sritam Biswal
