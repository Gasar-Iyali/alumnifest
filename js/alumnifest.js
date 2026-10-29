// Consolidated Theme Switching with Phosphor Icons & Local Storage
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Step 1: Initialize theme based on past local storage selection
const savedTheme = localStorage.getItem('theme') || 'light';

if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    // If dark mode is active, show the sun icon to switch back to light
    themeToggle.innerHTML = '<i class="ph ph-sun"></i>';
} else {
    htmlElement.setAttribute('data-theme', 'light');
    // If light mode is active, show the moon icon to switch to dark
    themeToggle.innerHTML = '<i class="ph ph-moon"></i>';
}

// Step 2: Handle click events to toggle modes
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply theme attribute to root
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Persist choice to local storage
    localStorage.setItem('theme', newTheme);
    
    // Swap icon states dynamically
    if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="ph ph-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="ph ph-moon"></i>';
    }
});


// CHANGE AND SAVE THEME TO LOCAL STORAGE
// const themeBtn = document.querySelector('.theme__btn')
// themeBtn.addEventListener('click', () => {
//     if(document.body.className == '') {
//         document.body.className = 'dark'
//         localStorage.setItem('portfolio__theme', 'dark') 
//         themeBtn.innerHTML = `<i class="ph ph-sun"></i>`    
//     } else {
//         document.body.className = ''
//         localStorage.setItem('portfolio__theme', '')
//         themeBtn.innerHTML = `<i class="ph ph-moon"></i>`
//     }
// })

// 1. Live Interactive Theme Switching (Light/Dark) with Local Storage Persistence
// const themeToggle = document.getElementById('themeToggle');
// const htmlElement = document.documentElement;

// Set the initial button text to "Dark Mode" because the site starts in Light Mode
// themeToggle.textContent = 'Dark Mode';

// Step 1: Check if the user has a saved theme preference from a previous visit
// // Check for saved theme preference in local storage
// const savedTheme = localStorage.getItem('theme');

// if (savedTheme === 'dark' || savedTheme === 'light') {
//     htmlElement.setAttribute('data-theme', savedTheme);
//     themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
// }
// if (savedTheme === 'dark') {
    // If they chose dark mode previously, set the theme to dark and update the button text
//     htmlElement.setAttribute('data-theme', 'dark');
//     themeToggle.textContent = 'Light Mode';
// } else {
    // If they chose light mode or have no preference, set the theme to light and update the button text
//     htmlElement.setAttribute('data-theme', 'light');
//     themeToggle.textContent = 'Dark Mode';
// }
    // htmlElement.setAttribute('data-theme', 'dark');
    // themeToggle.textContent = 'Light Mode';

// Step 2: Handle the theme switching when the button is clicked
// themeToggle.addEventListener('click', () => {
    // If data-theme doesn't exist yet, default it to 'light'
    // const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    // const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply the new theme to the document
    // htmlElement.setAttribute('data-theme', newTheme);
    // localStorage.setItem('theme', newTheme);

    // Update the button text to show the opposite mode
//     themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
// });

// 2. Countdown Timer Logic
const targetDate = new Date('December 17, 2026 09:00:00').getTime();

const runCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.querySelector('.countdown-container').innerHTML = "<h3>The Festival Has Begun!</h3>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
};
setInterval(runCountdown, 1000);
runCountdown();

