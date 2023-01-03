






function colors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    document.body.innerHTML = `<h2>rgb(${r}, ${g}, ${b})`;
};


setInterval(colors, 1000);