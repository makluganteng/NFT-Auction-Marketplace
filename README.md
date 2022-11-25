# NFT-Auction-Marketplace
Hackathon ETHVietnam

# Project Description
An auction process consists of:
1. Auction creation
2. Bidder invitation
3. Bidder verification
4. Bid placement
5. Transaction

There are 2 major bottlenecks faced in a blockchain-based auction system which are anonymity and scalability. During the phase of verifying the bidders, bidders have no choice but to reveal all of their personal information to prove themselves. Furthermore, the transaction occurs between seller and bidder usually incur high transaction fee with slow transaction speed, discouraging the utilization of blockchain technology in auctions.

ZKNAM is a Zero Knowledge NFT Auction Marketplace aiming to solve the problems stated above. This project utilizes ZKPs to allow bidders to verify themselves without revealing their personal information. This is done through credential claiming from a trusted issuer. To improve scalability and ease of integrating NFTs, we allow NFT transaction to occur in L2 to eliminate gas fee and improve transaction speed.

# How It's Made
This project mainly uses 3 main technologies:
1. Polygon ID
2. Reddio
3. Spheron

Polygon ID - Polygon ID is used to issue and verify private credentials that allow the bidder to generate a ZKP so that they are eligible for the auction but without revealing their personal information. We extended the ZKP Verifier smart contract to store bidder information once they are verified.

Reddio - Reddio is used as the main platform to allow NFT transactions to occur. We allow the user to deploy their own NFT contracts using Reddio's API solution.

Spheron - Spheron is used as a decentralized hosting service for our project.

# Running the project
```bash
cd nft-auction
yarn install
yarn dev

```