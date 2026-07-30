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

        title: "Hospital Operations Dashboard",

        subtitle: "Tableau • SQL • Healthcare",

        image: "assets/hospital-dashboard.png",

        github: null,

        dashboard: null,

        html: `

            <h3>Coming Soon</h3>

            <p>
                Hospital case study will be added next.
            </p>

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

            <img
                src="${project.image}"
                alt="${project.title} Dashboard"
                class="details-image"
                loading="lazy"
                decoding="async">

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