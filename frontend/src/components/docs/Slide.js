import React, { useState, useEffect } from 'react';

const Slide = () => {
    const [data, setData] = useState({});
    const [pagePara, setPagePara] = useState('');

    const fetchData = async () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const page = params.get('page');
        setPagePara(page);

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        };

        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/slider', options);
            const data = await response.json();
            
            setData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div id="starlight__sidebar" className="sidebar-pane astro-vrdttmbt">
            <div className="sidebar-content sl-flex astro-vrdttmbt">


                <ul className="top-level astro-3ii7xxms">
                    <li className="astro-3ii7xxms">
                        <a
                            href="/docs?page=home"
                            aria-current={pagePara === 'home' ? 'page' : ''}
                            className="large astro-3ii7xxms">
                            <span className="astro-3ii7xxms">Home</span>
                        </a>
                    </li>

                    {
                        data && data.length > 0 && data.map((item, index) => {
                            return (
                                <li key={index} className="astro-3ii7xxms">
                                    <details open className="astro-3ii7xxms">
                                        <summary className="astro-3ii7xxms">
                                            <div className="group-label astro-3ii7xxms">
                                                <span className="large astro-3ii7xxms">{item.Title}</span>
                                            </div>
                                            <svg
                                                aria-hidden="true"
                                                className="caret astro-3ii7xxms astro-c6vsoqas"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"
                                                />
                                            </svg>
                                        </summary>
                                        <ul className="astro-3ii7xxms">
                                            {
                                                item.slugs && item.slugs.length > 0 && item.slugs.map((slug, index) => {
                                                    return (
                                                        <li key={index} className="astro-3ii7xxms">
                                                            <a
                                                                href={`/docs?page=${slug.slug}`}
                                                                aria-current={pagePara === slug.slug ? 'page' : ''}
                                                                className="astro-3ii7xxms">
                                                                <span className="astro-3ii7xxms"
                                                                >{slug.slug}</span>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </details>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default Slide