import React from 'react';
import Logo from '../Assets/images/Logo 1.png';
import image from '../Assets/images/image.png';
import Asset5 from '../Assets/images/Asset 5.png';
import unnamed from '../Assets/images/unnamed.png';
import Adoni from '../Assets/images/Adone.png';
import Himmli from '../Assets/images/Himmlische.png';
import Nandanam from '../Assets/images/andaman.png';
import residence from '../Assets/images/Private Res.png';
import condensat from '../Assets/images/Asset 12.png';
import Sludge from '../Assets/images/Asset 13.png';
import tanks from '../Assets/images/Asset 14.png';
import Mvre from '../Assets/images/Asset 15.png';
import Bio from '../Assets/images/Asset 16.png';
import RO from '../Assets/images/Asset 17.png';
import primary from '../Assets/images/Asset 18.png';
import tank from '../Assets/images/Asset 19.png';
import secondary from '../Assets/images/Asset 20.png';
import oil from '../Assets/images/Asset 21.png';
import reactor from '../Assets/images/Asset 22.png';
import htds from '../Assets/images/Asset 23.png';
import asset25 from '../Assets/images/Asset 25.png';
import asset26 from '../Assets/images/Asset 26.png';
import asset27 from '../Assets/images/Asset 27.png';
import asset28 from '../Assets/images/Asset 28.png';
import asset29 from '../Assets/images/Asset 29.png';
import Arkiton from '../Assets/images/Arkiton.jpg';
import SliverBells from '../Assets/images/Sliver Bells.png';
import Sindhura from '../Assets/images/Sindhura.png';
import WhitePetals from '../Assets/images/White Petals.png';
import Bommarillu from '../Assets/images/Bommarillu.png';
import Greenwoods from '../Assets/images/GreenWoods.png';
import Palash from '../Assets/images/The Palash.png';
import Srinivasam from '../Assets/images/Srivisavam.png';
import Trillium from '../Assets/images/The Trillium.png';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
//import Slider from 'react-slick';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import ReactCardSlider from 'react-card-slider-component';
import "../styling/Style.css";
import { render } from 'react-dom';
//import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
function Home() {
    const [data, setData] = useState({ FirstName: "", LastName: "", email: "", number: "", enquiry: "" });
    const handleChange = (e) => {
        const FirstName = e.target.name;
        const value = e.target.value;
        setData({ ...data, [FirstName]: value })
    }
    function ValidateEmail(input) {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (input.value.match(validRegex)) {

            alert("Valid email address!");

            document.form1.text1.focus();

            return true;

        } else {

            alert("Invalid email address!");

            document.form1.text1.focus();

            return false;

        }
        var phone_input = document.getElementById("myform_phone");

        phone_input.addEventListener('input', () => {
            phone_input.setCustomValidity('');
            phone_input.checkValidity();
        });

        phone_input.addEventListener('invalid', () => {
            if (phone_input.value === '') {
                phone_input.setCustomValidity('Enter phone number!');
            } else {
                phone_input.setCustomValidity('Enter phone number is invalid');
            }
        });
    }
    const slides = [
        {/*{ image: { unnamed }, title: "Blue Meadows", description: "1,60,000 sft., Varthur, Bangalore",clickEvent:sliderClick },
        { image: { Adoni }, title: "Adoni Court Building", description: "1,60,000 sft., Varthur, Bangalore",clickEvent:sliderClick },
        { image: { Himmli }, title: "Blue Meadows", description: "1,60,000 sft., Varthur, Bangalore",clickEvent:sliderClick },
        { image: { Nandanam }, title: "Blue Meadows", description: "1,60,000 sft., Varthur, Bangalore",clickEvent:sliderClick },
    { image: { residence }, title: "Blue Meadows", description: "1,60,000 sft., Varthur, Bangalore",clickEvent:sliderClick },*/}
    ]
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
    return (
        <>
            <section className="universal-ennessar">
                <div className='navelements'>
                    <ul>
                        <div className="nav-img">
                            <img className='image' src={Logo} alt='' />
                        </div>
                        <div className="nav-links">
                            <li>
                                <a href='#Home'>Home</a>
                            </li>
                            <li>
                                <a href='#Manage'>About</a>
                            </li>
                            <li>
                                <a href='#current'>Projects</a>
                            </li>
                            <li>
                                <a href='#Services'>Services</a>
                            </li>
                            <li>
                                <a href='#Contact-Us'>Contact us</a>
                            </li>
                        </div>
                    </ul>
                    <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
                </div>
                {/* <div className='container'>
                    <img src={image} alt='error loading in image' />
                    <p className='Content'>
                        <span className='we'> We<br></br></span>
                        <span className='build'>BUILD </span><span className='bold'>YOUR<br></br>
                            Future<br></br></span>
                        <span className='style'>A company with over a decade of expertise known for<br></br>
                            building trust,safety and dreams.</span>
                    </p>
                </div> */}
                <div id='Home'>
                    <section className="home-header">
                        <p className='We'>We</p>
                        <p className='Build'>BUILD  <span className='Your'>YOUR</span></p>
                        <p className='Future'>Future</p>
                        <div id='Manage'>
                            <p className='Content'>A company with over a decade of expertise known for<br></br>
                                building trust, safety and dreams.</p>
                        </div>
                    </section>
                </div>
                <div className='Manager'>
                    <img src={Asset5} alt='error loading in image' />
                    <h1 className='about'>ABOUT THE MANAGEMENT
                        <p className='info'>Ennessaar has laid emphasis on sustainable  growth over the last decade through reinventing itself constantly. Directing this magnanimous company is its Managing Director Sri N Srinivasa Reddy. Built on simple values and ethics, he has played a pivotal role evolving the company to the level where it enjoys highest customers satisfaction index and making each structure an efficient building in itself. With a rich experience of over 20 years in civil, electrical and construction activities, he has very good knowledge about Vaastu, which helps in better designing of the projects.</p></h1>
                </div>
                <div className='Main'>
                    <div>
                        <h1 className='Company'>ABOUT COMPANY
                            <p className='Data'>At Ennessaar, we know what it takes to make your dream come true and turn your visions into materiality. Over 14 years of proficiency has educated us about how to deliver on every project, regardless the size of the project. With a team of adept and experienced professionals ready to take on any Herculean project, we are here to help you bring into existence, your dream project.</p></h1>
                    </div>
                    <div className='photo'>
                        <img src={Logo} alt='error loading in image' />
                        <div id='current'>
                        </div>
                    </div>
                </div>
                {/*<div id='current'>
                    <div class="slide-container">
                        <div className='slide-content'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='image-box'>
                                        <img src={unnamed} alt='' className='card-img' />
                                    </div>
                                    <div className="profile-details">
                                        <h2>Blue Meadows</h2>
                                        <p>1,60,000 sft., Varthur, Bangalore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>*/}
            <section className='Cur'>
                <div className='Project-heading'>
                    <h1>OUR CURRENT PROJECTS</h1>
                </div>
                <div className="App">
                    <Carousel breakPoints={breakPoints}>
                        <Item className='Wrap'><div className='Cur'>
                            <img src={unnamed} alt='' className='card-img'/>
                            <p><b>Blue Meadows</b></p>
                            <p>1,60,000 sft., Varthur, Bangalore.</p></div></Item>
                        <Item className='Wrap'>
                            <div className='Curen'>
                                <img src={Adoni} alt='' className='card-img' />
                                <p><b>Adoni Court Building</b></p>
                                <p>70,000 sft., Kurnool, Andhra Pradesh.</p>
                            </div></Item>
                        <Item className='Wrap'>
                            <div className='Curen'>
                                <img src={Himmli} alt='' className='card-img' />
                                <p><b>Himmlische</b></p>
                                <p>50,000 sft., ITPL, Bangalore.</p>
                            </div>
                        </Item>
                        <Item className='Wrap'>
                            <div className='Curen'>
                                <img src={Nandanam} alt='' className='card-img' />
                                <p><b>Mukunda Nandanam</b></p>
                                <p>2,70,000 sft., White Field, Bangalore.</p>
                            </div>
                        </Item>
                        <Item className='Wrap'>
                            <div className='Curen'>
                                <img src={residence} alt='' className='card-img' />
                                <p><b>Private Residence</b></p>
                                <p>25,000 sft., Kurnool, AP.</p>
                            </div>
                        </Item>
                    </Carousel>
                </div>
                <div className='completed-heading'>
                    <h1>OUR COMPLETED PROJECTS</h1>
                </div>
                <div className="App">
                    <Carousel breakPoints={breakPoints}>
                        <Item><div className='Cur'>
                            <img src={SliverBells} alt='' className='card-img' />
                            <p><b>Sliver Bells</b></p>
                            <p>90,000 sft.,89 units Varthur, Bangalore.</p></div></Item>
                        <Item>
                            <div className='Curen'>
                                <img src={Trillium} alt='' className='card-img' />
                                <p><b>The Trillium</b></p>
                                <p>76,000 sft.,64 units, Balagera,Bangalore.</p>
                            </div></Item>
                        <Item>
                            <div className='Curen'>
                                <img src={Greenwoods} alt='' className='card-img' />
                                <p><b>Green Woods</b></p>
                                <p>75,000 sft.,64 units, White Field,Bangalore.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='Curen'>
                                <img src={Palash} alt='' className='card-img' />
                                <p><b>The Palash</b></p>
                                <p>50,000 sft., Varthur, Bangalore.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='Curen'>
                                <img src={WhitePetals} alt='' className='card-img' />
                                <p><b>White Petals</b></p>
                                <p>45,000 sft.,40 units,Varthur, Bangalore.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='Curen'>
                                <img src={Bommarillu} alt='' className='card-img' />
                                <p><b>Bommarillu</b></p>
                                <p>45,000 sft.,40 units,Varthur, Bangalore.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='Curen'>
                                <img src={Sindhura} alt='' className='card-img' />
                                <p><b>Sindhura Residency</b></p>
                                <p>25,000 sft.,20 units,Manikonda, Hyderabad.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='Curen'>
                                <img src={Srinivasam} alt='' className='card-img' />
                                <p><b>Srinivasam</b></p>
                                <p>15,000 sft.,10 units,Manikonda, Hyderabad.</p>
                            </div>
                        </Item>
                    </Carousel>
                </div>
                </section>

               {/* <section className='completed-works'>
                    <div className='completed-heading'>
                        <h1>OUR COMPLETED PROJECTS</h1>
                    </div>
                    <div className='completed-cards'>
                        <div>
                            <button class='icon'><i class='fas fa-angle-double-left'></i></button></div>
                        <div className='coln'>
                            <div className='Complete-image'>
                                <img src={SliverBells} alt='' className='card-img' />
                                <h1>Sliver Bells</h1>
                                <p>90,000 sft.,89 units Varthur, Bangalore.</p>
                            </div>
                            <div className='Complete-image'>
                                <img src={Trillium} alt='' className='card-img' />
                                <h1>The Trillium</h1>
                                <p>76,000 sft.,64 units, Balagera,Bangalore.</p>
                            </div>
                            <div className='Complete-image'>
                                <img src={Greenwoods} alt='' className='card-img' />
                                <h1>Green Woods</h1>
                                <p>75,000 sft.,64 units, White Field,Bangalore.</p>
                            </div>
                            <div className='Complete-image'>
                                <img src={Palash} alt='' className='card-img' />
                                <h1>The Palash</h1>
                                <p>50,000 sft., Varthur, Bangalore.</p>
                            </div>
                            <div className='Complete-image'>
                                <img src={WhitePetals} alt='' className='card-img' />
                                <h1>White Petals</h1>
                                <p>45,000 sft.,40 units,Varthur, Bangalore.</p>
                            </div>
                            <div className='Complete-image'>
                                <img src={Bommarillu} alt='' className='card-img' />
                                <h1>Bommarillu</h1>
                                <p>45,000 sft.,40 units,Varthur, Bangalore.</p>
                            </div>
                            <div className='Complete-image'>
                                <img src={Sindhura} alt='' className='card-img' />
                                <h1>Sindhura Residency </h1>
                                <p>25,000 sft.,20 units,Manikonda, Hyderabad.</p>
                            </div>
                            <div className='Complete-image'>
                                <img src={Srinivasam} alt='' className='card-img' />
                                <div id='Services'></div>
                                <h1>Srinivasam</h1>
                                <p>15,000 sft.,10 units,Manikonda, Hyderabad.</p>
                            </div>
                        </div>
                    </div>
        </section>*/}
                {/* <section className='civil'>
                    <div className='column'>
                        <div className='row'>
                            <img src={condensat} alt='error loading in image' />
                            <div className='contain'>
                                <p>MVRE condensat tank 250KL</p>
                            </div>
                            <img src={Sludge} alt='error loading in image' />
                            <div className='contain'>
                                <p>INS Back wash & Sludge tanks capacity - 34KL</p>
                            </div>
                            <img src={tanks} alt='' />
                            <div className='contain'>
                                <p>INS sludge tanks capacity - 33 KL</p>
                            </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='row'>
                            <img src={Mvre} alt='' />
                            <p>MVRE feed tank capacity 250KL</p>
                            <img src={Bio} alt='' />
                            <p>Bio reactors 2 tank capacity 188 KL</p>
                            <img src={RO} alt='' />
                            <p>RO product tank 350 KL</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='row'>
                            <img src={primary} alt='' />
                            <p>Primary clarifiers 2 tank 200KL</p>
                            <img src={tank} alt='' />
                            <p>Sludge tank capacity - 40.5 KL</p>
                            <img src={secondary} alt='' />
                            <p>Secondary clarifiers capacity - 63 KL</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='row'>
                            <img src={oil} alt='' />
                            <p>Oil and grease tank 1700 KL</p>
                            <img src={reactor} alt='' />
                            <p>Bio reactors 2 tank capacity - 188 KL</p>
                            <img src={htds} alt='' />
                            <p>HTDS holding tank capacity - 1800 KL</p>
                        </div>
                    </div>
        </section> */}
                <section className="civil-works">
                    <div className="civil-heading">
                        <h1 className='cetp'>CETP CIVIL WORKS,</h1><br></br><p>KIADB,BIDAR,KARNATAKA</p>
                    </div>
                    <div className="civil-cards">
                        <div className="col">
                            <div className="row">
                                <img src={condensat} alt="" />
                                <p>MVRE condensat tank 250KL</p>
                            </div>
                            <div className="row">
                                <img src={Sludge} alt="" />
                                <p>INS Back wash & Sludge tanks capacity - 34KL</p>
                            </div>
                            <div className="row">
                                <img src={tanks} alt="" />
                                <p>INS sludge tanks capacity - 33 KL</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={Mvre} alt="" />
                                <p>MVRE feed tank capacity 250KL</p>
                            </div>
                            <div className="row">
                                <img src={Bio} alt="" />
                                <p>Bio reactors 2 tank capacity 188 KL</p>
                            </div>
                            <div className="row">
                                <img src={RO} alt="" />
                                <p>RO product tank 350 KL</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={primary} alt="" />
                                <p>Primary clarifiers 2 tank 200KL</p>
                            </div>
                            <div className="row">
                                <img src={tank} alt="" />
                                <p>Sludge tank capacity - 40.5 KL</p>
                            </div>
                            <div className="row">
                                <img src={secondary} alt="" />
                                <p>Secondary clarifiers capacity - 63 KL</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img src={oil} alt="" />
                                <p>Oil and grease tank 1700 KL</p>
                            </div>
                            <div className="row">
                                <img src={reactor} alt="" />
                                <p>Bio reactors 2 tank capacity - 188 KL</p>
                            </div>
                            <div className="row">
                                <img src={htds} alt="" />
                                <p>HTDS holding tank capacity - 1800 KL</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='engineer'>
                    <div className='Eng'>
                        <img src={asset25} alt='' />
                    </div>
                    <div className='matter'>
                        <h1>CIVIL ENGINEERING<p> Ennessaar’s Civil Team is specialised in the design of efficient and cost-effective stormwater drainage systems for housing, commercial and industrial buildings and multi-unit developments. Our team can assist with any subdivision work, from conceptual and feasibility studies to detailed design, contract documentation and construction supervision.</p></h1>
                    </div>
                </div>
                <div className='complete'>
                    <div className='project'>
                        <h1>COMPLETE PROJECT MANAGEMENT<p>Our dedicated Complete Project  Management team has existing partnerships with industry stakeholders, enabling us to provide an end-to-end project management service for Class 2 builds and developments. Our project management team gets you there faster.</p></h1>
                    </div>
                    <div className='pic'>
                        <img src={asset26} alt='' />
                    </div>
                </div>
                <div className='inspect'>
                    <div className='inspectphoto'>
                        <img src={asset27} alt='' />
                    </div>
                    <div className='structure'>
                        <h1>STRUCTURAL INSPECTION<p>Ennessaar’s Structural Inspection team is made up of experienced engineers and professionals who conduct site investigations, compliance inspections and provide construction advice.</p></h1>
                    </div>
                </div>
                <div className='Mep'>
                    <div className='str'>
                        <h1>MEP Projects<p>Ennessaar conducts field investigations and testing, on-site laboratory testing of soil material and other exploratory work for residential, commercial, land  development and industrial developments. Our materials testing laboratory allows us to provide a punctual and reliable service whilst delivering accurate results at all times.</p></h1>
                    <div id='Contact-Us'></div>
                    </div>
                    <div className='set'>
                        <img src={asset28} alt='' />
                    </div>
                </div>
                <section className='Touch'>
                    <form method="post">
                        <h1>Get In Touch With Us</h1>
                        <input type='text' name='FirstName' id='' onChange={handleChange} value={data.FirstName} placeholder='FirstName' />
                        <input type='text' name='LastName' id='' onChange={handleChange} value={data.LastName} placeholder='LastName' />
                        <input type='email' name='email' id='' onChange={handleChange} value={data.email} placeholder='example@gmail.com' onclick="ValidateEmail(document.form1.text1)" required />
                        <input type="tel" id="myform_phone" placeholder='+91' name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" format= '123-456-7890' required />
                        <textarea name='enquiry' id='' cols="30" onChange={handleChange} value={data.enquiry} rows="10" placeholder='enter here...'></textarea>
                        <button type='submit'>SUBMIT</button>
                    </form>
                    <div className='frame'>
                        <img src={asset29} alt='' />
                    </div>
                </section>
                <div className='Ar'>
                    <div className='Arkiton'>
                        <h1 className='Architect'>Our Architects</h1><br></br>
                        <img src={Arkiton} alt='' />
                    </div>
                    <div className='Audi'>
                        <h1 className='Auditor'> Our Auditors</h1><br></br>
                        <p className='Co'>Krishna Reddy & Co<br></br>
                            Chartered Accountants</p>
                    </div>
                    <div className='Bank'>
                        <h1 className='Banker'>Our Bankers</h1><br></br>
                        <p className='Hdfc'>HDFC Bank,Manikonda,Hyderabad<br></br>Karur Vysya Bank,Manikonda,Hyderabad</p>
                    </div>
                </div>
                <div className='footer'>
                    <div className='Us'>
                        <h1>About us</h1>
                        <p>We are committed to providing the most personalized real estate services from listing to close. We have exceptional
                            results which are confirmed by the number of clients we serve.</p>
                    </div>
                    <div className='our'>
                        <h1>Our Service</h1>
                        <ul id='our-service' class='menu'>
                            <a href="tel:+918553499999" class="menu-link">📞  +91 8553499999</a><br></br>
                            <a href='mailto:hello@ennessaar.com'>✉️ hello@ennessaar.com</a><br></br>
                            <a href="https://maps.app.goo.gl/Y7HGQdoBPQgaj74w7?g_st=iw" target="_blank">🗺️3-133/8/P2, Srinivasam,Friends Colony, Manikonda, HYD-500089</a>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
