document.addEventListener("DOMContentLoaded", () => {
    const blackScreen = document.querySelector('.black-screen');
    const dcBtn = document.getElementById('dc');
    const mcBtn = document.getElementById('mc');
    const wdBtn = document.getElementById('wd');
    dcBtn.addEventListener("click", () => {
        blackScreen.classList.add('fade-in');
        setTimeout(() => {
            window.location.href = "../pages/projects/Discord-bot/discord-bot.html";
        }, 1000);
        setTimeout(() => {
            blackScreen.classList.remove('fade-in');
        }, 2000)
    })
    mcBtn.addEventListener("click", () => {
        blackScreen.classList.add('fade-in');
        setTimeout(() => {
            window.location.href = "../pages/projects/Minecraft/minecraft.html";
        }, 1000);
        setTimeout(() => {
            blackScreen.classList.remove('fade-in');
        }, 2000)
    })
    wdBtn.addEventListener("click", () => {
        blackScreen.classList.add('fade-in');
        setTimeout(() => {
            window.location.href = "../pages/projects/Web-dev/Web-dev.html";
        }, 1000);
        setTimeout(() => {
            blackScreen.classList.remove('fade-in');
        }, 2000)
    })
})