// 3. Upgraded Dynamic Speaker Bio Modal Data (Alternating Images & Captions)
const speakerData = {
    "1": {
        name: "Auma Obama",
        title: "Global Advocate for Community Development",
        images: [
            { url: "images/auma and barack.jpeg", caption: "Dr. Auma Obama with her brother Barack Obama former President of the United States of America" },
            { url: "images/auma3.jpeg", caption: "Dr Auma Obama" },
            { url: "images/aum4.jpeg", caption: "Dr Auma Obama" },
            { url: "images/aum5.jpeg", caption: "Dr Auma Obama" },
            { url: "images/aum6.jpeg", caption: "Dr Auma Obama" },
            { url: "images/auma.jpeg", caption: "Dr Auma Obama" },
            { url: "images/auma.jpeg", caption: "Dr Auma Obama" },
            { url: "images/auma.jpeg", caption: "Dr Auma Obama" }
        ],
        bioParagraphs: [
            "Rita Auma Obama (born June 1, 1960) is a Kenyan-British community activist, sociologist, journalist, author, and half-sister of former President of the United States, Barack Obama. Obama serves as the executive chairwoman of Sauti Kuu Foundation (Strong Voices Foundation), a non-profit organisation that helps orphans and other young people struggling with poverty in Kenya.",
            "Background and education: Auma Obama is the daughter of Barack Obama Sr. and his first wife, Kezia Obama (née Aoko). She is the older half-sister of Barack Obama. After attending a local elementary school and The Kenya High School for secondary education (1973–1978), she secured a scholarship to attend university in Germany. She studied German at Heidelberg University from 1981 until 1987. After her graduation from Heidelberg, she went for graduate studies at the University of Bayreuth, graduating with a Doctor of Philosophy degree in 1996. She also studied at the German Film and Television Academy in Berlin. Obama's final project at the Film Academy was the twenty-minute film All That Glitters (1993), which blends genre conventions in depicting the vulnerability of Black lives in post-unification Germany.",
            "Humanitarian commitment: Obama lived in the United Kingdom after her studies. While there, she helped her mother, Kezia, to relocate from Kenya to the UK. Kezia was granted British citizenship in 2011. In 1996, Obama married an Englishman, Ian Manners. They are the parents of Akinyi Manners (born 1997). Obama and Manners divorced in 2000. In 2007, Obama and Akinyi relocated to Kenya.",
            "Obama worked for five years in Kenya with the international charity CARE International as the organization's East Africa Coordinator before starting her own charity, Sauti Kuu Foundation, sometimes referred to as Auma Obama Foundation.",
            "In 2010, the Jacobs Foundation's board of trustees appointed her as a new member. This foundation (the 1st wealthiest Swiss charitable organization), with its registered office in Zürich, provides funding and support worldwide and has an annual funding budget amounting to approximately CHF 35 million ($33.66 million in 2010) for projects benefiting young people and their integration into society.",
            "Other considerations: Obama attended Barack Obama's, her half-brother's, inaugurations to the Senate and the presidency, in 2005 and 2009, respectively. In 2011, Obama was interviewed for Turk Pipkin's documentary Building Hope and was the subject of a German documentary film The Education of Auma Obama. In 2017, Obama was honoured with the fourth International TÜV Rheinland Global Compact Award in Cologne. At the award ceremony, she received a specially made bronze sculpture Der Griff nach den Sternen (Reaching for the stars) by artist Hannes Helmke. Obama is the author of the book And Then Life Happens, released in 2012 by St. Martin's Press.",
            "Obama is a member of the World Future Council. She is also a member of the board of trustees of the Germany Reading Foundation, as well as a member of the advisory board of the Bayreuth Academy of Advanced African Studies at the University of Bayreuth. She serves on the council of the Kilimanjaro Initiative in Nairobi. Since 2014, Dr. Obama has been the patron of the International Storymoja Festivals in Kenya. She is also the initiator of the Sauti Kuu Act Now Awards. In 2021, she agreed to participate in the German dance show Let's Dance, the German version of Dancing with the Stars. She reached 5th place."
        ]
    },
    "2": {
        name: "Prof. PLO Lumumba",
        title: "Academic, Lawyer & Pan-Africanist",
        images: [
            { url: "images/plo1.jpg", caption: "Prof. PLO Lumumba discussing academic policies" },
            { url: "images/plo2.jpg", caption: "Prof. PLO Lumumba addressing a legal seminar" }
        ],
        bioParagraphs: [
            "Prof. PLO Lumumba is a distinguished academic, lawyer, and pan-Africanist. His work focuses on advancing education, legal reform, and African unity.",
            "As a professor of law, he has contributed significantly to the development of legal frameworks in Africa. His research emphasizes the importance of indigenous legal systems and their integration with modern jurisprudence.",
            "Prof. Lumumba has been instrumental in promoting pan-Africanism through his academic work and public service. He has served on various boards and committees dedicated to advancing African interests."
        ]
    }
};

    // "2": {
    //     name: "Chidi Okechukwu",
    //     title: "Aerospace Engineer & Systems Architect",
    //     images: [
    //         { url: "https://unsplash.com", caption: "Chidi reviewing telemetry metrics inside the lab" },
    //         { url: "https://unsplash.com", caption: "Presenting climate forecasting mapping strategies" }
    //     ],
    //     bioParagraphs: [
    //         "Chidi Okechukwu is an aerospace systems engineer who designs low-Earth orbit constellation data matrix pipelines. His operations emphasize optimizing real-time satellite data telemetry to directly maximize sub-Saharan agricultural productivity indexes and structural urban development models.",
    //         "His technical framework automates weather patterns mapping indicators, giving hundreds of regional micro-cooperatives critical forward looking metrics to securely defend against unseasonal localized climate disruptions. This strategic work has positioned him as an indispensable advisor to continental planning boards.",
    //         "Chidi's projects continue to prove that local access to custom infrastructure accelerates sustainable transformation. Through his ongoing mentorship initiatives, he is currently developing a specialized curriculum designed to train the next wave of indigenous systems engineering practitioners."
    //     ]
    // },
