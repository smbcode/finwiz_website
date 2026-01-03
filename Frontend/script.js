
// ========================================
// DATA STRUCTURES
// ========================================

const benefits = [
    {
        icon: '📈',
        title: 'Industry Insights',
        description: 'Learn directly from finance professionals and industry leaders through our curated FinTalks series.'
    },
    {
        icon: '🤝',
        title: 'Professional Network',
        description: 'Build lasting connections with peers, alumni, and industry mentors in finance and fintech.'
    },
    {
        icon: '💼',
        title: 'Internship Opportunities',
        description: 'Exclusive access to internship and placement opportunities with leading financial institutions.'
    },
    {
        icon: '🎯',
        title: 'Skill Development',
        description: 'Hands-on workshops on financial analysis, investing, trading, and startup ecosystem.'
    },
    {
        icon: '💡',
        title: 'Innovation Projects',
        description: 'Collaborate on real-world fintech projects and innovation challenges with tangible outcomes.'
    },
    {
        icon: '🏆',
        title: 'Leadership Roles',
        description: 'Develop leadership and management skills by taking active roles in club initiatives.'
    }
];

const teamMembers = {
    leadership: [
        {
            name: 'Name',
            role: 'President',
            socials: { linkedin: '#', email: '#' }
        },
        {
            name: 'Person 2 ',
            role: 'Vice President',
            socials: { linkedin: '#', email: '#' }
        }
    ],
    core: [
        {
            name: 'Aman Singh',
            role: 'Content Lead',
            socials: { linkedin: '#' }
        },
        {
            name: 'Sarah Ahmed',
            role: 'Events Lead',
            socials: { linkedin: '#' }
        },
        {
            name: 'Rohan Verma',
            role: 'Finance Lead',
            socials: { linkedin: '#' }
        },
        {
            name: 'Neha Patel',
            role: 'Social Media Lead',
            socials: { linkedin: '#' }
        }
    ],
    members: [
        {
            name: 'Vikram Kumar',
            role: 'Member',
            socials: {}
        },
        {
            name: 'Ananya Das',
            role: 'Member',
            socials: {}
        },
        {
            name: 'Nikhil Joshi',
            role: 'Member',
            socials: {}
        },
        {
            name: 'Kavya Reddy',
            role: 'Member',
            socials: {}
        }
    ]
};

const events = [
    {
        date: 'December 20, 2024',
        title: 'FinTech: The Future of Finance',
        speaker: 'Raj Patel, CEO at FinTech Innovations',
        description: 'Explore the cutting-edge intersection of finance and technology. Learn about blockchain, AI-driven trading, and the future of digital banking. Perfect for anyone curious about the evolution of financial services.'
    },
    {
        date: 'January 10, 2025',
        title: 'Stock Market Basics: From Theory to Practice',
        speaker: 'Meera Singh, Investment Analyst at Goldman Sachs',
        description: 'A comprehensive walkthrough of equity markets, portfolio diversification, and risk management. Understand fundamental analysis, technical indicators, and how to build a winning investment strategy.'
    },
    {
        date: 'January 25, 2025',
        title: 'Entrepreneurship & Startup Financing',
        speaker: 'Aryan Kapoor, Founder & Managing Partner, Venture Labs',
        description: 'An insider\'s guide to startup funding, angel investing, and venture capital. Learn how startups raise money, understand term sheets, and explore the full ecosystem of innovation funding.'
    },
    {
        date: 'February 15, 2025',
        title: 'Cryptocurrency & Blockchain Economics',
        speaker: 'Dr. Vikram Chopra, Crypto Strategist',
        description: 'Deep dive into cryptography, smart contracts, and decentralized finance (DeFi). Understand the economic principles behind blockchain technology and its impact on traditional finance.'
    },
    {
        date: 'March 5, 2025',
        title: 'Corporate Finance & M&A Strategies',
        speaker: 'Alisha Banerjee, Senior Manager at Deloitte',
        description: 'Explore mergers and acquisitions, corporate valuation, and financing strategies. Learn how large corporations structure deals and the financial considerations behind major business transactions.'
    }
];

