import React, { useState } from 'react'

const Phase1 = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                PHASE 1

                                </h3>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 data">As soon as xrp hits 10$, we will sell 100,000 xrp for a total value of 1,000,000 USDC*.  The biggest slice of this amount will be invested in any exchange or bank which provides us with a minimum of 6% APY.  At the moment we have our eyes on Nexo, but there are others we can go with.  It could even be distributed over several account to lower the risk. If we choose for Nexo (who offers 10%), we will convert invest an extra 100,000 USD (10% based on the total USDC investment) to buy Nexo’s native token NEXO.  That will put us in their VIP (platinum) level account and generate us an extra 2% if we choose to be paid out in these Nexo tokens.  To avoid any money loss, due to market fluctuations, we will convert this asset in USD, immediately after we are getting paid out.  Bull holders will be able to be paid out in xrp to their xumm wallet so our automatic payment system can do its job.  This to avoid issues with delays etc. to bank accounts and give investors full freedom to choose whatever they want to do with their income.</p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                <p className=" text-muted mt-5 fw-bold data">Note: looking at the current state of investments already made, we will only need a stable 6% to be able to pay out the promised passive income plan.</p>

                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            
           
        </>
    )
}

export default Phase1