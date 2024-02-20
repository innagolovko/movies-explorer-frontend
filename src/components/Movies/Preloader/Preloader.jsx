import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Моделируем задержку загрузки для демонстрации
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        loading ? (
            <div className="preloader">
                <div className="preloader__container">
                    <span className="preloader__round"></span>
                </div>
            </div>
        ) : null
    );
};

export default Preloader;


/* import React from 'react'
import './Preloader.css'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader */

