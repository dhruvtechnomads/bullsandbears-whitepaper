import React, { useState } from 'react'

const PLAN1 = () => {
    const [copySuccess, setCopySuccess] = useState("")

    // const textAreaRef = useRef(null)

    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8" >
                                <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  intTitle">
                                PLAN 1
                                </h3>
                                <p className='pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  '> PASSIVE INCOME LESS THAN 10$ XRP</p>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                           
                                <div className="h-25"> </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">We started already with an “appreciation” passive income plan to thank the community for their ongoing support.  This plan is based on the amount of bulls you hold from collection 1 and/or 2 combined.  Where is this money coming from you ask?  Well, each collection we create a few custom NFT which will go for a higher value and which will be used to create that reserve to do all these things so we don’t have to touch the initial investment of our holders.</p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                <p className=" text-muted mt-5 mt-md-4 fw-bold data">MONTHLY INCOME</p>
                                <div className='data'>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NFT</th>
      <th scope="col">XRP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>3-4 </td>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>5-6</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>7-8</td>
      <td>20</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>+9</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>+15 </td>
      <td>50</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>+25 </td>
      <td>100</td>
    </tr>
  </tbody>
</table>
</div>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>
                </div>

            


        </>
    )
}

export default PLAN1