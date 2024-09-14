import React, { useState, useEffect } from 'react';

const Aside = () => {
    const [data, setData] = useState({});
    // const [pagePara, setPagePara] = useState('');

    const fetchData = async () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const page = params.get('page');
        // setPagePara(page);

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/aside/${page}`, options);
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
        <aside className="right-sidebar-container astro-67yu43on">
            <div className="right-sidebar astro-67yu43on">
                <div
                    className="right-sidebar-panel sl-hidden lg:sl-block astro-pb3aqygn">
                    <div className="sl-container astro-pb3aqygn">
                        <nav aria-labelledby="starlight__on-this-page">
                            <h2 id="starlight__on-this-page">On this page</h2>
                            <ul className="astro-g2bywc46">
                                <li className="astro-g2bywc46">
                                    <a
                                        href="#_top"
                                        style={{ cursor: 'pointer' }}
                                        className="astro-g2bywc46">
                                        <span className="astro-g2bywc46">Overview</span>
                                    </a>
                                </li>
                                {
                                    data && data.length > 0 && data.map((item, index) => {
                                        let content = item.content;
                                        return (
                                            content && content.length > 0 && content.map((item, index) => {
                                                return (
                                                    <li className="astro-g2bywc46" key={index}>
                                                        <a
                                                            href={item.id}
                                                            style={{ cursor: 'pointer' }}
                                                            className="astro-g2bywc46">
                                                            <span className="astro-g2bywc46">{item.title}</span>
                                                        </a>
                                                    </li>
                                                )
                                            }))
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside