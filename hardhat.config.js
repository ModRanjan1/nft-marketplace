require("@nomicfoundation/hardhat-toolbox");
// No need to explicitly import these plugins
// @nomiclabs/hardhat-ethers
// @nomiclabs/hardhat-etherscan
// hardhat-gas-reporter
// solidity-coverage
// @typechain/hardhat
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;
const PRIVATE_KEY3 = process.env.PRIVATE_KEY3;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      gas: 2100000,    // should be "auto" or a number
      gasPrice: 8000000000,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3].filter(
        (x) => x !== undefined
      ),
      chainId: 4,
      saveDeployments: true
    }
  },
  solidity: {
    compilers: [
      { version: '0.8.9' },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: "./public/artifacts"
  },
}