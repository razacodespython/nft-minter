import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAddress, useDisconnect, useMetamask, useNFTDrop } from '@thirdweb-dev/react';
import tw from '../public/tw.png'


export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const nftDrop = useNFTDrop("0x67B449733558bC9a7bdFeA86C2f8a802a12883d8")

  const mintNft = async () => {
    try {
      await nftDrop?.claim(1)
    } catch (error) {
      console.error(error)
    }
  };


  return (
    <div className={styles.container}>
          <div className={styles.myheader}>
            {address ? (
            <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
          </>
          ) : (
            <button onClick={connectWithMetamask}>Connect with Metamask</button>
          )}
          </div>

            <div className={styles.hero}>
              
              <div className={styles.heroImage}>
                <Image
                src={tw}
                width= "700px"
                height = "500px"
                />
              </div>
              <div className={styles.heroText}>
                text
              <button className={styles.herobutton} onClick={mintNft}>Mint NFT</button>

              </div>

            </div>


    </div>
  )
}
