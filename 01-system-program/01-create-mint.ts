import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const devnet= ""
const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("ANnE12bX27BnGWmCnFxsmTZAQpv9VZhznEdDtF6MeQ82")
const decoded = base58.decode('2TYHPAx1eiWvs7fyEd5q5QtfxMMq9j8ygXmuvqzQXFggcdA6JF86hxHf7cVzDveDnSy3hSqeiWQTrcyKMj3MBRHc')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    try {
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
    }
    catch {
        console.log(Error)
    }
}

main();