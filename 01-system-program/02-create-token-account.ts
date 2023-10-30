import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("ANnE12bX27BnGWmCnFxsmTZAQpv9VZhznEdDtF6MeQ82")
const decoded = base58.decode('2TYHPAx1eiWvs7fyEd5q5QtfxMMq9j8ygXmuvqzQXFggcdA6JF86hxHf7cVzDveDnSy3hSqeiWQTrcyKMj3MBRHc')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "EVhiSg4EbkJryt6pt29mEhnK6tmsxGNJYzZRokkvSdM5"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();