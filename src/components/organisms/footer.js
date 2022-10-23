import React from 'react';

const Footer = () => {
    return (
        <footer className='container text-xs text-purple-900 text-center py-3 border-t border-t-purple-500/20'>
            Designed - {new Date().getFullYear()}.
        </footer>
    );
};

export default Footer;
