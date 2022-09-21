import React, { useState } from 'react'

const Team = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h6 className=" playTitle  pt-md-4  pl-xl-5 pl-md-0">
                                TEAM
                                </h6>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <ul className='fw-bold'>
                                    <li> Project owner: Permabull (Tim Vanhout)</li>
                                    <li> Lead NFT designer: Pablo (Paul)</li>
                                    <li> Development team: Mohtajj</li>
                                </ul>

                            </div>
                        


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>



        </>
    )
}

export default Team