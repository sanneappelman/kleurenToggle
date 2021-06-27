const kleurBlauw= function(){
    const bodyElement = document.body;
    bodyElement.classList.toggle("achtergrondBlauw");
}

const kleurBlauwattach = function() {
    const blauweAchtergrond = document.getElementById("blauw");
    blauweAchtergrond.addEventListener("click", function(){
    kleurBlauw();
});
};

kleurBlauwattach();

const kleurRood= function(){
    const bodyElement = document.body;
    bodyElement.classList.toggle("achtergrondRood");
}

const kleurRoodattach = function() {
    const rodeAchtergrond = document.getElementById("rood");
    rodeAchtergrond.addEventListener("click", function(){
    kleurRood();
});
};

kleurRoodattach();

const kleurGeel= function(){
    const bodyElement = document.body;
    bodyElement.classList.toggle("achtergrondGeel");
}

const kleurGeelattach = function() {
    const geleAchtergrond = document.getElementById("geel");
    geleAchtergrond.addEventListener("click", function(){
    kleurGeel();
});
};

kleurGeelattach();

const kleurGroen= function(){
    const bodyElement = document.body;
    bodyElement.classList.toggle("achtergrondGroen");
}

const kleurGroenattach = function() {
    const groeneAchtergrond = document.getElementById("groen");
    groeneAchtergrond.addEventListener("click", function(){
    kleurGroen();
});
};

kleurGroenattach();