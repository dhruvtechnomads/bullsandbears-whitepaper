import React, { useState } from 'react'

const Roadmap = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                ROADMAP
                                </h3>
                            </div>

                            
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                               
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q2 – 2022 (FIRST HALF)</p>

<ul className='text-muted'>
    <li>LAUNCH DISCORD AND WEBSITE</li>
    <li>START ENGAGEMENT ON TWITTER AN CREATE A COMMUNITY</li>
    <li>LAUNCH 1ST COLLECTION BULLRUN BULLS</li>
</ul>
 </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q2- 2022 (SECOND HALF) </p>

<ul className='text-muted'>
    <li>BUILD AND GROW THE COMMUNITY TO A CORE FAMILY</li>
    <li>HIRE INFLUENCERS AND DO DIFFERENT COLLABS</li>
    <li>LAUNCH 2ND COLLECTION OF BULLRUN BULLS</li>
</ul>
 </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q3-2022 (FIRST HALF) </p>

<ul className='text-muted'>
    <li>START MONTHLY PASSIVE INCOME PLAN</li>
    <li>LOCKUP THE COMPLETE AMOUNT TO SECURE THE FUTURE OF OUR PASSIVE INCOME PLAN</li>
    <li>LAUNCH OUR 3RD COLLECTION OF BULLRUN BULLSS</li>
</ul>
 </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q3-2022 (SECOND HALF) </p>

<ul className='text-muted'>
    <li>NEW WEBSITE WITH AUTO MINTING SYSTEM ON XLS20</li>
    <li>COLLABS TO CREATE MORE TRACTION TO OUR PROJECT</li>
    <li>LAUNCH A COMPLETE NEW COMMUNITY DRIVEN COLLECTION OF LOTTERY BULLS</li>
</ul>
 </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q4-2022 </p>

<ul className='text-muted'>
    <li>RECALIBRATE OUR EXISTING DISCORDE</li>
    <li>LAUNCH OUR 1ST COLLECTION BEARMARKET BEARS</li>
    <li>FIRST STEPS TOWARDS A MOBILE P2E GAME</li>
</ul>
 </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q1-2023 </p>

<ul className='text-muted'>
    <li>LAUNCH OUR 2ND COLLECTION BEARMARKET BEARSE</li>
    <li>CREATE OUR FULL BODY 3D BULL FOR ANIMATIONS AND GAMING</li>
</ul>
 </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q2-2023 </p>

<ul className='text-muted'>
    <li>LAUNCH SMART CONTRACT</li>
    <li>LAUNCH MOBILE P2E GAME</li>
    <li>LAUNCH OUR 3RD COLLECTION OF BEARMARKET BEARS</li>
</ul>
 </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                            <p className="  mt-5 data">Q3-2023 </p>

<ul className='text-muted'>
    <li>TO BE DETERMINED AS WE PROCEED TOWARDS THIS PERIOD IN TIME</li>
</ul>
 </div>

                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

        
           
        </>
    )
}

export default Roadmap