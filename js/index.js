function addID() {
    const heading = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    heading.forEach((item) => {
        const id = item.innerHTML.trim().replace(/ /g, "-");
        item.setAttribute("id", id);
    })
}


hljs.highlightAll();
addID();
tocbot.init({
    tocSelector: "article .toc",
    contentSelector: "#doc",
    headingSelector: "h1, h2, h3",
    hasInnerContainers: true,
    orderedList: false,
});

tocbot.init({
    tocSelector: "#outline",
    contentSelector: "#doc",
    headingSelector: "h1, h2, h3",
    hasInnerContainers: true,
    orderedList: false,
});

const doc = document.querySelector("#doc");
const aside = document.querySelector("aside");
const outline = aside.querySelector("#outline");

resizeSidebar = () => {
    outline.style.width = window.getComputedStyle(doc).marginLeft;

    outline.querySelectorAll("*").forEach((item) => {
        item.style.listStyleType = "none";
        item.style.paddingLeft = "0.5em";
    });
};
document.addEventListener("DOMContentLoaded", resizeSidebar);
window.addEventListener("resize", resizeSidebar);