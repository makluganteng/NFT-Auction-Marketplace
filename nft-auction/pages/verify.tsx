import {
    Text,
    Box,
    Input,
    Button
} from '@chakra-ui/react';
import QRCode from 'react-qr-code';
import {useRef} from 'react';

export default function Verify() {

    const inputRef = useRef<any>("");

    // update with your contract address
    const deployedContractAddress = "0x245D0447bdD18301f677249434F09789A4BB56B3";

    // more info on query based requests: https://0xpolygonid.github.io/tutorials/wallet/proof-generation/types-of-auth-requests-and-proofs/#query-based-request
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
        reason: "Auction Participation",
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

    function onSubmitAddress(){
        alert(inputRef.current.value);
    }

    return (
        <Box paddingX = {10}>
            <Box>
                <Text>Scan this QR code with your PolygonID Wallet to verify your identity</Text>
            </Box>

            <Box>
                <QRCode
                    level="Q"
                    style={{ width: 256, marginLeft: 20}}
                    value={JSON.stringify(qrProofRequestJson)}
                />  
            </Box>

            <Box>
                <Input ref={inputRef} placeholder="Enter your verified wallet address" size='md' />
                <Button onClick={onSubmitAddress}>Submit</Button>
            </Box>
    
        </Box>
    )
}