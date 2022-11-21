import {
    Text,
    Box
} from "@chakra-ui/react";
import QRCode from "react-qr-code";

export default function Verify() {

    // Update deployed contract address
    const deployedContractAddress = "0x576939d42BA8d9787fF189a01d9fa5768B11c467";

    const qrProofRequestJson = {
        id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
        typ: "application/iden3comm-plain-json",
        type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
        body: {
          transaction_data: {
            contract_address: deployedContractAddress,
            method_id: "b68967e2",
            chain_id: 80001,
            network: "polygon-mumbai"
          },
          reason: "airdrop participation",
          scope: [
            {
              id: 1,
              circuit_id: "credentialAtomicQuerySig",
              rules: {
                query: {
                  allowed_issuers: ["*"],
                  req: {
                    birthday: {
                      $lt: 20010101
                    }
                  },
                  schema: {
                    url:
                      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v2.json-ld",
                    type: "KYCAgeCredential"
                  }
                }
              }
            }
          ]
        }
      };
      
  return (
    <Box>
        <Text>Scan this QR code with your NFT-Auction app to verify your ownership of this NFT.</Text>
        <QRCode value={JSON.stringify(qrProofRequestJson)} />
    </Box>
  ) 
}
