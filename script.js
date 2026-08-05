// ===========================
// Project Data
// ===========================

const projects = {

    stockout: {

        title: "Stockout Analysis",

        subtitle: "Python • Power BI • Retail Analytics",

        image: "assets/stockout-dashboard.png",

        github: null,

        dashboard: "https://drive.google.com/file/d/109j7pUzU9skUYBuR8lneeyKTffcXy0fG/view?usp=sharing",

        html: `

        <div class="details-content">
        
            <div class="details-grid">

                <div class="details-card">

                    <h4>
                        <i class="fas fa-circle-question"></i>
                        Business Problem
                    </h4>

                    <p>

                        A retail company experienced frequent product stockouts,
                        resulting in hidden revenue loss across high-demand stores.
                        Management lacked visibility into which stores required
                        replenishment priority.

                    </p>

                </div>

                <div class="details-card">

                    <h4>

                        <i class="fas fa-user-check"></i>

                        My Responsibilities

                    </h4>

                    <ul>

                        <li>Data Cleaning</li>

                        <li>Exploratory Data Analysis</li>

                        <li>Power BI Dashboard Development</li>

                        <li>Business Recommendations</li>

                    </ul>

                </div>

                <div class="details-card">

                    <h4>

                        <i class="fas fa-chart-line"></i>

                        Key Findings

                    </h4>

                    <ul>

                        <li>Overall stockout rate remained below 5%.</li>

                        <li>High-volume stores suffered significantly higher stockouts.</li>

                        <li>Estimated revenue loss exceeded $10K.</li>

                    </ul>

                </div>

                <div class="details-card">

                    <h4>

                        <i class="fas fa-lightbulb"></i>

                        Recommendations

                    </h4>

                    <ul>

                        <li>Demand-based replenishment.</li>

                        <li>Automatic stockout alerts.</li>

                        <li>Store-specific inventory strategy.</li>

                    </ul>

                </div>

            </div>

        </div>
            
        `

    },

    

    hospital: {

    title: "Revo Hospital: Optimizing Patient Throughput & Bed Capacity",

    subtitle: "Tableau • Healthcare Analytics • Dashboard Design",

    image: "assets/hospital-dashboard.png",

    github: null,

    dashboard: "https://public.tableau.com/app/profile/adiarsya.ghifari/viz/RevoHospital-OptimizingPatientThroughputBedCapacityAcrossJava_17794690057640/Dashboard1",

    html: `

    <div class="details-content">

        <div class="details-grid">

            <div class="details-card">

                <h4>
                    <i class="fas fa-circle-question"></i>
                    Business Problem
                </h4>

                <p>

                    Hospital management lacked visibility into patient throughput,
                    doctor workload, and resource utilization across multiple
                    branches. Without operational dashboards, identifying staffing
                    imbalances and bottlenecks was difficult, leading to inefficient
                    resource allocation.

                </p>

            </div>

            <div class="details-card">

                <h4>
                    <i class="fas fa-user-check"></i>
                    My Responsibilities
                </h4>

                <ul>

                    <li>Data Modeling & Table Relationships</li>

                    <li>Tableau Dashboard Development</li>

                    <li>KPI Design & Visualization</li>

                    <li>Operational Analysis</li>

                    <li>Business Recommendations</li>

                </ul>

            </div>

            <div class="details-card">

                <h4>
                    <i class="fas fa-chart-line"></i>
                    Key Findings
                </h4>

                <ul>

                    <li>Integrated 6 hospital datasets without introducing duplicate records.</li>

                    <li>Identified a 5.5× workload disparity between the busiest and least utilized doctors.</li>

                    <li>Internal Medicine and Emergency departments accounted for 37% of operational workload.</li>

                    <li>Detected administrative bottlenecks causing prolonged patient stays despite low doctor utilization.</li>

                </ul>

            </div>

            <div class="details-card">

                <h4>
                    <i class="fas fa-lightbulb"></i>
                    Recommendations
                </h4>

                <ul>

                    <li>Redistribute underutilized doctors to high-demand branches.</li>

                    <li>Prioritize staffing for Internal Medicine and Emergency departments.</li>

                    <li>Prepare flexible staffing plans for sudden admission surges.</li>

                    <li>Audit discharge processes in low-efficiency branches to reduce patient delays.</li>

                </ul>

            </div>

        </div>

    </div>

    `
    },

    racing: {

        title: "TBA",

        subtitle: "Python • Research",

        image: "assets/racing-dashboard.png",

        github: null,

        dashboard: null,

        html: `

            <h3>Coming Soon</h3>

            <p>
                TBA
            </p>

        `

    }

};

// ===========================
// Elements
// ===========================

const modal = document.getElementById("projectModal");

const modalBody = document.getElementById("modalBody");

const closeButton = document.querySelector(".close-modal");

// ===========================
// Open Project
// ===========================

function openProject(projectKey){

    const project = projects[projectKey];

    if (!project) return;

    modalBody.innerHTML = `

        <div class="details">
    
            <div class="details-header">

                <div>

                    <h2>

                        ${project.title}

                    </h2>

                    <p>

                        ${project.subtitle}

                    </p>

                </div>

            </div>

            <div class="dashboard-preview">

                <div class="browser-bar">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

                <img
                    src="${project.image}"
                    alt="${project.title} Dashboard"
                    class="details-image"
                    loading="lazy"
                    decoding="async">

            </div>

            ${project.html}

            ${project.github || project.dashboard ? `

            <div class="details-buttons">

                ${project.github ? `

                <a
                    href="${project.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-button">

                    <i class="fab fa-github"></i>

                    GitHub Repository

                </a>

                ` : ""}

                ${project.dashboard ? `

                <a
                    href="${project.dashboard}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-button">

                    <i class="fas fa-chart-bar"></i>

                    Interactive Dashboard

                </a>

                ` : ""}

            </div>

            ` : ""}

        </div>

    `;

    modal.style.display = "block";

    document.body.style.overflow = "hidden";

}

// ===========================
// Button Click
// ===========================

document.querySelectorAll(".view-project").forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        const card = button.closest(".project-card");

        openProject(card.dataset.project);

    });

});

// ===========================
// Close Modal
// ===========================

closeButton.addEventListener("click",()=>{

    modal.style.display="none";
    document.body.style.overflow = "";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";
        document.body.style.overflow = "";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.style.display="none";
        document.body.style.overflow = "";

    }

});