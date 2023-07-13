const nftCollection = [];

function mintNFT(name, model, year, category) {
  const nft = {
    name: name,
    model: model,
    year: year,
    category: category,
  };
  nftCollection.push(nft);
}

function listNFTs() {
  console.log("The Generated NFTs are : ");
  for (const nft of nftCollection) {
    console.log(
      `[${nftCollection.indexOf(nft) + 1}].`,
      nft.name,
      nft.model,
      nft.year,
      nft.category
    );
  }
}

function getTotalSupply() {
  return nftCollection.length;
}



mintNFT("Ford ", "GT-40", 1964, "Race car");
mintNFT("MClaren", "MP4/4", 1984, "Race Car");
mintNFT("Bentley", "Flying spur", 2023, "Sedan");
mintNFT("Maserati", "quattroporte", 2019, "Sports sedan");


listNFTs();
console.log(getTotalSupply());
