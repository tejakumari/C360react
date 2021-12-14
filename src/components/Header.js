import React from 'react'

export default function Header() {
    return (
        <div>
            	<header class="header">
		<div class="container">
			<div class="row ">
				<div class="col-md-3 col-sm-3">
					<a href="index.html"> <img src="images/logo.png" alt="C360soft" title="C360soft" class="logo stickylogo" width="auto" height="auto"/> <img src="images/logowhite.png" alt="C360soft" title="C360soft" class="logo staticlogo" width="auto" height="auto"/></a>
				</div>
				<div class="col-md-9 col-sm-9 text-right d-flex align-items-center">
					<div class="collapse nav navbar-collapse" id="navbar-collapse">
					  <ul class="mainmenu ">
						<li class=""><a href="#" class="">Services <i class="fa fa-angle-down" aria-hidden="true"></i></a>
							<div class="submenu">
								<div class="container">
								  <div class="row">
									<div class="col-md-3">
									  <ul>
										<li><a href="artificial-intelligence.html">  Artificial Intelligence</a></li>
										<li><a href="application-services.html">  Application Services</a></li>
									  </ul>
									</div>
									<div class="col-md-3">
									  <ul>
										<li><a href="cloud-services.html"> Cloud Services</a></li>
										<li><a href="devops.html">DevOps</a></li>
									  </ul>
									</div>
									<div class="col-md-3">
									  <ul>
										<li><a href="digital-transformation.html"> Digital Transformation</a></li>
										<li><a href="data-analytics.html"> Data Analytics</a></li>
									  </ul>
									</div>
									<div class="col-md-3">
									  <ul>
										<li><a href="product-development.html">Product Development</a></li>
										<li><a href="salesforce.html">Salesforce </a></li>
									  </ul>
									</div>
								  </div>
								</div>
							  </div>
						</li>
						<li class=""><a href="#" class="">Industries <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
							<div class="submenu">
								<div class="container">
								  <div class="row">
									<div class="col-md-3">
									  <ul>
										<li><a href="finance.html"> Finance</a></li>
										<li><a href="supply-chain-logistics.html"> Supply chain & Logistics</a></li>
										<li><a href="automotive-industry.html"> Automobile</a></li>
									   
									  </ul>
									</div>
									<div class="col-md-3">
									  <ul>
									  
										<li><a href="healthcare.html"> HealthCare </a></li>
										<li><a href="ai-marketing.html"> Marketing </a></li>
										 <li><a href="insurance.html"> Insurance</a></li>
									  </ul>
									</div>
									<div class="col-md-3">
									  <ul>
										 
										<li><a href="retail.html#">Retail</a></li>
										<li><a href="telecom.html">Telecommunications</a></li>
									  
									  </ul>
									</div>
									<div class="col-md-3">
									  <ul>
										
										<li><a href="education.html"> Education</a></li>
										<li><a href="manufacturing.html"> Manufacturing</a></li>
									  </ul>
									</div>
									
								  </div>
								</div>
							  </div>
						</li>
						<li class="insightdrop"><a href="#" class="">Insights <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
							<div class="submenu">
								<div class="container">
								  <div class="row">
									<div class="col-md-3">
									  <ul>
										<li><a href="machine-learning.html">  Machine Learning </a></li>
										<li><a href="full-stack-development.html">  Full Stack Development </a></li>
										<li><a href="tableau.html">  Tableau </a></li>
									  </ul>
									</div>
									<div class="col-md-3">
									  <ul>
										<li><a href="power-bi.html"> Power BI</a></li>
										<li><a href="devops-insight.html">  DevOps </a></li>
										<li><a href="computer-vision.html"> Computer Vision </a></li>
									  </ul>
									</div>
									<div class="col-md-3">
									 <ul>
									   <li><a href="deep-learning.html"> Deep Learning</a></li>
									   <li><a href="aws.html">  AWS </a></li>
									   <li><a href="azure.html">  Azure </a></li>
									 </ul>
								   </div>
								   <div class="col-md-3">
									 <ul>
									   <li><a href="nlp.html"> Natural Language Processing</a></li>
									   <li><a href="artificial-intelligence-insights.html">  Artificial Intelligence </a></li>
									 </ul>
								   </div>
									
								  </div>
								</div>
							  </div>
						   </li>
						<li class=""><a href="careers.html" class="">Careers</a></li>
						<li class=""><a href="aboutus.html#" class="">About C360 </a></li>
						<li class="getlink"><a href="#" class="" data-toggle="modal" data-target="#get_trained">Get Started</a></li>
					  </ul>
					</div>
				  </div>
			</div>
		</div>
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
	</header>
	<div class="herobanner">
		<div class="container">
			<div class="show-on-scroll">
				{/* <div class="heading"> */}
					<h1 class=" ">
                    <div class="globe zoom"> <img src="https://www.c360soft.ai/images/world.svg" class="" alt="C360 soft" title="C360 soft" width="1920" height="556"/> </div>
 
  The Future of<br></br>
 <span> AI </span> Is here </h1>
					<p><a href="#" class="" data-toggle="modal" data-target="#get_trained">Get In Touch</a> </p>
				{/* </div> */}
			</div>
		</div>

        </div>
       
	</div>
    )
}
