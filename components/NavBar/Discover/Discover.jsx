import React from 'react'
import Link from 'next/link';
import Style from './Discover.module.css';

const Discover = () => {

  const discover=[
    {
      name:"Collection",link:"collection"
    },
    {
      name:"Search",link:"search"
    },
    {
      name:"Author Profile",link:"author-profile"
    },
    {
      name:"NFT Details",link:"NFT-details"
    },
    {
      name:"Account Setting",link:"account-setting"
    },
    {
      name:"Connect Wallet",link:"connect-wallet"
    },
    {
      name:"Blog",link:"blog"
    }
  ]
  return (
    <div>
      {discover.map((object,idx)=>{
        return(
        <div key={idx+1} className={Style.discover}>
          <Link href={{pathname:`${object.link}`}}>{object.name}</Link>
        </div>)
      })}
    </div>
  )
}

export default Discover