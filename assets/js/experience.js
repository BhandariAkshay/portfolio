AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Associate Business Consultant",
    cardImage: "assets/images/experience-page/tech_m.webp",
    place: "Tech Mahindra",
    time: "(Jan, 2024 - Present)",
    desp: "<li>Leading a team of 20 Analysts to handle projects related to Data Governance, Audit & Compliance, Quality, Geo Data Operations and Music at Google Inc.</li> <li>Developing KPIs and conducting Trend Analysis to manage an internal Index and managing concurrent Data Refresh requests to maintain the quality of data </li> <li>Designed PLX Pipelines to automate the process of carrying out YouTube Contracts Downgrading.</li><li>Automated Data Refresh process using Google App Script to save about a week of manual efforts.</li><li>Developing and Managing Dashboards in PLX and Looker Studio.</li><li><b>Tech Stack:</b> SQL, Python, Looker Studio, PLX Scripts & Dashboards, Big Query, App Scripts</li>",
  },
  {
    title: "Senior Consultant",
    cardImage: "assets/images/experience-page/quation.jpg",
    place: "Quation Solutions Pvt. Ltd.",
    time: "(Apr, 23 - Jan, 24)",
    desp: "<li>Led a team of 6 Analysts and ensured on-time and error free deliverables in Campaign Analytics for Titan.<li>Provided valuable learning for future campaigns on the basis of deep dives and segmented analysis.</li><li>Reviewed the effectiveness of the campaigns & understood what elements of the campaign worked well or not so well.</li><li>Optimized SQL Queries on Amazon Redshift and enabled every team member to follow best practices on Redshift.</li><li>Automated a couple of Manual Tasks to save 15 Hrs. of manual work every month using Python.</li><li><b>Tech Stack:</b> SQL, Python, Amazon S3, Amazon RedShift</li>",
  },
  {
    title: "Business Consultant",
    cardImage: "assets/images/experience-page/convergytics.jpg",
    place: "Convergytics Solutions Pvt. Ltd.",
    time: "(Aug, 21 - Apr, 23)",
    desp: "<li>Managed a team of 7 analysts and helped the team to migrate 40 dashboards from Sisense to Power BI in 3 months.</li><li>Conducted weekly analysis of Retails Sales, by creating efficient KPIs to help devise a business plan. Automated weekly tasks using Python & Selenium which saved 10 man hours of work, every week.</li><li>Developed a competitive pricing strategy using Web-Scraping.</li><li>Migrated SQL Server from On-Premise to Azure SQL Server Analytics.</li><li><b>Tech Stack:</b> SQL, Python, Power BI, Selenium</li>",
  },
  {
    title: "Team Lead",
    cardImage: "assets/images/experience-page/imperial.png",
    place: "Imperial Overseas Education Consultant",
    time: "(Jan, 18 - Aug, 21)",
    desp: "<li>Led a team of 5 members and managed Imperial's CRM portal, Website and LMS.</li><li>Developed a Software using Python to collate the data from their ETS provided scorecards and devised a logic to predict the score of GRE Mock Exam with accuracy of 97.83%.</li><li>Counseled and Trained 500+ students for their overseas education pursuit.</li><li>Coordinated with Management and IT Vendor for ensuring the right deliveries.</li><li><b>Tech Stack:</b> SQL, Python</li>",
  },
  {
    title: "Assistant System Engineer - Trainee",
    cardImage: "assets/images/experience-page/tcs.png",
    place: "Tata Consultancy Services",
    time: "(Aug, 16 - Aug, 17)",
    desp: "<li>Trained 700+ employees on Java Technology.</li><li>Created around 20+ Supply Chain Management Android Applications for Farmers and Traders to efficiently handle inventories.</li><li>Android Apps made trading a rich and rewarding experience.</li><li><b>Tech Stack:</b> Java, SQL, Android App Development</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GCP Certified Cloud Digital Leader",
    cardImage: "assets/images/experience-page/gcp.jpg",
    description: "A badge that demonstrates a foundational understanding of Google Cloud products and services.",
  },
  {
    title: "Mastering Amazon Redshift Development & Administration",
    cardImage: "assets/images/experience-page/udemy.png",
    description: "A-to-Z about Redshift Development as well as Administration",
  },
  {
    title: "Publication Certificate",
    cardImage: "assets/images/experience-page/ijar.jpg",
    description: "Research paper published for our final year project named Gesture Based Control System",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Chief Technical Officer",
    subtitle: "Computer Society of India",
    image: "assets/images/experience-page/csi.jpg",
    desp: "A position in Core Committee of CSI RAIT where I have to manage two Technical Heads and the technical team of 60 members. Conducted In-House technical workshops, fairs, etc. for college.",
  },
  {
    title: "Campus Embassador",
    subtitle: "Hacker Earth",
    image: "assets/images/experience-page/hackerearth.jpg",
    desp: "Organized first-ever 36 hour long hackathon with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "Web Master",
    subtitle: "Computer Society of India",
    image: "assets/images/experience-page/csi.jpg",
    desp: "Designed and maintained website and Android App for CSI RAIT. Developed Digital Certificate Software to ditribute Certificates to almost 3000+ participants of the Tech Fest.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div> 
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
