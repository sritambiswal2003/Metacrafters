# ERC20 Token Creation

This is a solidity project that uses the OpenZepplin interfaces to create an ERC20 Token Contract to mint my own Rizzlers / 'RIZZ' Token and deploy it on hardhat.
## Description

This program is a smart contract written in Solidity. The is an ERC20 Token contract and has functions inherited from the OpenZepplin Library that provide secure standards to create contracts. The contract contains functions like Transfer, Mint, Allow, BalanceOf, Owner, Symbol, Name, etc.

I've created the contract and deployed it locally on the hardhat server after compiling it. After deploying I have called the contract address on the online RemixIDE after connecting to the Hardhat Dev Provider on RemixIDE. The contract functions appear on the RemixIDE and I can interact with the contract on the IDE.

## Getting Started

### Executing program

- Inside the project directory, in the terminal type: ```npm i``` to install all the required dependencies
- Open two additional terminals in your VS code
- In the second terminal type: ```npx hardhat node```
- In the third terminal, type: ```npx hardhat run --network localhost scripts/deploy.js```

- Go to https://remix.ethereum.org/
- Go to the 'DEPLOY & RUN TRANSACTIONS' Tab and below in the At Address input box enter the contract address that you get after compiling and deplyoing the smart contract
- The functions will appear and we can interact with it.
  


## Authors

Indranil Chutia  
