import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('2TYHPAx1eiWvs7fyEd5q5QtfxMMq9j8ygXmuvqzQXFggcdA6JF86hxHf7cVzDveDnSy3hSqeiWQTrcyKMj3MBRHc');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('EVhiSg4EbkJryt6pt29mEhnK6tmsxGNJYzZRokkvSdM5'), //mint 
        new Web3.PublicKey('OWNE2ysFa15fjQUf1vAWPBUUXqzQFDk4cxcwHcLGpGkNS166'), // token account
        new Web3.PublicKey('ANnE12bX27BnGWmCnFxsmTZAQpv9VZhznEdDtF6MeQ82'), //authority
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()