"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggletheme } from '@/store/slices/Theme';

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.currentTheme);

    useEffect(() => {
        // Update the document theme attribute
        document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';

        // Function to update theme pickers
        const updatePickers = () => {
            document.querySelectorAll('starlight-theme-select').forEach((picker) => {
                const select = picker.querySelector('select');
                if (select) select.value = theme;

                const tmpl = document.querySelector('#theme-icons');
                const newIcon = tmpl && tmpl.content.querySelector(`.${theme}`);
                if (newIcon) {
                    const oldIcon = picker.querySelector('svg.label-icon');
                    if (oldIcon) {
                        oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);
                    }
                }
            });
        };

        // Update pickers whenever the theme changes
        updatePickers();
    }, [theme]);

    // Optionally handle theme changes from the user
    const handleThemeChange = (newTheme) => {
        dispatch(toggletheme(newTheme)); // Dispatch the action to update the theme
    };

    return (
        <div>
            {/* Pass down theme and handleThemeChange if needed */}
            {React.cloneElement(children, { theme, onThemeChange: handleThemeChange })}
        </div>
    );
};

export default ThemeProvider;
