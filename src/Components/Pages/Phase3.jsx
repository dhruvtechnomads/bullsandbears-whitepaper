import React, { useState } from 'react'

const PHASE3 = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                PHASE 3

                                </h3>
                                <p className='pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  '> At the end of each year (starting from year 2)</p>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                           
                            </div>

                        </div>
                        <div className="row">


                                <div className="SubTilteBorder pt-2"></div>
                                <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                <ul className='text-muted'>
                                    <li>50% of the generated profits (if any) of phase 2 (B & C) will be used to top up the locked funds to passively increase the community’s ROI</li>
                                    <li>35% will be added to existing delegations or put into any new (as safe as possible) projects</li>
                                    <li>15% will be used for single or multiple giveaways, depending on the amount</li>
                                </ul>


                                </div>
                            



                        </div>
                    </div>


                </div>

            
           
        </>
    )
}

export default PHASE3