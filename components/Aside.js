"use client";
import React, { useState, useEffect } from 'react';

const Aside = ({ data }) => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        const h2Elements = tempDiv.querySelectorAll('h2');
        const h2Data = Array.from(h2Elements).map(h2 => ({
            text: h2.textContent,
            id: h2.id
        }));
        setHeadings(h2Data);
    }, [data]);


    

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
                                {/* {
                                    headings && headings.length > 0 && headings.map((item, index) => {
                                        return (
                                            <li className="astro-g2bywc46" key={index}>
                                                <a
                                                    href={'#'+item.id}
                                                    style={{ cursor: 'pointer' }}
                                                    className="astro-g2bywc46">
                                                    <span className="astro-g2bywc46">{item.text}</span>
                                                </a>
                                            </li>
                                        )
                                    })
                                } */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside