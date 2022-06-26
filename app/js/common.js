jQuery(function($) {
    // Lead m_kaigo
    ScrollReveal().reveal('.main_img', {
        distance: '100px',
        origin: 'bottom',
        duration: '1000'
    });
    // Lead m_yakuzai
    ScrollReveal().reveal('.lead-box', {
        distance: '100px',
        origin: 'bottom',
        duration: '1000',
        delay: '500'
    });
     ScrollReveal().reveal('.merit_img.odd', {
        distance: '100px',
        origin: 'right',
        duration: '1000',
        delay: '500'
    });
     ScrollReveal().reveal('.merit_img.even', {
        distance: '100px',
        origin: 'left',
        duration: '1000',
        delay: '500'
    });
});
