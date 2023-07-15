const vault = [];

function mintNFT(name, model, year, category) {
  const nft = {
    name: name,
    model: model,
    year: year,
    category: category,
  };
  vault.push(nft);
}

function listNFTs() {
  console.log("The Generated NFTs are : ");
  for (const nft of vault) {
    console.log(
      `[${vault.indexOf(nft) + 1}].`,
      nft.name,
      nft.model,
      nft.year,
      nft.category
    );
  }
}

function getTotalSupply() {
  return vault.length;
}



mintNFT("Ford ", "GT-40", 1964, "Race car");
mintNFT("MClaren", "MP4/4", 1984, "Race Car");
mintNFT("Bentley", "Flying spur", 2023, "Sedan");
mintNFT("Maserati", "quattroporte", 2019, "Sports sedan");


listNFTs();
console.log(getTotalSupply());
