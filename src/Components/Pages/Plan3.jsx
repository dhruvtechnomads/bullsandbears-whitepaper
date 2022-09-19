import React, { useState } from 'react'

const PLAN3 = () => {
    const [copySuccess, setCopySuccess] = useState("")



    
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h6 className=" playTitle pt-md-4 pl-xl-5 pl-md-0 ">
                                PLAN 3
                                </h6>
                                <p className='pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  '> PASSIVE INCOME GREATER THAN 10$ XRP</p>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                                <div className="h-50"> </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5  mt-md-4 data">Plan 3 is a surplus, based on plan 2.  The amount of bulls you hold from collection 3 will count here.</p>
                            </div>

                            {/* <img src='./PriceStability/eq1.png' style={{width:500 ,height:500}} alt=""></img> */}
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
      <th scope="col">EXTRA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>3+ </td>
      <td>5%</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>5+</td>
      <td>10%</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>10+</td>
      <td>25%</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>15+</td>
      <td>50%</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>25+ </td>
      <td>100%</td>
    </tr>
  </tbody>
</table>
</div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            

        </>
    )
}

export default PLAN3