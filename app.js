// ==========================================================================
// TRANSLATION DICTIONARY
// ==========================================================================
const translations = {
    en: {
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-experience": "Experience",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        
        "hero-badge-text": "Open for Global Opportunities",
        "hero-title-hello": "Hi, I'm",
        "hero-title-name": "Gildong Hong",
        "hero-description-text": "I build high-performance web applications with clean architecture and modern user experiences. Bridging the gap between robust backend systems and beautiful frontend designs.",
        "hero-cta-projects": "View Projects",
        "hero-cta-contact": "Get In Touch",
        
        "about-title": "About Me",
        "about-subtitle": "My journey, values, and why we should work together.",
        "about-exp-badge": "Years of<br>Experience",
        "about-heading-text": "Engineering solutions with a global perspective",
        "about-p1": "I am a software engineer based in Seoul, South Korea, specializing in building modern web applications. With experience working in multicultural environments and global teams, I have developed a strong communication mindset and an adaptable approach to technology.",
        "about-p2": "I believe in writing clean, maintainable code, optimizing performance, and designing intuitive user interfaces. My goal is to build digital products that solve real-world problems and scale effectively under load.",
        "about-label-education": "Education",
        "about-value-education": "B.S. in Computer Science, Seoul National University",
        "about-label-languages": "Languages",
        "about-value-languages": "Korean (Native), English (Fluent / Professional)",
        "about-label-interests": "Specialty",
        "about-value-interests": "SPA Architecture, RESTful APIs, DevOps, Performance Optimization",
        "about-label-work": "Work Preference",
        "about-value-work": "In-office (Seoul/Global), Remote, Hybrid",
        
        "skills-title": "Technical Skills",
        "skills-subtitle": "My toolbox of technologies and languages that I use to bring ideas to life.",
        "skills-cat-frontend": "Frontend",
        "skills-cat-backend": "Backend",
        "skills-cat-tools": "DevOps & Tools",
        "skills-familiar": "Other Tech I Work With:",
        
        "exp-title": "Work Experience",
        "exp-subtitle": "My professional growth and key achievements.",
        "exp1-role": "Senior Full Stack Engineer",
        "exp1-company": "TechWave Global, Seoul",
        "exp1-desc": "Led the development of a cross-border SaaS dashboard using Next.js and Go. Optimized DB queries to improve dashboard load times by 40%. Managed a global agile team of 5 developers.",
        "exp2-role": "Web Developer",
        "exp2-company": "InnoLabs Korea, Seoul",
        "exp2-desc": "Re-architected a legacy monolith platform into React micro-frontends. Implemented real-time tracking features using WebSockets. Collaborated closely with international clients for service localization.",
        "exp3-role": "Software Engineer Intern",
        "exp3-company": "VentureLink, Remote / US",
        "exp3-desc": "Contributed to the development of internal automation workflows using Python. Participated in daily standups in English, resolving frontend bugs and setting up CI/CD pipeline tests.",
        
        "projects-title": "Featured Projects",
        "projects-subtitle": "A collection of systems and applications I've developed, from concept to deployment.",
        "filter-all": "All",
        "filter-frontend": "Frontend",
        "filter-fullstack": "Fullstack",
        "filter-devops": "DevOps/API",
        
        "project1-title": "Global Collaborative Workspace",
        "project1-desc": "A real-time collaboration tool with document editing, interactive canvas, and live voice rooms. Specially localized for English and Korean operations, serving over 10k monthly active users.",
        "project2-title": "Dynamic Portfolio Builder",
        "project2-desc": "An interactive SaaS application allowing developers to build and export portfolios instantly. Features high-quality theme templates and custom SEO configurations with zero-latency previewing.",
        "project3-title": "High-Throughput Analytics API",
        "project3-desc": "A high-throughput, horizontally scaling ingestion microservice capable of processing 50,000 requests per second. Built using Redis queue and FastAPI, containerized and monitored via Prometheus.",
        "project-details-btn": "View Details",
        
        "contact-title": "Get In Touch",
        "contact-subtitle": "Have a job opportunity, project idea, or just want to connect? Drop a message!",
        "contact-info-heading": "Contact Information",
        "contact-info-text": "I am actively seeking full-time opportunities as a Full Stack / Frontend / Backend Engineer. Let's build something remarkable.",
        "contact-label-email": "Email",
        "contact-label-phone": "Phone / KakaoTalk",
        "contact-value-phone": "+82 (0)10-1234-5678",
        "contact-label-location": "Location",
        "contact-value-location": "Seoul, South Korea (Available for Relocation)",
        "contact-form-label-name": "Name",
        "contact-form-label-email": "Email",
        "contact-form-label-subject": "Subject",
        "contact-form-label-message": "Message",
        "contact-form-submit": "Send Message",
        "footer-rights": "All rights reserved."
    },
    ko: {
        "nav-about": "소개",
        "nav-skills": "기술",
        "nav-experience": "경력",
        "nav-projects": "프로젝트",
        "nav-contact": "연락처",
        
        "hero-badge-text": "글로벌 기업 지원 중 / 원격 근무 가능",
        "hero-title-hello": "안녕하세요, 저는",
        "hero-title-name": "홍길동입니다",
        "hero-description-text": "깔끔한 아키텍처와 현대적인 사용자 경험을 바탕으로 고성능 웹 애플리케이션을 개발합니다. 강력한 백엔드 시스템과 미려한 프론트엔드 디자인 간의 가교 역할을 지향합니다.",
        "hero-cta-projects": "프로젝트 보기",
        "hero-cta-contact": "연락하기",
        
        "about-title": "소개",
        "about-subtitle": "제 커리어 여정과 가치관, 그리고 저와 함께 일해야 하는 이유를 소개합니다.",
        "about-exp-badge": "실무 개발<br>경력 3년 이상",
        "about-heading-text": "글로벌 관점으로 문제를 엔지니어링합니다",
        "about-p1": "서울에 거주하는 소프트웨어 엔지니어로, 최신 웹 애플리케이션 구축에 주력하고 있습니다. 다양한 문화를 가진 다국적 팀원들과 협업한 경험을 통해 열린 의사소통 태도와 기술적 변화에 신속하게 적응하는 능력을 길렀습니다.",
        "about-p2": "깔끔하고 유지보수가 쉬운 코드 작성, 성능 최적화, 그리고 직관적인 UI 설계의 중요성을 깊이 이해하고 있습니다. 실제 사용자의 비즈니스 문제를 해결하고 대규모 트래픽에도 유연하게 대처하는 제품 개발을 목표로 삼고 있습니다.",
        "about-label-education": "학력",
        "about-value-education": "서울대학교 컴퓨터공학 학사 졸업",
        "about-label-languages": "사용 언어",
        "about-value-languages": "한국어 (모국어), 영어 (비즈니스 및 실무 소통 조율 가능)",
        "about-label-interests": "주요 전문 역량",
        "about-value-interests": "SPA 아키텍처, RESTful API 설계, DevOps 인프라, 성능 분석 및 튜닝",
        "about-label-work": "근무 형태",
        "about-value-work": "오피스 상주 (서울/글로벌), 원격 근무, 하이브리드",
        
        "skills-title": "기술 스택",
        "skills-subtitle": "아이디어를 실질적인 프로덕트로 구현하기 위해 사용하는 핵심 기술 도구 모음입니다.",
        "skills-cat-frontend": "프론트엔드",
        "skills-cat-backend": "백엔드",
        "skills-cat-tools": "데브옵스 및 도구",
        "skills-familiar": "그 외 다룰 수 있는 기술:",
        
        "exp-title": "경력 사항",
        "exp-subtitle": "소프트웨어 엔지니어로서 거쳐온 발자취와 핵심 성과를 정리했습니다.",
        "exp1-role": "시니어 풀스택 엔지니어",
        "exp1-company": "테크웨이브 글로벌 (TechWave Global), 서울",
        "exp1-desc": "Next.js 및 Go 기반 글로벌 크로스보더 SaaS 대시보드 개발을 리드했습니다. 데이터베이스 쿼리를 대폭 개선하여 대시보드 응답 지연 시간을 40% 단축시켰고, 애자일 체제 하의 다국적 엔지니어 팀(5명)을 조율했습니다.",
        "exp2-role": "웹 개발자",
        "exp2-company": "이노랩스 코리아 (InnoLabs Korea), 서울",
        "exp2-desc": "기존 레거시 모놀리스 플랫폼 서비스를 React 마이크로 프론트엔드로 재설계했습니다. WebSocket을 적용한 실시간 모니터링 시스템을 도입하고 해외 클라이언트 지원을 위한 서비스 현지화 작업을 담당했습니다.",
        "exp3-role": "소프트웨어 엔지니어 인턴",
        "exp3-company": "벤처링크 (VentureLink), 원격 / 미국 본사",
        "exp3-desc": "Python 기반 내부 업무 자동화 플로우를 구축했습니다. 매일 영어로 진행되는 스탠드업 미팅에 참여하며 프론트엔드 버그 수정 및 GitHub Actions 기반의 자동화 테스트 인프라 환경 구축을 도왔습니다.",
        
        "projects-title": "대표 프로젝트",
        "projects-subtitle": "아이디어 기획부터 제품 빌드 및 배포까지 총괄적으로 참여해 온 핵심 프로젝트 리스트입니다.",
        "filter-all": "전체",
        "filter-frontend": "프론트엔드",
        "filter-fullstack": "풀스택",
        "filter-devops": "데브옵스/API",
        
        "project1-title": "글로벌 협업 워크스페이스",
        "project1-desc": "동시 문서 편집, 인터랙티브 캔버스, 실시간 음성 대화방을 제공하는 리얼타임 협업 솔루션입니다. 한국어와 영어 현지화를 기본으로 지원하며, 현재 월간 활성 사용자(MAU) 1만 명을 돌파했습니다.",
        "project2-title": "인터랙티브 포트폴리오 빌더",
        "project2-desc": "개발자가 신속하게 웹 포트폴리오를 작성하고 커스텀 내보내기를 할 수 있는 SaaS 플랫폼입니다. 뛰어난 UX 템플릿과 노딜레이 미리보기 기능, 최적화된 검색엔진 노출(SEO) 커스텀 기능을 탑재하고 있습니다.",
        "project3-title": "대용량 실시간 분석 API 서버",
        "project3-desc": "초당 최고 50,000건의 수집 요청을 실시간으로 분산 처리하는 고처리량 마이크로인프라 백엔드입니다. Redis 큐와 FastAPI 프레임워크로 구현하였으며, Docker로 패키징해 AWS 상에 수평 확장 가능하도록 세팅했습니다.",
        "project-details-btn": "상세 보기",
        
        "contact-title": "연락하기",
        "contact-subtitle": "비즈니스 기회 제안, 프로젝트 관련 논의, 혹은 기술 네트워킹은 언제든지 환영합니다!",
        "contact-info-heading": "연락처 정보",
        "contact-info-text": "현재 풀스택, 프론트엔드 또는 백엔드 엔지니어 정규직 합류 제안을 적극적으로 환영하고 있습니다.",
        "contact-label-email": "이메일",
        "contact-label-phone": "연락처 / 카카오톡 ID",
        "contact-value-phone": "010-1234-5678",
        "contact-label-location": "활동 지역",
        "contact-value-location": "대한민국 서울 (국외 리로케이션 및 이주 가능)",
        "contact-form-label-name": "이름",
        "contact-form-label-email": "이메일 주소",
        "contact-form-label-subject": "문의 제목",
        "contact-form-label-message": "문의 내용",
        "contact-form-submit": "메시지 보내기",
        "footer-rights": "All rights reserved."
    }
};

