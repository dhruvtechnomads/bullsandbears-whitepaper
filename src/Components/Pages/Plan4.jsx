import React, { useState } from 'react'

const PLAN4 = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h6 className=" playTitle pt-md-4 pl-xl-5 pl-md-0 ">
                                PLAN 4
                                </h6>
                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                        
                                <div className="h-50"> </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted   fw-bold data">A LOTTERY SYSTEM THAT WILL BE ACTIVATED AFTER 2 CONDITIONS ARE MET</p>
                                <p className=" text-muted data">1. PRICE OF XRP IS GREATER THAN 10$ </p>
                                <p className=" text-muted data">2. COMPLETE SELLOUT OF A NEW “EXTREME SPECIAL” COLLECTION OF 111 BULLS </p>
                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className=" pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data"> <b>YEARLY INCOME</b> </p>
                            </div>

                            <div className='data'>

                            <table class="table">
  <thead>
    <tr>
      <th scope="col">TIER</th>
      <th scope="col">NFT</th>
      <th scope="col">LOTTERY TICKET</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1+ </td>
      <td>1</td>
    </tr>

  </tbody>
</table>

<ul className='data fw-bold'>
        <li >
        PRICES WILL HAVE A VALUE OF $100 – $1,000 EACH AND EVERY MONTH
        </li>
</ul>
</div>

<div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className=" pt-2"></div>
                                <p className=" text-muted mt-5 fw-bold mt-md-4 data"> <u>DISCLAIMER:</u> </p>
                                <p className='data'>
                                We will have 1 more very unique and small (111 NFT) Bull collection.  Holding only 1 of these NFTs will make you eligible to win a monthly lottery draw!  Every month we will draw one random winner and it is even possible to win multiple times in a row.  Although the draw will result in a winning bull number, a smart owner could think of buying a few of these bulls and holding them in separate wallets.  Unfortunately for them it will not work that way.  We have the idea to stay connected with the community for the long run.  This means that we will be handing out your price personally every month.  If you do hold more bulls, we will find out soon enough and you will be disqualified for the draw, unless you give up these bull number beforehand so we can withdraw them from the lottery.  That way you can still hold more bulls if you are planning to sell some down the road.  While we do have a reservation list to counter whales, if at launch, there are still a few bulls left for sale… I can’t stop you from buying 1 or 2 more with the idea the flip them when the lottery kicks off.
                                </p>
                                <p className='data'>
                                So… getting back to the guidelines… Holding more than 1 bull won’t give you more chances for the lottery.  This to keep it honest for small investors who actually came up with the initial question to create a plan for investors who don’t have the funds to make it to the highest passive income tiers.  We will do everything to honour that plan!
                                </p>
                            </div>

                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>



        </>
    )
}

export default PLAN4