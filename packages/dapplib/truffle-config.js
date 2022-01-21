require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember protect heavy enrich only slide'; 
let testAccounts = [
"0xd960ec85da2d6fea62101b80a9394702cc880f06dc4eb545ffb006342985cbf6",
"0x09d6c95e72c932faacc0344f2d948c26571bd7e40d0df95ba81f988a56707b95",
"0xebd92a149b176c19fe80e2926a927f094bbc0aa4ede8ace20fc3dcf3e0be9a2d",
"0xd10443678ea907729fae0117886beeebfd9939169fb6e84e1b64224f47a67b01",
"0x919dd7a7a132c6519ca8e11ec441a3e5a5911d52e515bbe574eab7d433c215d8",
"0x86bcb5d2a93f8efc28214f73adc0d59ec1455aff77eea3a1d0e7418bc4636c8b",
"0x6b19164b7139af578d5bee1ccd88d1ecf43cdba588e06c1336a301b7722e6115",
"0xbb03154b68846f13aa832a21b3de32b3ccc4b0bd7970fefc5b9734cb70004aea",
"0xefd7415ec3762432d4430f387b47a020084e862fa4634a725676dae6d4a2a5d7",
"0xd384ff6e31fbd7edea8ba1e617580f2a58ede4db3462600fc78cbb939f03e7b3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