// Subtitle typing lists for bilingual support
const typedStrings = {
    en: ["Full Stack Developer", "UX Enthusiast", "Global Collaborator", "Problem Solver"],
    ko: ["풀스택 개발자", "UX 엔지니어", "글로벌 협력형 인재", "문제 해결사"]
};

// ==========================================================================
// STATE VARIABLES
// ==========================================================================
let currentLang = 'en';
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typedTimeout = null;

// ==========================================================================
// THEME MANAGEMENT (Light / Dark)
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// ==========================================================================
// LANGUAGE SWITCHER
// ==========================================================================
function switchLanguage(lang) {
    if (lang !== 'en' && lang !== 'ko') return;
    
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Toggle active classes on language buttons
    const enBtn = document.getElementById('lang-en-btn');
    const koBtn = document.getElementById('lang-ko-btn');
    
    if (lang === 'en') {
        enBtn.classList.add('active');
        koBtn.classList.remove('active');
        document.body.classList.remove('lang-ko');
        document.body.classList.add('lang-en');
    } else {
        koBtn.classList.add('active');
        enBtn.classList.remove('active');
        document.body.classList.remove('lang-en');
        document.body.classList.add('lang-ko');
    }
    
    // Translate HTML elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has child HTML or just text
            if (elem.innerHTML.includes('<span') || elem.innerHTML.includes('<i') || elem.innerHTML.includes('<br')) {
                // Keep the icon or structure if necessary
                if (key === 'about-exp-badge') {
                    elem.innerHTML = translations[lang][key];
                } else if (key === 'hero-cta-projects') {
                    elem.innerHTML = translations[lang][key] + ' <i class="fas fa-arrow-right icon-right"></i>';
                } else if (key === 'contact-form-submit') {
                    elem.innerHTML = translations[lang][key] + ' <i class="fas fa-paper-plane icon-right"></i>';
                } else if (key === 'hero-title-hello') {
                    elem.textContent = translations[lang][key];
                } else if (key === 'hero-title-name') {
                    elem.textContent = translations[lang][key];
                } else {
                    elem.textContent = translations[lang][key];
                }
            } else {
                // Text replacement
                if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                    elem.placeholder = translations[lang][key];
                } else {
                    elem.textContent = translations[lang][key];
                }
            }
        }
    });

    // Reset typing animation for the newly selected language
    typingIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typedTimeout) clearTimeout(typedTimeout);
    typeText();
}

