const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const mnemonic = process.env["MNEMONIC"];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];
module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",   // Localhost (default: none)
        port: 7545,     // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
      },
      ropsten: {
        provider: () => new HDWalletProvider(
        mnemonic, `https://ropsten.infura.io/v3/
        ${infuraProjectId}`),
        network_id: 3,  // Ropsten's id
        gas: 5500000,  
        confirmations: 2,    
        // # of confs to wait between   deployments. (default: 0)   
        timeoutBlocks: 200,  // # of blocks before 
        // a deployment  times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before 
        // migrations? (default: false for public nets )
      },
    },
    // Only necessary if you wish to change the contracts, 
    // and abis directory from truffles default          
    contracts_directory: './contracts/',
    contracts_build_directory: './abis',
  
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.8.10",    
        // Fetch exact version from solc-bin 
        // (default: truffle's version)
        // docker: true,        
        /** Use "0.5.1" you've installed 
          locally with docker (default: false) */
        settings: {          
          // See the solidity docs for advice 
          // about optimization and evmVersion
          optimizer: {
            enabled: false,
            runs: 200
          },
          evmVersion: "byzantium"
        }
      }
   },
};