const galleryItems = [
    'FinTalk Series 2024',
    'Market Analysis Workshop',
    'Startup Pitch Event',
    'Club Meet & Greet',
    'Trading Simulation',
    'Investment Summit',
    'Finance Case Competition',
    'Alumni Networking Session',
    'FinTech Innovation Lab'
];

// ========================================
// DOM RENDERING FUNCTIONS
// ========================================

function renderBenefits() {
    const container = document.getElementById('benefitsGrid');
    if (!container) return;

    container.innerHTML = benefits.map((benefit, index) => `
        <div class="benefit-card fade-in" style="animation-delay: ${index * 100}ms">
            <div class="benefit-icon">${benefit.icon}</div>
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        </div>
    `).join('');
}

function renderTeam() {
    const container = document.getElementById('teamHierarchy');
    if (!container) return;

    const sections = [
        { title: 'Leadership', members: teamMembers.leadership },
        { title: 'Core Team', members: teamMembers.core },
        { title: 'Active Members', members: teamMembers.members }
    ];

    container.innerHTML = sections.map(section => `
        <div class="hierarchy-level">
            <div class="level-title">${section.title}</div>
            <div class="team-grid">
                ${section.members.map(member => `
                    <div class="team-card">
                        <div class="team-photo">👤</div>
                        <div class="team-info">
                            <div class="team-name">${member.name}</div>
                            <div class="team-role">${member.role}</div>
                            ${Object.keys(member.socials).length > 0 ? `
                                <div class="team-socials">
                                    ${member.socials.linkedin ? `<a href="${member.socials.linkedin}" title="LinkedIn"><i class="fab fa-linkedin"></i></a>` : ''}
                                    ${member.socials.email ? `<a href="${member.socials.email}" title="Email"><i class="fas fa-envelope"></i></a>` : ''}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderEvents() {
    const container = document.getElementById('eventsContainer');
    if (!container) return;

    container.innerHTML = events.map((event, index) => `
        <div class="event-card" style="animation-delay: ${index * 100}ms">
            <div class="event-date">${event.date}</div>
            <h3 class="event-title">${event.title}</h3>
            <div class="event-speaker">Speaker: ${event.speaker}</div>
            <p class="event-description">${event.description}</p>
        </div>
    `).join('');
}

function renderGallery() {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    container.innerHTML = galleryItems.map((item, index) => `
        <div class="gallery-item" style="animation-delay: ${index * 100}ms">
            <div class="gallery-image">📸</div>
            <div class="gallery-overlay">
                <div class="gallery-text">${item}</div>
            </div>
        </div>
    `).join('');
}

// ========================================
// PAGE NAVIGATION
// ========================================

function loadPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const pageElement = document.getElementById(pageName + '-page');
    if (pageElement) {
        pageElement.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update nav links
    updateNavLinks(pageName);

    // Close mobile menu
    closeMobileMenu();
}

function updateNavLinks(currentPage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
}

// ========================================
// MOBILE MENU
// ========================================

function toggleMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function closeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
}

// ========================================
// EVENT LISTENERS
// ========================================

function initializeEventListeners() {
    // Navigation links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(link.dataset.page);
        });
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Mobile menu close on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Scroll to mission section
    const scrollMissionBtn = document.getElementById('scrollMissionBtn');
    if (scrollMissionBtn) {
        scrollMissionBtn.addEventListener('click', () => {
            const missionSection = document.getElementById('mission-section');
            if (missionSection) {
                missionSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 0 rgba(0, 0, 0, 0.02)';
        }
    });

    // Logo click to home
    document.querySelector('.logo').addEventListener('click', () => {
        loadPage('home');
    });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderBenefits();
    renderTeam();
    renderEvents();
    renderGallery();

    // Initialize event listeners
    initializeEventListeners();

    // Load home page by default
    loadPage('home');

    console.log('FinWiz website initialized successfully!');
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll for any element
function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add class to element with delay
function addClassWithDelay(selector, className, delay = 0) {
    setTimeout(() => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add(className);
        });
    }, delay);
}