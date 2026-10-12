const blogs = document.querySelector(".blogs");
const viewMore = document.querySelector(".viewmore-btn");

viewMore.addEventListener("click", () => {
    const expanded = blogs.classList.toggle("show-all");

    viewMore.textContent = expanded ? "View Less" : "View More";
});