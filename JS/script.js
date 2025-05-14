// script.js - Enhanced JavaScript for PSIS Semarang Website

document.addEventListener('DOMContentLoaded', function() {
    // Constants and configurations
    const PRIMARY_COLOR = '#1a3e72'; // PSIS blue - Main Blue
    const PRIMARY_LIGHT = '#2a4e82'; // Lighter blue
    const SECONDARY_COLOR = '#e31937'; // PSIS red accent
    const ACCENT_COLOR = '#f8c300'; // Gold accent

    // Initialize components
    initializeScrollEffects();
    initializeNavbarHighlight();
    enhanceHeaderAnimation();
    initializeImageEffects();
    addHistoryTimeline();
    createNewsCarousel();
    addLoadingEffect();
    improveAccessibility();

    /**
     * Adds smooth scroll animation to internal links
     */
    function initializeScrollEffects() {
        // Smooth scroll for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                // Only apply for internal links
                if(this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Add scroll to top button
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '&uarr;';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: ${PRIMARY_COLOR};
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(scrollToTopBtn);

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
            } else {
                scrollToTopBtn.style.opacity = '0';
            }
        });
    }

    /**
     * Highlights the current active navigation item
     */
    function initializeNavbarHighlight() {
        // Get current page URL
        const currentLocation = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            // Check if the link matches the current page
            if (currentLocation.includes(linkPath) && linkPath !== '#') {
                link.style.backgroundColor = '#f0f4f8';
                link.style.color = PRIMARY_COLOR;
                link.style.fontWeight = 'bold';
            }
            
            // Add hover animation
            link.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseout', function() {
                this.style.transform = this.classList.contains('active') ? 'translateY(-2px)' : 'translateY(0)';
            });
        });
    }

    /**
     * Enhances the header with parallax and interactive effects
     */
    function enhanceHeaderAnimation() {
        const header = document.querySelector('header');
        const headerTitle = header.querySelector('h1');
        
        // Add subtle parallax effect to header
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 600) {
                const yPos = scrollPosition * 0.2;
                header.style.backgroundPosition = `center ${yPos}px`;
            }
        });
        
        // Add interactive effect on title hover
        if (headerTitle) {
            headerTitle.addEventListener('mouseover', () => {
                headerTitle.style.transform = 'scale(1.05)';
                headerTitle.style.textShadow = '2px 2px 8px rgba(0, 0, 0, 0.7)';
                headerTitle.style.transition = 'all 0.3s ease';
            });
            
            headerTitle.addEventListener('mouseout', () => {
                headerTitle.style.transform = 'scale(1)';
                headerTitle.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.5)';
            });
        }
    }

    /**
     * Adds effects to the team logo and images
     */
    function initializeImageEffects() {
        const teamLogo = document.querySelector('.center img');
        
        if (teamLogo) {
            // Enhanced logo animation
            teamLogo.addEventListener('click', function() {
                this.classList.toggle('spin-animation');
                if(!this.classList.contains('spin-animation')) {
                    this.classList.add('spin-animation');
                    this.style.animation = 'spin 1s ease';
                    
                    // Reset animation
                    setTimeout(() => {
                        this.classList.remove('spin-animation');
                        this.style.animation = 'pulse 3s infinite ease-in-out';
                    }, 1000);
                }
            });
            
            // Add CSS for spin animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
                .spin-animation {
                    animation: spin 1s ease !important;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add lazy loading to all images
        document.querySelectorAll('img').forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }

    /**
     * Creates an interactive timeline for the history section
     */
    function addHistoryTimeline() {
        const historySection = document.querySelector('section ol');
        
        if (historySection) {
            const timelineContainer = document.createElement('div');
            timelineContainer.className = 'timeline-container';
            timelineContainer.style.cssText = `
                margin-top: 40px;
                position: relative;
                padding: 20px 0;
            `;
            
            // Add timeline line
            const timelineLine = document.createElement('div');
            timelineLine.className = 'timeline-line';
            timelineLine.style.cssText = `
                position: absolute;
                left: 20px;
                top: 0;
                bottom: 0;
                width: 4px;
                background: ${PRIMARY_LIGHT};
                border-radius: 2px;
            `;
            
            timelineContainer.appendChild(timelineLine);
            
            // Create timeline events based on existing list
            const historyItems = Array.from(historySection.querySelectorAll('li'));
            
            // Define important years in PSIS history
            const timelineEvents = [
                { year: '1930', title: 'Pendirian PSIS', description: 'Voetbalbond Indonesia Semarang berganti nama menjadi Persatuan Sepak bola Indonesia Semarang (PSIS)' },
                { year: '1987', title: 'Juara Perserikatan', description: 'PSIS meraih gelar juara pertama pada kompetisi perserikatan PSSI' },
                { year: '1999', title: 'Juara Liga Indonesia', description: 'PSIS mencapai prestasi tertinggi dengan menjuarai Liga Indonesia' },
                { year: '2006', title: 'Runner-up Liga Indonesia', description: 'PSIS mencapai final Liga Indonesia dan menjadi runner-up' }
            ];
            
            timelineEvents.forEach((event, index) => {
                const timelineEvent = document.createElement('div');
                timelineEvent.className = 'timeline-event';
                timelineEvent.style.cssText = `
                    position: relative;
                    margin-left: 50px;
                    padding: 15px;
                    background: #fff;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    opacity: 0.7;
                    transform: translateX(-10px);
                    transition: all 0.3s ease;
                    border-left: 4px solid ${PRIMARY_COLOR};
                `;
                
                // Year badge
                const yearBadge = document.createElement('div');
                yearBadge.className = 'year-badge';
                yearBadge.textContent = event.year;
                yearBadge.style.cssText = `
                    position: absolute;
                    left: -60px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: ${SECONDARY_COLOR};
                    color: white;
                    padding: 5px 10px;
                    border-radius: 15px;
                    font-weight: bold;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                `;
                
                // Event content
                const eventContent = document.createElement('div');
                eventContent.innerHTML = `
                    <h4 style="margin: 0 0 10px; color: ${PRIMARY_COLOR};">${event.title}</h4>
                    <p style="margin: 0; font-size: 0.9rem;">${event.description}</p>
                `;
                
                timelineEvent.appendChild(yearBadge);
                timelineEvent.appendChild(eventContent);
                
                // Add hover effect
                timelineEvent.addEventListener('mouseover', function() {
                    this.style.opacity = '1';
                    this.style.transform = 'translateX(0)';
                    this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                });
                
                timelineEvent.addEventListener('mouseout', function() {
                    this.style.opacity = '0.7';
                    this.style.transform = 'translateX(-10px)';
                    this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                });
                
                timelineContainer.appendChild(timelineEvent);
            });
            
            // Add timeline after the ordered list
            historySection.parentNode.insertBefore(timelineContainer, historySection.nextSibling);
        }
    }

    /**
     * Creates a news carousel for latest team updates
     */
    function createNewsCarousel() {
        const main = document.querySelector('main');
        
        if (main) {
            // Create carousel section
            const carouselSection = document.createElement('section');
            carouselSection.innerHTML = '<h3>Berita Terbaru</h3>';
            
            // Create carousel container
            const carouselContainer = document.createElement('div');
            carouselContainer.className = 'news-carousel';
            carouselContainer.style.cssText = `
                display: flex;
                overflow-x: hidden;
                scroll-behavior: smooth;
                margin: 20px 0;
                position: relative;
            `;
            
            // Sample news data - in real implementation, this would come from an API
            const newsItems = [
                { title: 'PSIS Siap Hadapi Musim Baru', date: '10 May 2025', summary: 'Tim PSIS Semarang telah melakukan persiapan intensif menjelang musim kompetisi baru.' },
                { title: 'Stadion Jatidiri Direnovasi', date: '5 May 2025', summary: 'Renovasi Stadion Jatidiri memasuki tahap akhir dan siap digunakan untuk pertandingan home PSIS Semarang.' },
                { title: 'Pemain Baru PSIS Semarang', date: '1 May 2025', summary: 'PSIS Semarang mendatangkan dua pemain baru untuk memperkuat lini tengah dan depan tim.' },
                { title: 'Jadwal Pertandingan 2025', date: '28 April 2025', summary: 'PSSI telah merilis jadwal pertandingan Liga 1 2025, PSIS akan memulai dengan laga tandang.' }
            ];
            
            // Create news cards
            newsItems.forEach(news => {
                const newsCard = document.createElement('div');
                newsCard.className = 'news-card';
                newsCard.style.cssText = `
                    min-width: 280px;
                    margin-right: 20px;
                    padding: 15px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    flex-shrink: 0;
                    border-top: 4px solid ${PRIMARY_COLOR};
                `;
                
                newsCard.innerHTML = `
                    <h4 style="margin: 0 0 10px; color: ${PRIMARY_COLOR};">${news.title}</h4>
                    <small style="color: #666; display: block; margin-bottom: 10px;">${news.date}</small>
                    <p style="margin: 0; font-size: 0.9rem;">${news.summary}</p>
                    <a href="#" style="display: inline-block; margin-top: 15px; color: ${PRIMARY_COLOR}; text-decoration: none; font-weight: bold;">Baca Selengkapnya</a>
                `;
                
                // Add hover effect
                newsCard.addEventListener('mouseover', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                });
                
                newsCard.addEventListener('mouseout', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                });
                
                carouselContainer.appendChild(newsCard);
            });
            
            // Add navigation buttons
            const prevButton = document.createElement('button');
            prevButton.className = 'carousel-nav prev';
            prevButton.innerHTML = '&#10094;';
            prevButton.style.cssText = `
                position: absolute;
                left: -15px;
                top: 50%;
                transform: translateY(-50%);
                background: ${PRIMARY_COLOR};
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                z-index: 10;
                opacity: 0.7;
                transition: opacity 0.3s ease;
            `;
            
            const nextButton = document.createElement('button');
            nextButton.className = 'carousel-nav next';
            nextButton.innerHTML = '&#10095;';
            nextButton.style.cssText = `
                position: absolute;
                right: -15px;
                top: 50%;
                transform: translateY(-50%);
                background: ${PRIMARY_COLOR};
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                z-index: 10;
                opacity: 0.7;
                transition: opacity 0.3s ease;
            `;
            
            prevButton.addEventListener('mouseover', function() {
                this.style.opacity = '1';
            });
            
            prevButton.addEventListener('mouseout', function() {
                this.style.opacity = '0.7';
            });
            
            nextButton.addEventListener('mouseover', function() {
                this.style.opacity = '1';
            });
            
            nextButton.addEventListener('mouseout', function() {
                this.style.opacity = '0.7';
            });
            
            // Scroll function for carousel
            let scrollPosition = 0;
            const cardWidth = 300; // Width of card + margin
            
            prevButton.addEventListener('click', () => {
                scrollPosition -= cardWidth;
                if (scrollPosition < 0) scrollPosition = 0;
                carouselContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            });
            
            nextButton.addEventListener('click', () => {
                scrollPosition += cardWidth;
                const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;
                if (scrollPosition > maxScroll) scrollPosition = maxScroll;
                carouselContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            });
            
            // Add all elements to carousel section
            carouselContainer.appendChild(prevButton);
            carouselContainer.appendChild(nextButton);
            carouselSection.appendChild(carouselContainer);
            
            // Add carousel section to main content
            main.appendChild(carouselSection);
        }
    }

    /**
     * Adds a loading effect when the page loads
     */
    function addLoadingEffect() {
        // Create loader overlay
        const loaderOverlay = document.createElement('div');
        loaderOverlay.className = 'loader-overlay';
        loaderOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${PRIMARY_COLOR};
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        `;
        
        // Create loader spinner
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.style.cssText = `
            width: 60px;
            height: 60px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
        `;
        
        // Add keyframes for spinner
        const spinnerStyle = document.createElement('style');
        spinnerStyle.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinnerStyle);
        
        loaderOverlay.appendChild(loader);
        document.body.appendChild(loaderOverlay);
        
        // Hide loader after content loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                loaderOverlay.style.opacity = '0';
                loaderOverlay.style.visibility = 'hidden';
                
                // Remove loader after transition
                setTimeout(() => {
                    loaderOverlay.remove();
                }, 500);
            }, 800);
        });
    }

    /**
     * Improves website accessibility
     */
    function improveAccessibility() {
        // Add font size controls
        const accessibilityControls = document.createElement('div');
        accessibilityControls.className = 'accessibility-controls';
        accessibilityControls.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 5px;
            padding: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            display: flex;
            z-index: 90;
        `;
        
        // Text size buttons
        const decreaseBtn = createAccessibilityButton('A-', 'Kurangi ukuran teks');
        const resetBtn = createAccessibilityButton('A', 'Ukuran teks normal');
        const increaseBtn = createAccessibilityButton('A+', 'Perbesar ukuran teks');
        
        // Font size control functionality
        let currentFontSize = 100;
        
        decreaseBtn.addEventListener('click', () => {
            if (currentFontSize > 70) {
                currentFontSize -= 10;
                document.body.style.fontSize = `${currentFontSize}%`;
            }
        });
        
        resetBtn.addEventListener('click', () => {
            currentFontSize = 100;
            document.body.style.fontSize = '100%';
        });
        
        increaseBtn.addEventListener('click', () => {
            if (currentFontSize < 130) {
                currentFontSize += 10;
                document.body.style.fontSize = `${currentFontSize}%`;
            }
        });
        
        accessibilityControls.appendChild(decreaseBtn);
        accessibilityControls.appendChild(resetBtn);
        accessibilityControls.appendChild(increaseBtn);
        
        document.body.appendChild(accessibilityControls);
        
        // Helper to create accessibility buttons
        function createAccessibilityButton(text, title) {
            const button = document.createElement('button');
            button.textContent = text;
            button.title = title;
            button.style.cssText = `
                background: ${PRIMARY_LIGHT};
                color: white;
                border: none;
                margin: 0 2px;
                padding: 5px 8px;
                border-radius: 3px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            `;
            
            button.addEventListener('mouseover', function() {
                this.style.backgroundColor = PRIMARY_COLOR;
            });
            
            button.addEventListener('mouseout', function() {
                this.style.backgroundColor = PRIMARY_LIGHT;
            });
            
            return button;
        }
    }
});