const video = document.getElementById("scrollVideo");

video.addEventListener("loadedmetadata", () => {
    const duration = video.duration;

    window.addEventListener("scroll", () => {
        // Calculate the scroll progress
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollPosition / maxScroll;

        // Set the current video time based on scroll position
        video.currentTime = duration * scrollFraction;
    });
});
