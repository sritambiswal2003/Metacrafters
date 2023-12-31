// scripts/deploy.js
async function main() {
  try {
    // We get the contract to deploy
    const Token = await ethers.getContractFactory('Token');
    console.log('Deploying Token...');
    
    const token = await Token.deploy();
    await token.deployed();
    
    console.log('Token deployed to:', token.address);
    
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