function initLanguage() {
    const savedLang = localStorage.getItem('lang') || 'en';
    switchLanguage(savedLang);
}

// ==========================================================================
// TYPING EFFECT ANIMATION
// ==========================================================================
function typeText() {
    const typedTextSpan = document.getElementById('typed-text');
    if (!typedTextSpan) return;
    
    const strings = typedStrings[currentLang];
    const currentString = strings[typingIndex];
    
    if (isDeleting) {
        // Erase character
        typedTextSpan.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Type character
        typedTextSpan.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typingSpeed = isDeleting ? 40 : 80;
    
    if (!isDeleting && charIndex === currentString.length) {
        // Pause at the end of word
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Move to the next string index
        typingIndex = (typingIndex + 1) % strings.length;
        typingSpeed = 500;
    }
    
    typedTimeout = setTimeout(typeText, typingSpeed);
}

// ==========================================================================
// SCROLL EVENTS (Header blur + Active Navigation highlight)
// ==========================================================================
function handleScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Highlight Active Links in Navigation Menu
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200; // offset
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPosition >= top && scrollPosition < top + height) {
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        }
    });
}

// ==========================================================================
// INTERACTIVE SKILL BARS ON SCROLL
// ==========================================================================
function animateSkillBars() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (sectionPosition < screenPosition) {
        const skillFills = document.querySelectorAll('.skill-bar-fill');
        skillFills.forEach(bar => {
            const targetWidth = bar.parentElement.previousElementSibling.lastElementChild.textContent;
            bar.style.width = targetWidth;
        });
        // Remove listener once completed
        window.removeEventListener('scroll', animateSkillBars);
    }
}

