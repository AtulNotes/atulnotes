"use client";
import Link from 'next/link';
import React from 'react';

const Slide = ({ data, slugP, page }) => {
    console.log(slugP);

    return (
        <div id="starlight__sidebar" className="sidebar-pane astro-vrdttmbt">
            <div className="sidebar-content sl-flex astro-vrdttmbt">


                <ul className="top-level astro-3ii7xxms">
                    <li className="astro-3ii7xxms">
                        <Link
                            href={`/${page}/home`}
                            aria-current={slugP === 'home' ? 'page' : 'ass'}
                            className="large astro-3ii7xxms">
                            <span className="astro-3ii7xxms">Home</span>
                        </Link>
                    </li>

                    {
                        Array.isArray(data) && data.map((item, index) => {
                            return (
                                <li key={index} className="astro-3ii7xxms">

                                    <details className="astro-3ii7xxms">
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
                                                                href={`/${page}/${slug.slug}@${item.slug}`}
                                                                aria-current={slugP === slug.slug ? 'page' : ''}
                                                                className="astro-3ii7xxms">
                                                                <span className="astro-3ii7xxms"
                                                                >{slug.Title}</span>
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