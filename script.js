// ===========================
// Project Data
// ===========================

const projects = {

    stockout: {

        title: "Stockout Analysis",

        subtitle: "Python • Power BI • Retail Analytics",

        image: "assets/stockout-dashboard.png",

        github: "#",

        dashboard: "#",

        html: `

            <div class="case-grid">

                <div class="case-card">

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

                <div class="case-card">

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

                <div class="case-card">

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

                <div class="case-card">

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

        `

    },

    hospital: {

        title: "Hospital Operations Dashboard",

        subtitle: "Tableau • SQL • Healthcare",

        image: "assets/hospital-dashboard.png",

        github: "#",

        dashboard: "#",

        html: `

            <h3>Coming Soon</h3>

            <p>
                Hospital case study will be added next.
            </p>

        `

    },

    racing: {

        title: "Horse Racing Analytics",

        subtitle: "Python • Research",

        image: "assets/racing-dashboard.png",

        github: "#",

        dashboard: "#",

        html: `

            <h3>Coming Soon</h3>

            <p>
                Horse Racing case study will be added next.
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

    modalBody.innerHTML = `

        <div class="case-study">

            <div class="case-study-header">

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
                class="case-study-image">

            ${project.html}

            <div class="case-buttons">

                <a
                    href="${project.github}"
                    target="_blank"
                    class="project-button">

                    <i class="fab fa-github"></i>

                    GitHub

                </a>

                <a
                    href="${project.dashboard}"
                    target="_blank"
                    class="project-button">

                    <i class="fas fa-chart-bar"></i>

                    Dashboard

                </a>

            </div>

        </div>

    `;

    modal.style.display = "block";

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

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.style.display="none";

    }

});