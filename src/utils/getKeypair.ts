import { gun } from "../db";

interface pubPair {
    epub: string,
    pub: string
}

let keypair: pubPair;

/**
 * This function fetches the public keypair used to encrypt a message.
 * @param {string} address 
 * @returns 
 */
const getKeypair = async (address: string): Promise<pubPair> => {

    await gun.get(`skeypair${address}`).once(async data => { 
        await (keypair = data); 
    })

    return await keypair;
}

export default getKeypair;