//     "3": {
//         name: "Farida Mensah",
//         title: "Clean-Energy Venture Builder",
//         images: [
//             { url: "https://unsplash.com", caption: "Farida executing microgrid inspections in Accra" },
//             { url: "https://unsplash.com", caption: "Reviewing regional distribution matrices with engineers" }
//         ],
//         bioParagraphs: [
//             "Farida Mensah designs sustainable distribution microgrid systems constructed to support sub-Saharan manufacturing ecosystems. Her clean-energy initiatives operate cleanly outside traditional grids, providing affordable, high-uptime voltage baselines to remote factory centers.",
//             "By targeting structural clean-tech integration, Farida has successfully engineered localized solar-thermal arrays capable of driving community-level industrial equipment operations. Her business models demonstrate that carbon-neutral architectures can match fossil-fuel baselines in raw output stability.",
//             "Her work has earned global recognitions and sparked international infrastructure investment partnerships. Farida heavily maintains that African industrialization can leapfrog legacy pollution pitfalls by embracing localized, cleanly deployed asset distribution networks."
//         ]
//     }
// };

const modal = document.getElementById('speakerModal');
const closeModal = document.getElementById('closeModal');
const bioContainer = document.getElementById('modalBioContainer');

document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-speaker');
        const data = speakerData[id];
        
        if (data) {
            document.getElementById('modalName').textContent = data.name;
            document.getElementById('modalTitle').textContent = data.title;
            
            // Flush old content inside container
            bioContainer.innerHTML = "";

            // Interleave elements to achieve the alternating left-right wrap style
            // Paragraph 1 gets Image 1 (Float Left)
            if (data.images[0]) {
                const fig1 = createBioFigure(data.images[0], 'float-left');
                bioContainer.appendChild(fig1);
            }
            if (data.bioParagraphs[0]) {
                bioContainer.appendChild(createBioParagraph(data.bioParagraphs[0]));
            }

            // Paragraph 2 gets Image 2 (Float Right)
            if (data.images[1]) {
                const fig2 = createBioFigure(data.images[1], 'float-right');
                bioContainer.appendChild(fig2);
            }
            if (data.bioParagraphs[1]) {
                bioContainer.appendChild(createBioParagraph(data.bioParagraphs[1]));
            }

            // Append any subsequent text blocks smoothly underneath
            for (let i = 2; i < data.bioParagraphs.length; i++) {
                bioContainer.appendChild(createBioParagraph(data.bioParagraphs[i]));
            }

            modal.classList.add('active');
        }
    });
});

// Helper Function: Generates semantic HTML5 figures dynamically
function createBioFigure(imgObj, alignmentClass) {
    const figure = document.createElement('figure');
    figure.className = `bio-figure ${alignmentClass}`;
    
    const img = document.createElement('img');
    img.src = imgObj.url;
    img.alt = imgObj.caption;
    
    const figcaption = document.createElement('figcaption');
    figcaption.className = 'bio-caption';
    figcaption.textContent = imgObj.caption;
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    return figure;
}

// Helper Function: Generates clean text paragraph tokens
function createBioParagraph(text) {
    const p = document.createElement('p');
    p.style.marginBottom = "1rem";
    p.textContent = text;
    return p;
}

closeModal.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });


// 3. Dynamic Speaker Bio Modal Data

// const speakerData = {
//     "1": {
//         name: "Dr. Amina Diallo",
//         title: "FinTech Innovator & Philanthropist",
//         bio: "Dr. Amina Diallo has scaled decentralized finance solutions across 14 African nations, empowering millions of cross-border micro-entrepreneurs."
//     },
//     "2": {
//         name: "Chidi Okechukwu",
//         title: "Aerospace Engineer & Systems Architect",
//         bio: "Chidi leads pan-African satellite data configurations optimized to significantly enhance agricultural yield forecasts and climate resilient tech frameworks."
//     },
//     "3": {
//         name: "Farida Mensah",
//         title: "Clean-Energy Venture Builder",
//         bio: "Farida designs distributed microgrid solutions scaling clean, off-grid reliable energy infrastructure across sub-Saharan industrial zones."
//     }
// };

// const modal = document.getElementById('speakerModal');
// const closeModal = document.getElementById('closeModal');

// document.querySelectorAll('.speaker-card').forEach(card => {
//     card.addEventListener('click', () => {
//         const id = card.getAttribute('data-speaker');
//         const data = speakerData[id];
//         if (data) {
//             document.getElementById('modalName').textContent = data.name;
//             document.getElementById('modalTitle').textContent = data.title;
//             document.getElementById('modalBio').textContent = data.bio;
//             modal.classList.add('active');
//         }
//     });
// });

// closeModal.addEventListener('click', () => modal.classList.remove('active'));
// window.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });

// 4. Integrated Async Form Pipeline Linked to Backend API
document.getElementById('regForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        cohort: document.getElementById('cohort').value,
        passType: document.getElementById('passType').value
    };

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert(`Success: ${result.message}`);
            e.target.reset();
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error('Network Error:', error);
        alert('Could not reach backend database pipeline. Ensure your Node server is running.');
    }
});