// ==========================================================================
// MOBILE MENU TOGGLE
// ==========================================================================
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!toggleBtn || !navMenu) return;
    
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Switch hamburger icon to Close icon
        const icon = toggleBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = toggleBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });
}

// ==========================================================================
// PROJECTS FILTERING
// ==========================================================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ==========================================================================
// CONTACT FORM SUBMISSION MOCK
// ==========================================================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');
    
    if (!form || !feedback) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        const prevContent = submitBtn.innerHTML;
        submitBtn.innerHTML = currentLang === 'en' ? 'Sending... <i class="fas fa-spinner fa-spin icon-right"></i>' : '보내는 중... <i class="fas fa-spinner fa-spin icon-right"></i>';
        
        // Simulate API request delay
        setTimeout(() => {
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;
            
            // Mock response
            if (name && email && subject && message) {
                feedback.className = 'form-feedback-message success';
                feedback.textContent = currentLang === 'en' 
                    ? "Thank you! Your message has been sent successfully." 
                    : "감사합니다! 메시지가 성공적으로 전송되었습니다.";
                form.reset();
            } else {
                feedback.className = 'form-feedback-message error';
                feedback.textContent = currentLang === 'en' 
                    ? "Oops! Please make sure all fields are filled out correctly." 
                    : "오류가 발생했습니다! 모든 입력창을 올바르게 채워주세요.";
            }
            
            // Show feedback block
            feedback.classList.remove('hidden');
            
            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerHTML = prevContent;
            
            // Hide feedback after 5 seconds
            setTimeout(() => {
                feedback.classList.add('hidden');
            }, 5000);
            
        }, 1500);
    });
}

// ==========================================================================
// DOWNLOAD RESUME HANDLER (MOCK ALERTS)
// ==========================================================================
function initResumeDownloads() {
    const cvEnBtn = document.getElementById('cv-en-btn');
    const cvKoBtn = document.getElementById('cv-ko-btn');
    
    if (cvEnBtn) {
        cvEnBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const alertMsg = currentLang === 'en' 
                ? "English Resume PDF download triggered! In production, replace this with your direct PDF file link." 
                : "영문 이력서 PDF 다운로드가 실행되었습니다! 실배포 시 실제 PDF 파일 링크로 교체하세요.";
            alert(alertMsg);
        });
    }
    
    if (cvKoBtn) {
        cvKoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const alertMsg = currentLang === 'en' 
                ? "Korean Resume PDF download triggered! In production, replace this with your direct PDF file link." 
                : "국문 이력서 PDF 다운로드가 실행되었습니다! 실배포 시 실제 PDF 파일 링크로 교체하세요.";
            alert(alertMsg);
        });
    }
}

// ==========================================================================
// DOCUMENT INIT
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initMobileMenu();
    initProjectFilters();
    initContactForm();
    initResumeDownloads();
    
    // Add scroll event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', animateSkillBars);
    
    // Initial triggers for scrolling items
    handleScroll();
    animateSkillBars();
    
    // Theme toggle button click
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    // Language buttons click
    const enBtn = document.getElementById('lang-en-btn');
    const koBtn = document.getElementById('lang-ko-btn');
    
    if (enBtn) enBtn.addEventListener('click', () => switchLanguage('en'));
    if (koBtn) koBtn.addEventListener('click', () => switchLanguage('ko'));
});
