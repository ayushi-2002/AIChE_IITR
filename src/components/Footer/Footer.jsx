import React from "react";
import './Footer.css';


export default class Footer extends React.Component{
    render(){
        return(
            <footer class="footer-distributed">
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>

	<link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></link>
                <div class="footer-left">

                <img src={`../aiche_logo.jpeg`} id = 'aiche_logo'/>
                <br/><br/>

                <p class="footer-company-name">AIChE IITR &copy; {new Date().getFullYear()}</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Roorkee - Haridwar Highway </span>Roorkee, Uttarakhand 247667</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 9116880783</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:aiche.iitr@gmail.com">aiche@ch.iitr.ac.in</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>ABOUT</span>
                        The American Institute of Chemical Engineers Chapter | IIT Roorkee is a student run chemical engineering professional organization. </p>

                    <div class="footer-icons">

                        <a href="https://www.facebook.com/aiche.iitr/"><i class="fa fa-facebook"></i></a>
                        <a href="https://medium.com/aiche-iitr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71">
                        <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36m322.89 0c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279m132.08 0c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"/>
                    </svg></a>
                        <a href="https://www.linkedin.com/company/aiche-iit-roorkee-student-s-chapter/about/"><i class="fa fa-linkedin"></i></a>
                        <a href={"mailto:aiche@ch.iitr.ac.in"}><i class="fa fa-envelope"></i></a>
                    </div>

                </div>
                <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="https://cdn.tutorialzine.com/misc/enhance/v2.js" async></script>

</footer>
        )
    }
}

