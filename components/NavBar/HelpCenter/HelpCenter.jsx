import React from 'react';
import Link from 'next/link';
import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const helpCenter=[
    {name:"About",link:"about"},
    {name:"Contact Us",link:"contact-us"},
    {name:"Sign Up",link:"sign-up"},
    {name:"Sign In",link:"sign-in"},
    {name:"Subscription",link:"subscription"}
  ]
  return (
    <div className={Style.box}>{

      helpCenter.map((object,idx)=>{
        return(
        <div className={Style.helpCenter}>
          <Link href={{pathname:`${object.link}`}}>{object.name}</Link>
        </div>)
      })

    }</div>
  )
}

export default HelpCenter