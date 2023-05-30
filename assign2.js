const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");

const para = document.querySelector("p");

button1.addEventListener("click",()=>{
    const div = document.getElementById("showable");
    const div1 = document.getElementById("d1");
    const image = document.createElement("img");
    const div3 = document.getElementById("gp3");
    image.src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png";
    div1.append(image);

    const H1 = document.createElement("h1");
    H1.innerText = "Ipsit";

    const H2 = document.createElement("h2");
    H2.innerText = "Ipsit";

    const H3 = document.createElement("h3");
    H3.innerText = "Ipsit";

    const H4 = document.createElement("h4");
    H4.innerText = "Ipsit";

    const H5 = document.createElement("h5");
    H5.innerText = "Ipsit";
    para.style.display="block";
    div3.append(H1,H2,H3,H4,H5);   
});

button2.addEventListener("click",()=>{
    window.location.reload();
});