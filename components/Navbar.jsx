"use client";
import { useSelector, useDispatch } from 'react-redux';
import { toggletheme } from '@/store/slices/Theme';
import { ActiveSearchFunc } from '@/func/navfunc';
import { Search } from '@/utils/searchbox';
import Link from 'next/link';

const Navbar = () => {
    const dispatch = useDispatch();
    const themeProvider = useSelector(state => state.theme);

    return (
        <header className="header astro-vrdttmbt">
            <div className="header sl-flex astro-kmkmnagf">
                <div className="title-wrapper sl-flex astro-kmkmnagf">
                    <Link href="/" className="site-title sl-flex astro-m46x6ez3">
                        <span className="astro-m46x6ez3"><i className="fa-duotone fa-solid fa-code"></i> AtulNotes </span>
                    </Link>
                </div>
                <div className="sl-flex astro-kmkmnagf">
                    <button onClick={() => ActiveSearchFunc()} data-open-modal className="astro-v37mnknz">
                        <svg
                            aria-label="Search"
                            className="astro-v37mnknz astro-c6vsoqas"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
                        </svg>
                        <span
                            className="sl-hidden md:sl-block astro-v37mnknz"
                            aria-hidden="true">Search</span>
                        <svg
                            aria-label="(Press / to Search)"
                            className="sl-hidden md:sl-block astro-v37mnknz astro-c6vsoqas"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Zm3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10Z" />
                            <path
                                d="M15.293 6.707a1 1 0 1 1 1.414 1.414l-8.485 8.486a1 1 0 0 1-1.414-1.415l8.485-8.485Z" />
                        </svg>
                    </button>
                    <Search />
                </div>
                <div className="sl-hidden md:sl-flex right-group astro-kmkmnagf">
                    <div className="sl-flex social-icons astro-kmkmnagf">
                        <a
                            href="https://github.com/Atugatran"
                            rel="me"
                            className="sl-flex astro-wy4te6ga">
                            <span className="sr-only astro-wy4te6ga">GitHub</span>
                            <svg
                                aria-hidden="true"
                                className="astro-wy4te6ga astro-c6vsoqas"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z" />
                            </svg>
                        </a>
                    </div>
                    <label
                        className="astro-4yphtoen">
                        <span className="sr-only astro-4yphtoen">Select theme</span>
                        <svg
                            aria-hidden="true"
                            className="icon label-icon astro-4yphtoen astro-c6vsoqas pl-2"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6V7Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16v1Z" />
                        </svg>
                        <select  defaultValue={themeProvider.theme} onClick={(e) => dispatch(toggletheme(e.target.value))} className="astro-4yphtoen">
                            <option value="dark" className="astro-4yphtoen">Dark</option>
                            <option value="light" className="astro-4yphtoen">Light</option>
                            <option value="auto" className="astro-4yphtoen">
                                Auto
                            </option>
                        </select>
                        <svg
                            aria-hidden="true"
                            className="icon caret astro-4yphtoen astro-c6vsoqas"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </header>)
}

export default Navbar