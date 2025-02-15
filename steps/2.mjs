import { resolve } from "path";
import { env } from "process";

// crawlPath[i] and crawlPath[i+1] are executed in sequence
// crawlPath[i][j] and crawlPath[i][j+1] are executed in parallel
export default [
  [
    {
      name: "call-tokenuri",
      extractor: {
        outputFilename: "noizd-call-tokenuri",
        args: [
          resolve(env.DATA_DIR, "call-block-logs-transformation"),
          {
            name: "tokenURI",
            type: "function",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
              },
            ],
          },
          (evt) =>
            evt.log.address === "0x0bc2a24ce568dad89691116d5b34deb6c203f342",
        ],
      },
      transformer: {
        args: [
          resolve(env.DATA_DIR, "noizd-call-tokenuri-extraction"),
          "tokenURI"
	],
        outputFilename: "noizd-call-tokenuri",
      },
    },
    {
      name: "call-tokenuri",
      extractor: {
        outputFilename: "catalog-call-tokenuri",
        args: [
          resolve(env.DATA_DIR, "call-block-logs-transformation"),
          {
            name: "tokenURI",
            type: "function",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
              },
            ],
          },
          (evt) =>
            evt.log.address === "0x0bc2a24ce568dad89691116d5b34deb6c203f342",
        ],
      },
      transformer: {
        args: [
          resolve(env.DATA_DIR, "catalog-call-tokenuri-extraction"),
          "tokenURI"
	],
        outputFilename: "catalog-call-tokenuri",
      },
    },
    {
      name: "call-tokenuri",
      extractor: {
        outputFilename: "mintsongs-call-tokenuri",
        args: [
          resolve(env.DATA_DIR, "call-block-logs-transformation"),
          {
            name: "tokenURI",
            type: "function",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
              },
            ],
          },
          (evt) =>
            evt.log.address === "0x2b5426a5b98a3e366230eba9f95a24f09ae4a584",
        ],
      },
      transformer: {
        args: [
          resolve(env.DATA_DIR, "mintsongs-call-tokenuri-extraction"),
          "tokenURI"
	],
        outputFilename: "mintsongs-call-tokenuri",
      },
    },
    {
      name: "call-tokenuri",
      extractor: {
        outputFilename: "soundxyz-call-tokenuri",
        args: [
          resolve(env.DATA_DIR, "call-block-logs-transformation"),
          {
            name: "tokenURI",
            type: "function",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
              },
            ],
          },
          (evt) => evt.metadata.platform.name === "sound",
        ],
      },
      transformer: {
        args: [
          resolve(env.DATA_DIR, "soundxyz-call-tokenuri-extraction"),
          "tokenURI"
	],
        outputFilename: "soundxyz-call-tokenuri",
      },
    },
    {
      name: "call-tokenuri",
      extractor: {
        outputFilename: "sound-protocol-call-tokenuri",
        args: [
          resolve(env.DATA_DIR, "call-block-logs-transformation"),
          {
            name: "tokenURI",
            type: "function",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
              },
            ],
          },
          (evt) => evt.metadata.platform.name === "sound-protocol",
        ],
      },
      transformer: {
        args: [
          resolve(env.DATA_DIR, "sound-protocol-call-tokenuri-extraction"),
          "tokenURI"
	],
        outputFilename: "sound-protocol-call-tokenuri",
      },
    },
    {
      name: "call-tokenuri",
      extractor: {
        outputFilename: "zora-call-tokenuri",
        args: [
          resolve(env.DATA_DIR, "call-block-logs-transformation"),
          {
            name: "tokenURI",
            type: "function",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
              },
            ],
          },
          (evt) =>
            evt.log.address === "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7",
        ],
      },
      transformer: {
        args: [
          resolve(env.DATA_DIR, "zora-call-tokenuri-extraction"),
          "tokenURI"
	],
        outputFilename: "zora-call-tokenuri",
      },
    },
    {
      name: "call-tokenuri",
      extractor: {
        outputFilename: "zora-call-tokenmetadatauri",
        args: [
          resolve(env.DATA_DIR, "call-block-logs-transformation"),
          {
            name: "tokenMetadataURI",
            type: "function",
            inputs: [
              {
                name: "tokenId",
                type: "uint256",
              },
            ],
          },
          (evt) =>
            evt.log.address === "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7",
        ],
      },
      transformer: {
        args: [
          resolve(env.DATA_DIR, "zora-call-tokenmetadatauri-extraction"),
          "tokenURI"
	],
        outputFilename: "zora-call-tokenmetadatauri",
      },
    },
  ],
  [
    {
      name: "noizd-get-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "noizd-call-tokenuri-transformation")],
      },
      transformer: {},
    },
    {
      name: "catalog-get-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "catalog-call-tokenuri-transformation")],
      },
      transformer: {},
    },
    {
      name: "mintsongs-get-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "mintsongs-call-tokenuri-transformation")],
      },
      transformer: {},
    },
    {
      name: "soundxyz-get-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "soundxyz-call-tokenuri-transformation")],
      },
      transformer: {},
    },
    {
      name: "sound-protocol-get-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "sound-protocol-call-tokenuri-transformation")],
      },
      transformer: {},
    },
    {
      name: "zora-get-tokenuri",
      extractor: {
        args: [
          resolve(env.DATA_DIR, "zora-call-tokenmetadatauri-transformation"),
        ],
      },
      transformer: {},
    },
  ],
  [
    {
      name: "music-os-accumulator",
      extractor: {},
    },
  ],
];
