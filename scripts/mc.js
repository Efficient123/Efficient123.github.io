document.addEventListener('DOMContentLoaded', () => {
    const blackScreen = document.querySelector('.dark-screen')
    const mcbe = document.querySelector('#mcbe');
    const mcje = document.querySelector('#mcje');
    mcje.addEventListener('click',() => {
        blackScreen.classList.add('fade-in');
        setTimeout(() => {
            window.location.href = "./java.html";
        }, 1000)
        setTimeout(() => {
            blackScreen.classList.remove('fade-in');
        }, 1200);
    });
    mcbe.addEventListener('click',() => {
        blackScreen.classList.add('fade-in');
        setTimeout(() => {
            window.location.href = "./bedrock.html";
        }, 1000)
        setTimeout(() => {
            blackScreen.classList.remove('fade-in');
        }, 1200);
    });
    const goback = document.querySelector('.goBack');
    goback.addEventListener('click', () => {
        window.location.href = "../../project.html";
    })
});