import React, { useState } from 'react'

const PHASE2 = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                PHASE 2

                                </h3>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className="  mt-5 data">The amount of USDC that is left after everyone has been paid, will be used to generate an even higher ROI for our community.</p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

<ul className='text-muted'>
    <li>20% will be used to top up the locked funds to passively increase the community’s ROI</li>
    <li>20% will be used to invest in “safe” projects (f.e. delegating to Flare Networks)</li>
    <li>20% will be used for higher risk investments (f.e. swing- and/or day trading)</li>
    <li>20% goes to the project leader to keep everything running smooth and staying actively engaged in every aspect of the project;</li>
    <li>15% will be used as a reserve (f.e. to fund new goals)</li>
    <li>5% will be donated to a charity</li>
</ul>
 

                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

        
           
        </>
    )
}

export default PHASE2