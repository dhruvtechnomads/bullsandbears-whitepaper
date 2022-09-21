import React, { useState } from 'react'
import "../css/MainNav.css"
// import ".."
const Introduction = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <div className="container-fluid mobileView d-lg-block d-xl-block d-md-block " id='PlaytoEarn'>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <img src="./Img/banner.png" width="100%" height="300px" alt="img"></img>

                    <div className="row">
                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8" >
                            <h6 className=" playTitle pl-xl-5">
                            Introduction
                            </h6>
                            {/* <h6 className="pt-2 pl-5 subTitle">USDD Ecosystem.</h6> */}
                            {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                        </div>

                    </div>
                    <div className="row">

                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-7">
                            <div className="SubTilteBorder pt-2"></div>
                            <p className=" text-muted mt-5 mt-md-4 data">Bulls and Bears NFT is a very limited collection of 1,111 Bullrun Bulls and 1,111 Bearmarket Bears.  The concept of our project has risen from the mindset of a real hodler.  We all know that if you compare the results of a day trader with a hodler, over the long run, the hodler will come out of the equation at the positive side much more often.  </p>
                        </div>
                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-7">
                            <p className=" text-muted mt-5 mt-md-4 data">That’s the reason why the motto exist:<b> “Time in the market almost always beats ‘timing’ the market” </b> </p>
                        </div>
                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-7">
                            <p className=" text-muted mt-5 mt-md-4 data">On top of our base concept, we want to provide a long term vision for our investors.  We are scammed and rug pulled more than we ever could have expected, but that’s unfortunately still the name of crypto investing.  People have lost all their investments, life savings, even killed themselves over it…  That’s why we wanted to counter this with a true, honest and transparent project.  Therefore we created a quite simple method to help small and big investors to earn a passive income by combining the complete investment amount of all investors and converting it into an attractive plan for both of them.  All this based on just the investment they made in buying our NFTs.   </p>
                        </div>
                        


                    </div>
                    {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                </div>


            </div>

        </div>

    )
}

export default Introduction