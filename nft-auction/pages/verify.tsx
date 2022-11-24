import {
    Text,
    Box,
    Input,
    Button,
    Flex,
    Heading,
    Stack,
    Image
} from '@chakra-ui/react';

import {useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router'

import {abi, CONTRACT_ADDRESS} from "../constants";
import { BytesLike, ethers } from 'ethers';

import QRCode from 'react-qr-code';

export default function Verify() {

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
            if(res._hex != "0x00"){
                router.push('/test')
            } else{
                alert("Address not registered");
            }
        }).catch(() => {alert("You are not verified.")});
    }
    

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                <QRCode
                        level="Q"
                        style={{ width: 256, marginLeft: 20}}
                        value={JSON.stringify(qrProofRequestJson)}
                    />  
                <Input ref={inputRef} placeholder="Enter your verified wallet address" size='md' />
                <Button colorScheme={'blue'} variant={'solid'} onClick={onSubmitAddress}>Submit</Button>
            </Stack>
            </Flex>
            <Flex flex={1}>
            <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                }
            />
            </Flex>
      </Stack>        
        // <Box paddingX = {10}>
        //     <Box>
        //         <Text>Scan this QR code with your PolygonID Wallet to verify your identity</Text>
        //     </Box>

        //     <Box>
                // <QRCode
                //     level="Q"
                //     style={{ width: 256, marginLeft: 20}}
                //     value={JSON.stringify(qrProofRequestJson)}
                // />  
        //     </Box>

        //     <Box>
        //         <Input ref={inputRef} placeholder="Enter your verified wallet address" size='md' />
        //         <Button onClick={onSubmitAddress}>Submit</Button>
        //     </Box>
    
        // </Box>
    )
}