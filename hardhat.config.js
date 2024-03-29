require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli : {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}


