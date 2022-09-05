var StellarSdk = require("stellar-sdk");

var stellarAssetIssuer = require("./src/stellar-asset-issuer.js")
var readline = require('readline');

require("dotenv").config();

(async () => {
    try{
        var assets = process.env.ASSET_CODE.split(' ');
        var assetIssuer = process.env.ASSET_ISSUER;

        for(const asset of assets){
             var assetStellar = stellarAssetIssuer.createAssetWithPublicKey(assetIssuer, asset);
             console.log(assetStellar);

             await stellarAssetIssuer.trustIssuer(process.env.ACCOUNT_RECEIVER_PRIVATE, assetStellar)
        }
    }catch(err){
        console.log(err)
    }
})()

