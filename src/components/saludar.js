import '../css/component.css';
export const saludar = (nombre) => {
    console.log("saludas");
    const h1 = document.createElement("h1");
    h1.innerText = `Hola ${nombre} como estas?`;
    document.body.append(h1);
}