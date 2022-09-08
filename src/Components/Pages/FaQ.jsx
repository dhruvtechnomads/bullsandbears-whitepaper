import React, { useState } from 'react'

const FAQ = () => {
  const [copySuccess, setCopySuccess] = useState("")




  return (
    <>
      <div className="container-fluid d-lg-block d-xl-block d-md-block">


        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


            <div className="row">
              <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                  FAQ

                </h3>

                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
              </div>


            </div>

          </div>
          <div className="row">

            <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7">
              <div className="SubTilteBorder pt-2"></div>
            </div>

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How to I receive an ROI?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body ">As soon as you have 3 NFT from collection 1 and/or 2, you can start earning rewards.  The more NFT you hold, the more you will earn.  We follow a tight scheme which you can find under the passive income tab on our website.

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Can I compound rewards?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">No, it is not possible to compound rewards.  We at Bulls and Bears will do everything in our power to earn you as much as possible “extra” on top of your base ROI.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How can I claim my rewards?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">You just have to sit back and relax and as soon as your claim period arrives, we will make sure all get’s distributed to your registered xrp wallet.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingfour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                    When can I claim my rewards?
                  </button>
                </h2>
                <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="lush-headingfour" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Rewards will be paid out 100% as soon as the claim period arrives.  At the moment it is set to once per year, but we are working on a solution to make this monthly.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingfive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                    What is the ROI?
                  </button>
                </h2>
                <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">The ROI is based on the amount of bulls and bears you hold.  The exact amounts can be found under the passive income tab on our website.  Each month we will scan you wallet and register the amount hold at that time.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingsix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                    What happens to the ROI when we enter a prolonged bear market?
                  </button>
                </h2>
                <div id="flush-collapsesix" class="accordion-collapse collapse" aria-labelledby="flush-headingsix" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Your ROI will have the exactly the same base minimum amount during bull and bear markets.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingseven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven" aria-expanded="false" aria-controls="flush-collapseseven">
                    Can I raise my ROI?
                  </button>
                </h2>
                <div id="flush-collapseseven" class="accordion-collapse collapse" aria-labelledby="flush-headingseven" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">The only way to raise your ROI is to elevate yourself to the next tier.  If you already are highest tier level, then it will all depend on the secondary investments we make following the strategy you can find in this whitepaper.</div>
                </div>
              </div>
            </div>


          </div>
          {/* <button onClick={navigate("/play")}>Next Page</button>  */}
        </div>


      </div>



    </>
  )
}

export default FAQ