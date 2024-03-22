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
    tocSelector: ".toc",
    contentSelector: ".markdown-body",
    headingSelector: "h1, h2, h3",
    hasInnerContainers: true,
    orderedList: false,
});