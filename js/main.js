const cards = [
    {
        name:"Cataclisma Costiero",
        price:Math.random()*100,
        img:"https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=422027&type=card",
        type:"Sorcery",
        cardText:"Return all nonland permanents to their owners' hands.",
        flavorText:"Il mare riempiva le reti degli abitanti del villaggio, fino al giorno in cui si decise a lanciare la propria."
    },
    {
        name:"Vitu-Ghazi, l'Albero-Città",
        price:Math.random()*100,
        img:"https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=533503&type=card",
        manaCost:null,
        type:"Sorcery",
        cardText:"Create a 1/1 green Saproling creature token.",
        flavorText:"In autunno getta i propri semi nelle vie sottostanti, e quando giunge la primavera i suoi figli sorgono per servire il Conclave."
    },
    {
        name:"Elisir Millenario",
        price:Math.random()*100,
        img:"https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=377619&type=card",
        manaCost:3,
        type:"Artifact",
        cardText:"You may activate abilities of creatures you control as though those creatures had haste.",
        flavorText:"Paradossalmente, per inclinare quell'enorme brocca per un sorsetto, avresti bisogno dell'energia di quel tonico dei giganti."
    },
    {
        name:"Meridiana del Veggente",
        price:Math.random()*100,
        img:"https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=211269&type=card",
        manaCost:4,
        type:"Artifact",
        cardText:"Whenever a land enters the battlefield under your control, you may pay 2. If you do, draw a card.",
        flavorText:"Le ombre si stanno muovendo verso la vetta. Immagino che presto ci renderemo conto della vera potenza dell'oscurità."
    },
    {
        name:"Druida della Cappa",
        price:Math.random()*100,
        img:"https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=448437&type=card",
        manaCost:1,
        type:"Creature — Elf Druid",
        cardText:"",
        flavorText:"Il selvatico groviglio della Cappa offre rifugio alla fauna che vide sorgere i primi edifici."
    },
];

const showCard = document.getElementById('show-card');
const ul = document.createElement('ul');
showCard.appendChild(ul);
cards.forEach((card, i) => {
    const li = document.createElement('li');
    const name = document.createElement('h2');
    const price = document.createElement('h3');
    const img = document.createElement('img');
    const manaCost = document.createElement('div');
    const type = document.createElement('div');
    const cardText = document.createElement('div');
    const flavorText = document.createElement('div');
    name.textContent = card.name;
    price.textContent = card.price;
    img.src = card.img;
    manaCost.textContent = card.manaCost;
    type.textContent = card.type;
    cardText.textContent = card.cardText;
    flavorText.textContent = card.flavorText;
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(img);
    li.appendChild(manaCost);
    li.appendChild(type);
    li.appendChild(cardText);
    li.appendChild(flavorText);
    ul.appendChild(li);
});