import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../pages/Footer';
import Contact from '../pages/Contact';

function App() {
    return (
  <>
<div class="theme-red">
  

  <div class="btn-back_to_top">
    <span class="ti-arrow-up"></span>
  </div>
  

  <div class="config">
    <div class="template-config">
    
      <div class="d-block">
        <button class="btn btn-fab btn-sm" id="sideel" title="Settings"><span class="ti-settings"></span></button>
      </div>
   
      <div class="d-block">
        <a href="#" class="btn btn-fab btn-sm" title="Get this template" data-toggle="tooltip" data-placement="left"><span class="ti-download"></span></a>
      </div>
   
      <div class="d-block">
        <a href="#" class="btn btn-fab btn-sm" title="Help" data-toggle="tooltip" data-placement="left"><span class="ti-help"></span></a>
      </div>
    </div>
    <div class="set-menu">
      <p>Select Color</p>
      <div class="color-bar" data-toggle="selected">
        <span class="color-item bg-theme-red selected" data-class="theme-red"></span>
        <span class="color-item bg-theme-blue" data-class="theme-blue"></span>
        <span class="color-item bg-theme-green" data-class="theme-green"></span>
        <span class="color-item bg-theme-orange" data-class="theme-orange"></span>
        <span class="color-item bg-theme-purple" data-class="theme-purple"></span>
      </div>
      <select class="custom-select d-block my-2" id="change-page">
        <option value="">Choose Page</option>
        <option value="index">Topbar</option>
        <option value="blog-topbar">Blog (Topbar)</option>
        <option value="index-2">Minibar</option>
        <option value="blog-minibar">Blog (Minibar)</option>
      </select>
    </div>
  </div>
  
  <div class="vg-page page-home" id="home">
   
    <div class="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
      <div class="container">
        <a href="" class="btn btn-fab btn-theme no-shadow">RK</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
          <span class="ti-menu"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#home" class="nav-link" data-animate="scrolling">Home</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link" data-animate="scrolling">About</a>
            </li>
          
            <li class="nav-item">
              <a href="#blogs" class="nav-link" data-animate="scrolling">Blogs</a>
            </li>
            <li class="nav-item">
              <a href="#skills" class="nav-link" data-animate="scrolling">My Skills</a>
            </li>
          
          
            <li class="nav-item">
              <a href="#contact" class="nav-link" data-animate="scrolling">Contact</a>
            </li>
            <li class="nav-item">
              <a href="#hire" class="nav-link" data-animate="scrolling">Hire ME</a>
            </li>
          </ul>
          <ul class="nav ml-auto">
            <li class="nav-item">
              <button class="btn btn-fab btn-theme no-shadow">En</button>
            </li>
          </ul>
        </div>
      </div>
    </div> 
 
    <div class="caption-header text-center wow zoomInDown">
      <h3 class="fw-normal"> Hello Welcome</h3>
      <h1 class="fw-light mb-4">I'm <b class="fg-theme">Rajkumar</b> Aryal</h1>
      <div class="badge">Python & Web site Backend Developer</div>
    </div> 
    <div class="floating-button"><span class="ti-mouse"></span></div>
  </div>
  
  <div class="page-about" id="about">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4 py-3">
          <div class="img-place wow fadeInUp">
            <img src="../assets/img/personal1.jpg" alt=""/>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 wow fadeInRight">
          <h1 class="fw-light">Rajkumar Aryal</h1>
          <h5 class="fg-theme mb-3">Python & Web site backend Developer</h5>
          <p class="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form but the majority have suffered alteration in some</p>
          <ul class="theme-list">
            <li><b>From:</b> Simle, Dhading</li>
            <li><b>Lives In:</b> Kathmandu,Nepal</li>
            <li><b>Age:</b> 20</li>
            <li><b>Gender:</b> Male</li>
          </ul>
          <button class="btn btn-theme-outline"><a href='https://drive.google.com/drive/u/1/my-drive'> Download CV </a></button>
        </div>
      </div>
    </div>
    <div class="container py-5"id="skills">
      <h1 class="text-center fw-normal wow fadeIn" >My Skills</h1>
      <div class="row py-3">
        <div class="col-md-6">
          <div class="px-lg-3">
            <h4 class="wow fadeInUp">Coding skills</h4>
            <div class="progress-wrapper wow fadeInUp">
              <span class="caption">JavaScript</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar">86%</div>
              </div>
            </div>
            
            <div class="progress-wrapper wow fadeInUp">
              <span class="caption">HTML + CSS</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar">100%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp">
              <span class="caption">Phyton</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar">90%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="px-lg-3">
            <h4 class="wow fadeInUp">Design Skills</h4>
            <div class="progress-wrapper wow fadeInUp">
              <span class="caption">UI / UX Design</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar">92%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp">
              <span class="caption">Web Design</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar">99%</div>
              </div>
            </div>
            <div class="progress-wrapper wow fadeInUp">
              <span class="caption">Logo Design</span>
              <div class="progress">
                <div class="progress-bar" role="progressbar">79%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    
    <div class="container pt-5">
      
    
      <div class="page-service">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="badge badge-subhead">Service</div>
      </div>
      <h1 class="fw-normal text-center wow fadeInUp">What can i do?</h1>
      <div class="row mt-5">
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card card-service wow fadeInUp">
            <div class="icon">
              <span class="ti-paint-bucket"></span>
            </div>
            <div class="caption">
              <h4 class="fg-theme">Web Design</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card card-service wow fadeInUp">
            <div class="icon">
              <span class="ti-search"></span>
            </div>
            <div class="caption">
              <h4 class="fg-theme">SEO</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card card-service wow fadeInUp">
            <div class="icon">
              <span class="ti-vector"></span>
            </div>
            <div class="caption">
              <h4 class="fg-theme">UI/UX Design</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card card-service wow fadeInUp">
            <div class="icon">
              <span class="ti-desktop"></span>
            </div>
            <div class="caption">
              <h4 class="fg-theme">Web Development</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div class="page-funfact" >
    <div class="container">
      <div class="row section-counter">
        <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
        <div class="fg-theme">
          <h1 class="number" data-number="68">0</h1>
          </div>
          <span class="auto">Clients</span>
        </div>
        <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
        <div class="fg-theme">
          <h1 class="number" data-number="23">0</h1>
          </div>
          <span class="auto">Project Compleate</span>
        </div>
        <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
        <div class="fg-theme">
        <div class="number">
          <h1 class="number" data-number="97">0</h1>
          </div>
          </div>
          <span class="auto">Project Ongoing</span>
        </div>
        <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
        <div class="fg-theme"><h1 class="number" data-number="85%">0</h1>
</div>
          <span class="auto">Client Satisfaction</span>
        </div>
      </div>
    </div>
  </div>
 
 

<hr/>
      <a class="#blogs"></a>
      <div class="page-blog" id="blogs">
    <div class="container">
      <div class="text-center">
        <div class="badge badge-subhead wow fadeInUp">Blog</div>
      </div>
      <h1 class="text-center fw-normal wow fadeInUp">Latest Post</h1>
      <div class="row post-grid">
        <div class="col-md-6 col-lg-4 wow fadeInUp">
          <div class="card">
            <div class="img-place">
              <img src="../assets/img/work/work-9.jpg" alt="blank"/>
            </div>
            <div class="caption">
              <a href="javascript:void(0)" class="post-category">Technology</a>
              <a href="#" class="post-title">Invision design forward fund</a>
              <span class="post-date"><span class="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 wow fadeInUp">
          <div class="card">
            <div class="img-place">
              <img src="../assets/img/work/work-6.jpg" alt="blank"/>
            </div>
            <div class="caption">
              <a href="javascript:void(0)" class="post-category">Business</a>
              <a href="#" class="post-title">Announcing a plan for small teams</a>
              <span class="post-date"><span class="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 wow fadeInUp">
          <div class="card">
            <div class="img-place">
              <img src="../assets/img/work/work-1.jpg" alt="blank"/>
            </div>
            <div class="caption">
              <a href="javascript:void(0)" class="post-category">Design</a>
              <a href="#" class="post-title">5 basic tips for illustrating</a>
              <span class="post-date"><span class="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div class="col-12 text-center py-3 wow fadeInUp">
          <a href="blog-fullbar.html" class="btn btn-theme">See All Post</a>
        </div>
      </div>
    </div>
  </div> 
  <Contact/>

  </div>
  </div>
  <br/>
  <br/>
  <br/>
<a class="#hire">
<Footer/>
</a>

  </>
   );
}

export default App;
