function createDynamicArt() {
    const svgArt = document.getElementById('svgArt');

    while (svgArt.lastChild && svgArt.lastChild.nodeName !== "rect") {
        svgArt.removeChild(svgArt.lastChild);
    }

    for (let i = 0; i < 10; i++) {
        const x = Math.random() * 400;
        const y = Math.random() * 400;
        const width = Math.random() * 100 + 20;
        const height = Math.random() * 100 + 20;

        const hue = Math.random() * 360;
        const saturation = Math.random() * 50 + 30;
        const lightness = Math.random() * 30 + 50;

        const fillColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", fillColor);

        svgArt.appendChild(rect);
    }
}

createDynamicArt();

document.getElementById('svgArt').addEventListener('click', createDynamicArt);