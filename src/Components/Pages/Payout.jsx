import React, { useState } from 'react'

const Payout = () => {
    const [copySuccess, setCopySuccess] = useState("")

    // const textAreaRef = useRef(null)

    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h3 className="pt-5 pl-5 pl-xl-5  pt-md-4  pl-md-0  intTitle">
                                PASSIVE INCOME PAYOUT PLAN

                                </h3>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">Check out The <b>PASSIVE INCOME PAYOUT PLAN</b> created for you in following pages... </p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

           
        </>
    )
}

export default Payout