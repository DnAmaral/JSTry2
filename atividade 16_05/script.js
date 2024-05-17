const japanParagraph = document.getElementById("japan-paragraph");
japanParagraph.textContent = "O Japão é uma mistura fascinante de tradição e modernidade, com cidades movimentadas, templos antigos, jardins zen e uma culinária única.";


const images = document.querySelectorAll("img");
console.log("Imagens na página:");
images.forEach(image => {
    console.log(image.src);
});