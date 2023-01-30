

//const root = document.getElementById('root');
//const elem = document.createElement('div');
//elem.appendChild('Hello');
/*
 const elem = React.createElement('div', {
    children: "Hello"
}); */

const container = document.getElementById('root');
let elem = <>
    <div class = "main_container">
        <div class="top_container">
            <h1>Fatemah AlThenyan</h1>
            <h2>|A Full-Stack Developer.</h2>
        </div>
        <div class="container">
        <div class="container1">
            <h3>CONTACT DETAILS</h3>
            <ul class="contact">
                <li><i class="fa-solid fa-phone"> </i> +966 50 838 0447</li>
                <li><i class="fa-solid fa-envelope"> </i>f.thenyan@gmail.com </li>
                <li><i class="fa-solid fa-location-dot"> </i>Saudi Arabia</li>
            </ul>
            <h3>LANGUAGES</h3>
            <ul>
                <li>Arabic</li>
                <li>English</li>
            </ul>
            <h3>Technical SKILLS</h3>
            <ul>
                <li>Front-end side, using HTML, CSS, Bootstrap, JavaScript and React.js.</li>
                <li>Back-end development skills in Node.js, Express.js, MongoDB, Heroku and Git.</li>
                <li>Analysis with Microsoft Excel, Alteryx, and Tableau program.</li>
                <li>Designing with Photoshop and Illustrator program.</li>
            </ul>
        </div>

        <div class="container1">
            <h3>EDUCATION</h3>
            <ul class="section">
                <li><b>Qassim University|</b> Bachelor's degree in Information Technology.</li>
                <li><b>Udacity|</b> Business Analyst Nanodegree Program.</li>
                <li><b>Satr, Tuwaiq Academy|</b> Full-Stack JavaScript Program.</li>
            </ul>
            <h3>TRAINING & EXPERIENCE</h3>
            <ul class="section">
                <li><b>Summer training at AlRajhi Bank|</b> Qassim University Cooperative Training Program</li>
                <li><b>Training at TrendMENA company|</b> iOS Developer, Swift Programming Language</li>
                <li><b>Graphic Designing as a freelancer|</b> I specialize in branding, logo design, and web design. With my creativity, I can turn your idea into reality.</li>
            </ul>
            <h3>WORKSHOP & COURSES</h3>
            <ul class="section">
                <li><b>Workshop at Saudi Aramco|</b> Saudi Aramco Female University Seminar, “IT Disciplines Workshop”.</li>
                <li><b>Courses at Technical & Vocational Training Corp|</b> Principles of Computer Maintenance and Technical support & Principles of Photoshop and Illustrator Design.</li>
                <li><b>Courses in Information Security|</b> Cyber Hacker Mobile Certified CHMC & Security+.</li>
            </ul>
            <h3>VOLUNTEERING</h3>
            <ul class="section">
                <li><b>Volunteering Taj.</b></li>
                <li><b>Glowork Career Fair.</b></li>
                <li><b>Saudi Food and Drug Authority Annual Conference.</b></li>
            </ul>
            <h3>ACHIEVEMENTS & PROJECTS</h3>
            <ul class="section">
                <li><b>Website|</b> Design and implement Women of History website.</li>
                <li><b>Mobile Application|</b> Build an Easy Order is Android application for offer and sale homemade sweets.</li>
                <li><b>Graduation Project|</b> Qassim University Interactive Map Site, with two pages of two dimensional and three dimensions.</li>
                <li><b>Personal Website|</b> Build a Portfolio using HTML, React, TailwindCSS, and Heroku.</li>
            </ul>          
        </div>
        </div>
        
        
    </div>
</>


ReactDOM.render(elem, container)