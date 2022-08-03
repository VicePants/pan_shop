const wrapper = document.querySelector(".wrapper");
const pan = document.querySelector(".pan");
const xl = document.querySelector(".xl");
const hercules = document.querySelector(".hercules");
const lub = document.querySelector(".lub");

pan.addEventListener("click", event =>{
    wrapper.style.transform = 'translateY(10vh)';
});


xl.addEventListener("click", ()=> {
        wrapper.style.transform = 'translateY(-90vh)';
    });

hercules.addEventListener("click", ()=> {
        wrapper.style.transform = 'translateY(-190vh)';
    });

lub.addEventListener("click", ()=> {
        wrapper.style.transform = 'translateY(-290vh)';
    });



