import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Pages/css/top.css"
import { Link, Route, Routes } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { ListGroup, Nav } from "react-bootstrap";
import Home from "./Intro/Home";
import PlaytoEarn from "./Intro/introduction";

// import usdd from '/Img/USDD.png'
// import {logo} from ""


const TopHeader = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [copySuccess, setCopySuccess] = useState("")



    
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("menu").style.opacity = "0";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("menu").style.opacity = "1";
    }

    return (
        <>

            <div className="container-fluid d-xxl-none d-xl-none d-lg-none d-md-none">
                <div className="d-flex justify-content-between mobileMenu" id="menu" style={{ background: "white", opacity: 1 }}>

                    <div style={{ fontSize: "40px", cursor: "pointer" }} onClick={openNav}>&#9776; </div>

                    <div className="d-flex mobilelogo " style={{ paddingTop: 10 }}>
                        {/* <div className=""> <img src={logo}/>\
                        </div> */}
                        <Link to="/intro" className="titleName"> Bulls and Bears </Link>
                        <div className="navbarSlideLine"></div>
                    </div>

                    <Button className="btnmobile " onClick={handleShow}>
                        <i className="fa fa-search " aria-hidden="true"></i>
                    </Button>

                </div>
                <div id="myNav" className="overlay">
                    {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
                    <div className="overlay-content">

                        {/* <p className="intro text-uppercase"> Introduction</p> */}
                        <a onClick={closeNav} className="target" href="#section0">INTRODUCTION</a>
                        <a onClick={closeNav} href="#section1"> A BIT OF HISTORY </a>
                        <a onClick={closeNav} href="#section4">PASSIVE INCOME </a>
                        <a onClick={closeNav} href="#section5">PLAN 1 </a>
                        <a onClick={closeNav} href="#section6">PLAN 2 </a>
                        <a onClick={closeNav} href="#section7"> PLAN 3 </a>
                        <a onClick={closeNav} href="#section8"> PLAN 4 </a>
                        <a onClick={closeNav} href="#section9"> PASSIVE INCOME PAYOUT PLAN</a>
                        <a onClick={closeNav} href="#section10"> PHASE 1</a>
                        <a onClick={closeNav} href="#section11"> PHASE 2</a>
                        <a onClick={closeNav} href="#section12"> PHASE 3</a>
                        <a onClick={closeNav} href="#section13"> ROADMAP</a>
                        {/* <a onClick={closeNav} href="#section14"> FAQ</a> */}
                    </div>

                </div>


                <main className="mobileset" >


                    <section id="section0" className="d-lg-none d-md-none  sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <img src="./Img/mobile.png" width="100%" height="100px" alt="img"></img>

                                    <div className="row" >
                                        <div className="col-md-9 col-lg-10 col-xl-8  col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-lg-2 pl-md-0 pl-xl-5 pt-md-4 intTitle">
                                                Introduction
                                            </h3>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <div className="SubTilteBorder  pt-2"></div>
                                            <p className=" text-muted mt-5 mt-md-4  data">Bulls and Bears NFT is a very limited collection of 1,111 Bullrun Bulls and 1,111 Bearmarket Bears.  The concept of our project has risen from the mindset of a real hodler.  We all know that if you compare the results of a day trader with a hodler, over the long run, the hodler will come out of the equation at the positive side much more often.  </p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <p className=" text-muted mt-5 mt-md-4  data">That’s the reason why the motto exist:<b> “Time in the market almost always beats ‘timing’ the market”</b></p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <p className=" text-muted mt-5 mt-md-4  data">On top of our base concept, we wanted to provide a long term vision for our investors.  We are scammed and rug pulled more than we ever could have expected, but that’s unfortunately still the name of crypto investing.  People have lost all their investments, life savings, even killed themselves over it…  That’s why we wanted to counter this with a true, honest and transparent project.  Therefore we created a quite simple method to help small and big investors to earn a passive income by combining the complete investment amount of all investors and converting it into an attractive plan for both of them.  All this based on just the investment they made in buying our NFTs.  </p>
                                        </div>
                                        <div className="  pt-2 text-muted mt-5 mt-md-4 fw-bold  data">
                                                This is probably not needed here
                                            </div>
                                            <p className=" text-muted mt-5 mt-md-4  data">We see projects popup everywhere and they all come out with some kind of passive income plan, which… if you look just a bit closer… you see immediately it is nothing more than baked air.  Not us, we created a project that pays out ‘real’ value in a trustworthy stable coin with which the investor can choose to do whatever they want in the real world.  No complicated constructions, no launch of an inflationary currency, no active engagement needed to generate this income, not dependent on a bull or bear market, … the list could go on and on.   We came up with the idea of a conservative investment plan for which we save (as good as all – minus a part for marketing, giveaways, collabs, …) the investor’s money in a separate account. In a later stage in the bull market, we will cash out the investment, which was made in XRP, to a stable coin to be able to not have to actively concern about generating money.  The amount of USD will be more than enough to cover the promised passive income plan.  The rest we will actively use in medium and high risk investments to have the possibility to generate and be able offer more than what was agreed upon as our basic passive income plan.  Not going too much into detail here because we will come back to this in the right section.</p>
                                            <div className="  pt-2 text-muted mt-5 mt-md-4  data">
                                                Yours Sincerely,
                                            </div>
                                            <div className="  pt-2 text-muted mt-5 mt-md-4  data">
                                                Permabull.
                                            </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section1" className="d-lg-none d-md-nonesesctionSet" style={{ paddingTop: 70 }}>
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-lg-2 pt-md-4  pl-md-0  pl-xl-5 intTitle">
                                                A BIT OF HISTORY

                                            </h3>


                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7">
                                            <div className="SubTilteBorder pt-2"></div>
                                            <p className=" text-muted mt-5 data">In a universe which exists in an alternate reality, there lived a clan of bulls who bowed to no one but their master – Gilgamesh. The bulls knew their realm would cease to flourish if Gilgamesh was harmed. What gave him this power to rule was a tale of ancient times, many believed it never happened, yet many had seen the signs of the epic battle that Gilgamesh had won against the ferocious lords of creation. To this day, some could hear the distant screams of the bears who were turned to pixels by the lords, so they would rely on concoctions to help their fading minds and drift them off to a restful sleep.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">Had it not been for Gilgamesh, Heracles would not rule over his kind, for his kind would have been wiped off the face of the realm. While the bears were a powerful force against the lords, they did not possess the intellect of the bulls – especially that of their forerunner. For this reason, Heracles knew there was a debt unpaid and lived in unison with the kingdom of Gilgamesh, trading coins of all kinds to ensure commerce was sustained and even allowed his subjects to take the hand of a bull in marriage. Deep inside however, Heracles was wounded; haunted by the images of that fateful day. He was raised to be a master, but no one could have predicted the arrival of the lords. It was the unique instinct which Gilgamesh possessed in warfare which became a cause for his envy, and while Heracles remained cordial over the years, he waited for the day he would be able to stand with his head held up high against his arch-enemy, victorious; admired; celebrated.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">Many among the realm of the bulls had acquired a fortune through trading, and now, this fortune was used to make Gilgamesh more powerful. They believed he would never have been victorious had he not himself been a Lord – the righteous lord who protected an entire kingdom against the lords of creation and banished them with nothing but his instinct. Gilgamesh now spent his days in meditation, harnessing the power he held within to protect both kingdoms against any threats they may ever see again. His time, he said, was precious. The scales were always tipping. And so the wealthy bulls maintained a continuous program of exchange between the bulls and bears, trading insights and secrets, creating a market of information which fed both peas in the pod.</p>
                                        </div>
                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">Everyone in the kingdom never knew about another bone of contention between Gilgamesh and Heracles – Freya. She was the most beautiful bear the kingdom had ever seen and Heracles’s younger sister, the long lost love of Gilgamesh. Before they left this realm, the lords of creation casted Freya into a web of ether, turning her into a lifeless yet immortal being who could no longer feel, but only think. She was alive, in a way unknown to everyone else. Gilgamesh would still speak with her past sometimes, but not her present, and it was believed by many that one day, Gilgamesh would step through the simulation of this realm to meet his beloved Freya, leaving everything behind. Heracles knew Freya was more than just someone’s love – she was meant to be the queen.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">Most of the secrets of Gilgamesh and Heracles were kept under guard by the wealthiest of the bulls and bears, for they knew the many happy families, the millions of people living in harmony within the realm would once again lose their sense of belonging, if they knew. So they were allowed to lead their lives in oblivion, celebrating the normalcy of their lives and creating a new generation through interbreeding – the Burls, fated to be the inheritors of a legacy the lords of creation left behind.</p>
                                        </div>

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">The Burls were a unique creature, fungible during the day and non-fungible as they slept. They could read minds and look into the past, but never did they reveal the ugly secrets of the past. They spoke no evil and did no harm. Both Gilgamesh and Heracles knew if the Burls were to lead, the future would be kind, but their species was still in a phase of growth, no Burl had grown old enough to marry another Burl and so, the kingdom had to wait.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data ">One of the Burls had grown an affinity for Gilgamesh and wanted to be in his service. He wanted to learn the art of meditation and gain the instincts which led Gilgamesh in the battle against the lords. His thirst for this knowledge led him to the forum where Gilgamesh lived every day, asking for a consultation. Every day he was turned away, yet something kept him coming back. He spoke of a dream he frequently had, a dream only Gilgamesh could explain – a dream which held a remedy for Freya.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data ">This Burl had a rare name, Nifta. No one knew exactly what it meant, but him. When asked about its meaning, Nifta would say only Gilgamesh is destined to know. The day Nifta would be granted an audience with Gilgamesh was yet to come.</p>
                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section4" className="d-lg-none d-md-none sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                                PASSIVE INCOME
                                            </h3>


                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-8">
                                            <div className="SubTilteBorder pt-2"></div>
                                            <p className=" text-muted mt-5 data">As you already know, … we are not your random NFT project.  We try to bring a unique new way of utility in every aspect of what NFTs might mean to you.  Does that mean we are coming out with complicated constructions?  Far from it.  Does that mean we are special, certainly not, but what I do know is… every step that we take, is to make sure it makes us as a community better.</p>
                                        </div>
                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-8">
                                            <p className=" text-muted mt-5 data">Many projects launch their own token in which you will need to invest or which is used to pay-out an actual return on your investment (holding the NFT).  That token can then be used to buy that project’s own products.  Unfortunately how green the grass may seem, the majority of these tokens have close to zero ‘real world’ value and won’t benefit anyone, mostly due to liquidity issues which bring major price fluctuations with it.  Other projects smash you with their airdrops left and right of extra NFTs as some kind of passive income, but in the end… you’re left with a bunch of NFTs which assumably never will create any real value but for the owner himself, because the backbone of these projects is so weak, they’ll never get adopted outside of the NFT space.  Those NFTs will end up just being good enough to print and to hang up somewhere in a room.  Other projects launch their own game (first person shooter, open world, … and no. 907 in the row) where you can use your NFTs or tokens to again, only be used with their product.  And yes… for a handful of these game projects, you will be able to earn extra tokens while actively playing the games and in a later stage, convert these tokens to other more reliable tokens, which then can be converted to $$.  But how many of these games you think will still exist 5 years from now?  And how many of these games that will exist, will actually have been adopted on a greater scale? And if so… are you planning to play these games all day long or engage with them on a daily basis to earn these tokens or gifts… because however you fold it… does that make it so much different than a 9-5 job?</p>
                                        </div>
                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-8">
                                            <p className=" text-muted mt-5 data">That’s why we really wanted to bring immediate real $$ value to our community. This project was mainly launched finding a way to help anyone who really believes in our idea and invests for the long term. The idea behind Bulls and Bears is so strong that, even if we are the biggest failure that the NFT market has ever seen, we will still be able to proceed with our promised passive income plan for our holders.
                                            <br/> And that’s a fact!</p>
                                        </div>
                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-8">
                                            <p className=" text-muted mt-5 data">Our idea gives the opportunity to small and big investors to enjoy the profits of the overall investment from all community members combined.  Even if the project doesn’t kick off big time, we will still be making our juicy $$ along the way. But.. if we actually do get a lot more traction, we can create f.e. more NFTs for these new investors (which will grow the investment amount and benefit all existing members), grow the existing community, launch our planned P2E mobile and desktop game, enter the metaverse, etc.  We will easily be able to raise the bar on our current basic passive income plan and on top of that… we will have the extra funds to invest in other projects which will create and bring more value to all of us passively!  But first things first…. Let’s check below what we have to offer for you as our absolute minimum.</p>
                                        </div>
                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-8 fw-bold">
                                            <p className=" text-muted mt-5 data">Check out our PASSIVE INCOME TIER PLAN.</p>
                                        </div>



                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section5" className="d-lg-none d-md-none sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                                PLAN 1
                                            </h3>
                                            <p className='pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  '> PASSIVE INCOME LESS THAN 10$ XRP</p>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <div className="SubTilteBorder pt-2"></div>
                                            <p className=" text-muted mt-5 mt-md-4 data">We started already with an “appreciation” passive income plan to thank the community for their ongoing support.  This plan is based on the amount of bulls you hold from collection 1 and/or 2 combined.  Where is this money coming from you ask?  Well, each collection we create a few custom NFT which will go for a higher value and which will be used to create that reserve to do all these things so we don’t have to touch the initial investment of our holders.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                            <p className=" text-muted mt-5 mt-md-4 fw-bold data">MONTHLY INCOME</p>
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


                            </div>

                        </div>
                    </section>
                    <section id="section6" className="d-lg-none d-md-none sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8" >
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  intTitle">
                                                PLAN 2
                                            </h3>
                                            <p className='pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  '> PASSIVE INCOME GREATER THAN 10$ XRP</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="SubTilteBorder pt-2"></div>
                                    </div>

                                </div>
                                

                                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="row">

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <p className=" text-muted mt-5  mt-md-4 data">A new tier system will start (which is the ‘real’ passive income plan) as soon as xrp hits 10$. This plan is based on the amount of bulls you hold from collection 1 and/or 2 combined.</p>
                            </div>

                            {/* <img src='./PriceStability/eq1.png' style={{width:500 ,height:500}} alt=""></img> */}
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className=" pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data"> <b>YEARLY INCOME</b> </p>
                            </div>

                            <table class="table">
  <thead>
    <tr>
      <th scope="col">TIER</th>
      <th scope="col">NFT</th>
      <th scope="col">Dollars($)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>3+ </td>
      <td>300</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>5+</td>
      <td>600</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>10+</td>
      <td>1500</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>25+</td>
      <td>3900</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>50+ </td>
      <td>9000</td>
    </tr>
  </tbody>
</table>



                                        </div>
                                    </div>


                                </div>

                        </div>

                    </section>
                    <section id="section7" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h6 className=" playTitle pt-md-4 pl-xl-5 pl-md-0 ">
                                                PLAN 3
                                            </h6>


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
                            <table class="table">
  <thead>
    <tr>
      <th scope="col">TIER</th>
      <th scope="col">NFT</th>
      <th scope="col">EXTRA </th>
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


                            </div>

                        </div>
                    </section>
                    <section id="section8" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-xl-5 pt-md-4  pl-md-0 intTitle">
                                                PLAN 4
                                            </h3>
                                        </div>
                                        <div className="h-25"> 
                                        </div>
                                     </div>

                                </div>
                                <div className="tab-content" id="v-pills-tabContent">

                                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="row">

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted   fw-bold data">A LOTTERY SYSTEM THAT WILL BE ACTIVATED AFTER 2 CONDITIONS ARE MET</p>
                                <p className=" text-muted data">1. PRICE OF XRP IS GREATER THAN 10$ </p>
                                <p className=" text-muted data">2. COMPLETE SELLOUT OF A NEW “EXTREME SPECIAL” COLLECTION OF 111 BULLS </p>
                            </div>

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
      <th scope="col">LOTTERY TICKET</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1+ </td>
      <td>1</td>
    </tr>

  </tbody>
</table>

<ul className='data fw-bold'>
        <li >
        PRICES WILL HAVE A VALUE OF $100 – $1,000 EACH AND EVERY MONTH
        </li>
</ul>
</div>

<div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className=" pt-2"></div>
                                <p className=" text-muted mt-5 fw-bold mt-md-4 data"> <u>DISCLAIMER:</u> </p>
                                <p className='data'>
                                We will have 1 more very unique and small (111 NFT) Bull collection.  Holding only 1 of these NFTs will make you eligible to win a monthly lottery draw!  Every month we will draw one random winner and it is even possible to win multiple times in a row.  Although the draw will result in a winning bull number, a smart owner could think of buying a few of these bulls and holding them in separate wallets.  Unfortunately for them it will not work that way.  We have the idea to stay connected with the community for the long run.  This means that we will be handing out your price personally every month.  If you do hold more bulls, we will find out soon enough and you will be disqualified for the draw, unless you give up these bull number beforehand so we can withdraw them from the lottery.  That way you can still hold more bulls if you are planning to sell some down the road.  While we do have a reservation list to counter whales, if at launch, there are still a few bulls left for sale… I can’t stop you from buying 1 or 2 more with the idea the flip them when the lottery kicks off.
                                </p>
                                <p className='data'>
                                So… getting back to the guidelines… Holding more than 1 bull won’t give you more chances for the lottery.  This to keep it honest for small investors who actually came up with the initial question to create a plan for investors who don’t have the funds to make it to the highest passive income tiers.  We will do everything to honour that plan!
                                </p>
                            </div>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </section>
                    <section id="section9" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                            PASSIVE INCOME PAYOUT PLAN
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="row">


                                    <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">Check out The <b>PASSIVE INCOME PAYOUT PLAN</b> created for you in following pages... </p>
                                </div>


                                    </div>

                                </div>


                            </div>

                        </div >

                    </section>
                    <section id="section10" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-xl-5  pt-md-4  pl-md-0  intTitle">
                                            PHASE 1

                                            </h3>


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

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section11" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                            PHASE 2

                                            </h3>


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

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section12" className="d-lg-none d-md-none">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <div className="pt-5 pl-3  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                            PHASE 3

                                            </div>
                                            <p className='pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  '> At the end of each year (starting from year 2)</p>
                                           


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

                        </div>
                    </section>
                    <section id="section13" className="d-lg-none d-md-none">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h6 className=" playTitle  pt-md-4  pl-xl-5 pl-md-0">
                                            ROADMAP
                                            </h6>
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

                                </div>


                            </div>

                        </div>
                    </section>
                    {/* <section id="section14" className="d-lg-none d-md-none">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h6 className=" playTitle  pt-md-4  pl-xl-5 pl-md-0">
                                            FAQ
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>  
                            </div>

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
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      When can I claim my rewards?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Rewards will be paid out 100% as soon as the claim period arrives.  At the moment it is set to once per year, but we are working on a solution to make this monthly.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What is the ROI?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The ROI is based on the amount of bulls and bears you hold.  The exact amounts can be found under the passive income tab on our website.  Each month we will scan you wallet and register the amount hold at that time.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What happens to the ROI when we enter a prolonged bear market?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Your ROI will have the exactly the same base minimum amount during bull and bear markets.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Can I raise my ROI?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The only way to raise your ROI is to elevate yourself to the next tier.  If you already are highest tier level, then it will all depend on the secondary investments we make following the strategy you can find in this whitepaper.</div>
    </div>
  </div>
</div>
                                        

                                    </div>

                                </div>


                            </div>

                        </div>
                    </section> */}
                </main>

            </div>

            <nav className="navbar navbar-expand-lg navBtm bg-white setShowNav mobileView">
                <div className="container-fluid">

                    <div className="d-flex ">
                        <Link className="navbar-brand" to="/intro" >
                            <div className="logo" 
                            // onClick={window.location.href="index.html"}
                            >
                                <div className="titleIcon"> <img src="/Img/logo.png" alt="Logo" className="imagesSet" /></div>
                                {/* <div className="titleIcon"> 1</div> */}
                                <div className="titleName"> Bulls and Bears </div>
                                <div className="navbarSlideLine"></div>
                            </div>
                        </Link>
                    </div>
                    <div></div>
                    {/* <div>
                        <div className=" navbarSlideLine ">
                            <Button className="btnSearch " onClick={handleShow}>
                                <i className="fa fa-search " aria-hidden="true"></i> Search
                            </Button>
                        </div>

                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>

                            </Modal.Header>
                            <Modal.Body>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 searchBox"
                                    aria-label="Search"
                                />
                            </Modal.Body>

                        </Modal>

                    </div> */}

                </div>
            </nav >

        </>

    )
}

export default TopHeader