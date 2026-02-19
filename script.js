// ========================
// EMAIL FORM HANDLING
// ========================

document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const formMessage = document.getElementById('formMessage');
    
    if (emailForm) {
        emailForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = emailForm.querySelector('input[name="email"]');
            const email = emailInput.value.trim();
            
            // Basic email validation
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Get UTM parameters from URL
            const urlParams = new URLSearchParams(window.location.search);
            const utmSource = urlParams.get('utm_source') || 'direct';
            const utmMedium = urlParams.get('utm_medium') || 'none';
            const utmCampaign = urlParams.get('utm_campaign') || 'none';
            
            // Prepare data
            const data = {
                email: email,
                timestamp: new Date().toISOString(),
                utm_source: utmSource,
                utm_medium: utmMedium,
                utm_campaign: utmCampaign,
                referrer: document.referrer || 'direct',
                user_agent: navigator.userAgent
            };
            
            // For MVP, store in localStorage (later will connect to database)
            try {
                // Get existing emails
                let emails = JSON.parse(localStorage.getItem('harmony_balance_emails') || '[]');
                
                // Check if email already exists
                const emailExists = emails.some(item => item.email === email);
                
                if (emailExists) {
                    showMessage('This email is already registered!', 'error');
                    return;
                }
                
                // Add new email
                emails.push(data);
                localStorage.setItem('harmony_balance_emails', JSON.stringify(emails));
                
                // Show success message
                showMessage('Thank you! Welcome to the beauty revolution.', 'success');
                emailInput.value = '';
                
                // Send to server (will implement in Phase 2)
                // await fetch('/api/subscribe', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(data)
                // });
                
            } catch (error) {
                console.error('Error saving email:', error);
                showMessage('Something went wrong. Please try again.', 'error');
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
});

// ========================
// SMOOTH SCROLL
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product sections
document.querySelectorAll('.product-section').forEach(section => {
    observer.observe(section);
});

// ========================
// UTM PARAMETER TRACKING
// ========================

// Log UTM parameters for analytics (Phase 2: send to server)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('utm_source')) {
    const utmData = {
        source: urlParams.get('utm_source'),
        medium: urlParams.get('utm_medium'),
        campaign: urlParams.get('utm_campaign'),
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    };
    
    // Store in localStorage for now
    let visits = JSON.parse(localStorage.getItem('harmony_balance_visits') || '[]');
    visits.push(utmData);
    localStorage.setItem('harmony_balance_visits', JSON.stringify(visits));
    
    console.log('UTM Tracking:', utmData);
}

// ========================
// PRODUCT HOVER EFFECTS
// ========================

document.querySelectorAll('.product-image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    wrapper.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================
// ADMIN FUNCTION: VIEW CAPTURED EMAILS
// ========================

// Type this in console: viewCapturedEmails()
window.viewCapturedEmails = function() {
    const emails = JSON.parse(localStorage.getItem('harmony_balance_emails') || '[]');
    console.log('=== CAPTURED EMAILS ===');
    console.table(emails);
    console.log(`Total emails: ${emails.length}`);
    return emails;
};

// Type this in console: exportEmailsCSV()
window.exportEmailsCSV = function() {
    const emails = JSON.parse(localStorage.getItem('harmony_balance_emails') || '[]');
    
    if (emails.length === 0) {
        console.log('No emails to export');
        return;
    }
    
    // Create CSV content
    const headers = ['Email', 'Timestamp', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'Referrer'];
    const rows = emails.map(item => [
        item.email,
        item.timestamp,
        item.utm_source,
        item.utm_medium,
        item.utm_campaign,
        item.referrer
    ]);
    
    let csvContent = headers.join(',') + '\n';
    rows.forEach(row => {
        csvContent += row.map(field => `"${field}"`).join(',') + '\n';
    });
    
    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `harmony-balance-emails-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    console.log('CSV exported successfully!');
};

// ========================
// LOADING STATE
// ========================

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('Harmony & Balance website loaded successfully');
    console.log('Admin functions: viewCapturedEmails() and exportEmailsCSV()');
});