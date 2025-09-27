// ===== NAVEGACIÓN SUAVE Y EFECTOS INTERACTIVOS =====

document.addEventListener('DOMContentLoaded', function() {
    


    // ===== NAVEGACIÓN SUAVE =====
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar navegación activa
                updateActiveNavigation(targetId);
            }
        });
    });
    
    // ===== NAVEGACIÓN ACTIVA AL HACER SCROLL =====
    function updateActiveNavigation(activeId) {
        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === activeId) {
                link.classList.add('active');
            }
        });
    }
    
    // ===== HEADER STICKY CON EFECTO =====
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Efecto de transparencia en el header
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'none';
        }
        
        // Detectar sección activa
        detectActiveSection();
        
        lastScrollTop = scrollTop;
    });
    
    // ===== DETECTAR SECCIÓN ACTIVA =====
    function detectActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY + headerHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = '#' + section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                updateActiveNavigation(sectionId);
            }
        });
    }
    
    // ===== ANIMACIONES AL HACER SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Animación especial para cards
                if (entry.target.classList.contains('proyecto-item') || 
                    entry.target.classList.contains('miembro') ||
                    entry.target.classList.contains('universidad-card')) {
                    
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones (excluyendo section-header para evitar problemas)
    const animatedElements = document.querySelectorAll(
        '.proyecto-item, .miembro, .metodologia-item, .universidad-card'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });

    // Animación especial para section-headers que no cause problemas
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '1'; // Asegurar que siempre sean visibles
        header.style.transform = 'translateY(0)';
        header.style.transition = 'all 0.6s ease-out';
        
        // Observar para animación suave sin ocultar
        const headerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);
        
        headerObserver.observe(header);
    });
    
    // ===== EFECTOS HOVER MEJORADOS =====
    const hoverCards = document.querySelectorAll(
        '.proyecto-item, .miembro, .universidad-card, .metodologia-item'
    );
    
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 12px 24px rgba(0, 51, 102, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 4px rgba(0, 51, 102, 0.1)';
        });
    });
    

    
    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animar hero section
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'all 1s ease-out';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }
    });
    
    // ===== SCROLL TO TOP BUTTON =====
    function createScrollToTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.classList.add('scroll-to-top');
        scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollBtn.setAttribute('aria-label', 'Volver arriba');
        document.body.appendChild(scrollBtn);
        
        // Mostrar/ocultar botón
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        // Funcionalidad del botón
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    createScrollToTopButton();
    
    // ===== PARALLAX EFFECT (OPCIONAL) =====
    function initParallax() {
        const hero = document.querySelector('.hero');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Activar parallax solo en dispositivos de escritorio
    if (window.innerWidth > 768) {
        initParallax();
    }
    
    // ===== TYPEWRITER EFFECT PARA EL HERO =====
    function typewriterEffect() {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            heroTitle.style.borderRight = '2px solid #FFB800';
            
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        heroTitle.style.borderRight = 'none';
                    }, 1000);
                }
            }, 100);
        }
    }
    
    // Activar efecto typewriter después de un delay
    setTimeout(typewriterEffect, 1000);
    
    // ===== CONTADOR ANIMADO (PARA FUTURAS ESTADÍSTICAS) =====
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
    
    // ===== UTILIDADES =====
    
    // Función para mostrar notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Función para validar formularios (para futuro uso)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }
    
    // ===== ACCESIBILIDAD =====
    
    // Navegación por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ===== PERFORMANCE OPTIMIZATION =====
    
    // Lazy loading para imágenes (cuando se añadan)
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    lazyLoadImages();
    
    // ===== FUNCIONALIDADES ESPECÍFICAS PARA SECCIÓN DE FUENTES =====
    
    // Animaciones suaves para elementos de fuentes (sin ocultar inicialmente)
    const fuentesElements = document.querySelectorAll(
        '.fuente-categoria, .fuente-item, .resumen-item, .criterio-validacion'
    );
    
    fuentesElements.forEach(element => {
        // Asegurar que siempre sean visibles
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'all 0.6s ease-out';
        
        // Observar solo para efectos adicionales, no para visibilidad
        const fuentesObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, { threshold: 0.1 });
        
        fuentesObserver.observe(element);
    });
    
    // Efectos hover mejorados para elementos de fuentes
    const fuenteItems = document.querySelectorAll('.fuente-item');
    fuenteItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) translateY(-2px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 51, 102, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Efectos para categorías de fuentes
    const fuenteCategorias = document.querySelectorAll('.fuente-categoria');
    fuenteCategorias.forEach(categoria => {
        categoria.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        categoria.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Efectos para enlaces de fuentes
    const fuenteLinks = document.querySelectorAll('.fuente-link');
    fuenteLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Efecto de click
        link.addEventListener('click', function(e) {
            // Crear efecto de ripple
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Animación de contadores en el resumen
    const resumenNumeros = document.querySelectorAll('.resumen-numero');
    const resumenObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numero = entry.target;
                const finalValue = numero.textContent;
                
                // Solo animar números
                if (!isNaN(finalValue)) {
                    let currentValue = 0;
                    const increment = finalValue / 30;
                    
                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= finalValue) {
                            numero.textContent = finalValue;
                            clearInterval(counter);
                        } else {
                            numero.textContent = Math.floor(currentValue);
                        }
                    }, 50);
                }
                
                resumenObserver.unobserve(numero);
            }
        });
    }, { threshold: 0.5 });
    
    resumenNumeros.forEach(numero => {
        resumenObserver.observe(numero);
    });
    
    // Agregar estilos CSS para la animación ripple
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('🎓 Sitio web de investigación académica cargado correctamente');
    console.log('📚 Universidad Central de Chile - Análisis Curricular');
    console.log('📖 Sección de Fuentes de Información configurada');
});