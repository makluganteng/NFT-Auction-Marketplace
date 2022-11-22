import {
    Text,
    Box,
    Input,
    Button
} from '@chakra-ui/react';

import {useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router'

import {abi, CONTRACT_ADDRESS} from "../constants";
import { BytesLike, ethers } from 'ethers';

import QRCode from 'react-qr-code';

export default function Verify() {

    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

    const [bidderContract, setBidderContract] = useState<any>(null);

    const inputRef = useRef<any>("");
    const router = useRouter()

    useEffect(() => {
        const provider = new ethers.providers.JsonRpcProvider(API_URL);
        const signer = new ethers.Wallet(PRIVATE_KEY as BytesLike, provider);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

        setBidderContract(contract);

    }, []);

    // more info on query based requests: https://0xpolygonid.github.io/tutorials/wallet/proof-generation/types-of-auth-requests-and-proofs/#query-based-request
    const qrProofRequestJson = {
    id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
    typ: "application/iden3comm-plain-json",
    type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
    body: {
        transaction_data: {
        contract_address: CONTRACT_ADDRESS,
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

    async function onSubmitAddress(){
        await bidderContract.addressToId(inputRef.current.value).then((res: any) => {
            router.push('/test')
        }).catch(() => {alert("You are not verified.")});
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