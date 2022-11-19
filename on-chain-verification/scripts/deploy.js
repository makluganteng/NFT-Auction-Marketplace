async function main() {
  const verifierContract = "BidderVerifier";
  const verifierName = "zkBidderVerifier";
  const bidderVerifier = await ethers.getContractFactory(verifierContract);
  const zkBidderVerifier = await bidderVerifier.deploy();

  await zkBidderVerifier.deployed();
  console.log(verifierName, " tx hash:", zkBidderVerifier.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
