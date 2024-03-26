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
    scrollSmooth: false,
});

tocbot.init({
    tocSelector: "#outline",
    contentSelector: "#doc",
    headingSelector: "h1, h2, h3",
    hasInnerContainers: true,
    orderedList: false,
    scrollSmooth: false,
});

const EA = document.querySelector("#EA-buy");
const doc = document.querySelector("#doc");
const aside = document.querySelector("aside");
const outline = aside.querySelector("#outline");

resizeSidebar = () => {
    outline.style.width = window.getComputedStyle(doc).marginLeft;

    outline.querySelectorAll("li").forEach((item) => {
        item.style.listStyleType = "none";
    });
    outline.querySelectorAll("ul:not(:first-child)").forEach((item) => {
        item.style.paddingLeft = "1em";
    });
    outline.querySelector("ul:first-child").style.paddingLeft = "0em";
};

setSidebar = () => {
    const style = window.getComputedStyle(document.querySelector("main"));
    aside.style.right = `${parseFloat(style.marginRight)}px`;
}

const eventHandler = [resizeSidebar, setSidebar]

eventHandler.forEach((handler) => {
    window.addEventListener("resize", handler)
    document.addEventListener("DOMContentLoaded", handler);
});


EA.addEventListener("click", (event) => {
    location.href = "https://www.facebook.com/profile.php?id=100065360947137";
})