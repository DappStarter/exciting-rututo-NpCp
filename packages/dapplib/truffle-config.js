require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind exchange inner produce bridge giggle'; 
let testAccounts = [
"0x4186df60bc8160bf9572d0a2d60acc8ddf6f254b6c51c2c597c5a3e9b83c4310",
"0xaf9e2ec2ed7bd27a85fb55caba48fdbee83cfb05bff4f4fe460b84d455b335f6",
"0xdc907443d8fff07fe3c13748695567bfe3cb58acf2832b9f2b0648161576a7ba",
"0x7605e3ea612774f26a08cd92fcb54de51c54772145e1a035a7c5253f204d85ba",
"0x42e615ff9c4ad268496340e7645415dd2502651c477e20783641d43bc9ca0c46",
"0xdc2fb81416a0489753d720d7729a160259776cccd84c754a1a352814363b95f0",
"0xdd89a433b31032805f47a244f933f400f1b21286bd83e31fc45ee2c6a1c935f9",
"0xb6ce8f1bcbee220c17fdb7d09d926b980a342e9154642a7cc8c2dfbdeba7074c",
"0x177d6d304ba21063396bde1044a05b31318661ac767b485d332c8b2c4564f694",
"0x4b6273da8923c744efa56e40fd119faef79c22a641a0ad30494d18061ba6d9bc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


