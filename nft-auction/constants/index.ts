export const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "TRANSFER_REQUEST_ID",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "addressToId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getAllowed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSupportedRequests",
      "outputs": [
        {
          "internalType": "uint64[]",
          "name": "arr",
          "type": "uint64[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "requestId",
          "type": "uint64"
        }
      ],
      "name": "getZKPRequest",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "schema",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "slotIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "operator",
              "type": "uint256"
            },
            {
              "internalType": "uint256[]",
              "name": "value",
              "type": "uint256[]"
            },
            {
              "internalType": "string",
              "name": "circuitId",
              "type": "string"
            }
          ],
          "internalType": "struct ICircuitValidator.CircuitQuery",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "idToAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "name": "proofs",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "name": "requestQueries",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "schema",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "slotIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "operator",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "circuitId",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "name": "requestValidators",
      "outputs": [
        {
          "internalType": "contract ICircuitValidator",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "requestId",
          "type": "uint64"
        },
        {
          "internalType": "contract ICircuitValidator",
          "name": "validator",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "schema",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "slotIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "operator",
              "type": "uint256"
            },
            {
              "internalType": "uint256[]",
              "name": "value",
              "type": "uint256[]"
            },
            {
              "internalType": "string",
              "name": "circuitId",
              "type": "string"
            }
          ],
          "internalType": "struct ICircuitValidator.CircuitQuery",
          "name": "query",
          "type": "tuple"
        }
      ],
      "name": "setZKPRequest",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "requestId",
          "type": "uint64"
        },
        {
          "internalType": "uint256[]",
          "name": "inputs",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        }
      ],
      "name": "submitZKPResponse",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "supportedRequests",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export const CONTRACT_ADDRESS = '0x245D0447bdD18301f677249434F09789A4BB56B3'