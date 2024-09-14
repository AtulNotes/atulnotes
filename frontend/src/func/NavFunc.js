// Search avtive function
export const ActiveSearchFunc = () => {
    const dialog = document.querySelector('dialog[aria-label="Search"]');
    dialog.setAttribute("open", "");
}
// Search deactive function
export const DeactiveSearchFunc = () => {
    const dialog = document.querySelector('dialog[aria-label="Search"]');
    dialog.removeAttribute("open");
}