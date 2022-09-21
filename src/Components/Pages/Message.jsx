import React, { useState } from 'react'

const Message = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h3 className="pt-5 pl-5 pl-xl-5 pt-md-4  pl-md-0 intTitle">
                                   Message
                                </h3>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            <div className="col-md-3 col-lg-2 copyline col-xxl-3">
                               

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                </div>
                            </div>

                        </div>
                        <div className="row">

                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder  pt-2"></div>

                                <div className="  pt-2 text-muted mt-5 mt-md-4 fw-bold  data">
                                This is probably not needed here
                                </div>
                                <p className=" text-muted mt-5 mt-md-4  data">We see projects popup everywhere and they all come out with some kind of passive income plan, which… if you look just a bit closer… you see immediately it is nothing more than baked air.  Not us, we created a project that pays out ‘real’ value in a trustworthy stable coin with which the investor can choose to do whatever they want in the real world.  No complicated constructions, no launch of an inflationary currency, no active engagement needed to generate this income, not dependent on a bull or bear market, … the list could go on and on.   We came up with the idea of a conservative investment plan for which we save (as good as all – minus a part for marketing, giveaways, collabs, …) the investor’s money in a separate account. In a later stage in the bull market, we will cash out the investment, which was made in XRP, to a stable coin to be able to not have to actively concern about generating money.  The amount of USD will be more than enough to cover the promised passive income plan.  The rest we will actively use in medium and high risk investments to have the possibility to generate and be able offer more than what was agreed upon as our basic passive income plan.  Not going too much into detail here because we will come back to this in the right section.</p>
                                <div className="  pt-2 text-muted mt-5 mt-md-4  data">
                                Yours Sincerely,
                                </div>
                                <div className="  pt-2 text-muted mt-5 mt-md-4  data">
                                Permabull.
                                </div>

                                {/* <p className=" text-muted mt-5 mt-md-4  data">USDD attempts to be the first stablecoin protocol to implement design principles of both to create a highly scalable, trustless, extremely stable, and ideologically pure on-chain money. The USDD protocol is a two token system encompassing a stablecoin, USDD (USDD), and a governance token, USDD Shares (USDD). The protocol also has a pool contract which holds USDC collateral. Pools can be added or removed with governance.  </p>

                                <p className=" text-muted mt-5 mt-md-4  data">USDD stablecoins can be minted by placing the appropriate amount of its constituent parts into the system. At genesis, USDD is 100% collateralized, meaning that minting USDD only requires placing collateral into the minting contract. During the fractional phase, minting USDD requires placing the appropriate ratio of collateral and burning the ratio of USDD Shares (USDD). While the protocol is designed to accept any type of cryptocurrency as collateral, this implementation of the USDD Protocol will mainly accept on-chain stablecoins as collateral to smoothen out volatility in the collateral so that USDD can transition to more algorithmic ratios smoothly. As the velocity of the system increases, it becomes easier and safer to include volatile cryptocurrency such as ETH and wrapped BTC into future pools with governance.   </p>

                                <img src="./PriceStability/graph1.png" alt="123"></img>
                                <p className=" text-muted mt-5 mt-md-4  data">The supply/demand curve illustrates how minting and redeeming USDD stabilizes the price ( is quantity,  is price). At  the USDD's price is at . If there is more demand for USDD, the curve shifts right to  and a new price, , for the same quantity . In order to recover the price to $1, new USDD must be minted until  is reached and the  price is recovered. Since market capitalization is calculated as price times quantity, the market cap of USDD at  is the blue square. The market cap of USDD at  is the sum of the areas of the blue square and green square. For instance, in this example the new market cap of USDD would have been the same if the quantity did not increase because the increase in demand is simply reflected in the price, . Given a demand increase, market cap increases either by an increase in quantity (at a stable price) or through an increase in price. The green square and red square have the same area and thus would have added the same amount of value in market cap. On a side note, the half-shaded portion in the green square indicates the total value of USDD shares that would be burned if the new quantity of USDD was generated at a hypothetical collateral ratio of 66%. This is important to visualize because USDD market cap is intrinsically linked to USDD demand.    </p> */}
 

                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>
                </div>

           




        </>
    )
}

export default Message