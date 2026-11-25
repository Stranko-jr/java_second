function timeUntil(eventDate, now) {
    let renginys = new Date(eventDate);
    let dabar = new Date(now);

    let skirtumas = renginys - dabar;

    if (skirtumas <= 0) {
        return "Renginys jau buvo";
    }

    let dienos = Math.floor(skirtumas / 86400000);
    let valandos = Math.floor(skirtumas / 3600000) % 24;
    let minutes = Math.floor(skirtumas / 60000) % 60;

    return `Liko ${dienos} d. ${valandos} val. ${minutes} min.`;
}

console.log(timeUntil("2026-12-20T18:30:00", new Date("2026-12-18T14:15:00")));


function checkPassword(password) {
    let balai = 0;

    if (password.length >= 10) balai++;
    if (/[A-Z]/.test(password)) balai++;
    if (/[a-z]/.test(password)) balai++;
    if (/[0-9]/.test(password)) balai++;
    if (/[^a-zA-Z0-9]/.test(password)) balai++;

    let ivertinimas;

    if (balai <= 2) {
        ivertinimas = "silpnas";
    } else if (balai <= 4) {
        ivertinimas = "vidutinis";
    } else {
        ivertinimas = "stiprus";
    }

    const ilgis = password.length;
    const truksta = Math.max(0, 10 - ilgis);

    return {
        balai,
        ivertinimas,
        ilgis,
        truksta
    };
}

console.log(checkPassword("Labas2026!"));




function birthdayInfo(birthDate, today) {
    let gimimas = new Date(birthDate);
    let dabar = new Date(today);

    let metai = dabar.getFullYear();
    let amzius = metai - gimimas.getFullYear();

    let gimtadienis = new Date(
        metai,
        gimimas.getUTCMonth(),
        gimimas.getUTCDate()
    );

    if (gimtadienis > dabar) {
        amzius--;
    }

    if (gimtadienis < dabar) {
        gimtadienis.setFullYear(metai + 1);
    }

    let dienos = Math.ceil((gimtadienis - dabar) / 86400000);

    return `Amzius: ${amzius}. Iki gimtadienio liko ${dienos} d.`;
}

console.log(birthdayInfo("2008-05-15", "2026-03-20"));



function generateOrderCode(customerName) {
    let vardas = (customerName.toUpperCase() + "XXXX").slice(0, 4);

    let data = new Date();
    let metai = String(data.getFullYear()).slice(-2);
    let menuo = ("0" + (data.getMonth() + 1)).slice(-2);
    let diena = ("0" + data.getDate()).slice(-2);

    let skaicius = ("0000" + Math.floor(Math.random() * 10000)).slice(-4);

    return vardas + "-" + metai + menuo + diena + "-" + skaicius;
}

console.log(generateOrderCode("Matas"));





const games = [
    { title: "Cyberpunk 2077", genre: "RPG", price: 59.99 },
    { title: "Baldur's Gate 3", genre: "RPG", price: 69.99 },
    { title: "The Witcher 3", genre: "RPG", price: 39.99 },
    { title: "Hades", genre: "Roguelike", price: 24.99 },
    { title: "Forza Horizon 5", genre: "Racing", price: 59.99 },
    { title: "Stardew Valley", genre: "Simulation", price: 14.99 },
    { title: "Hollow Knight", genre: "Action", price: 14.99 }
];

function getGamesByGenreWithDiscount(games, genre, discountPercent) {
    return games.map(g => ({
        title: g.title,
        genre: g.genre,
        price: +(g.price * (100 - discountPercent) / 100).toFixed(2)
    })).filter(g => g.genre.toLowerCase() === genre.toLowerCase());
}

console.log(getGamesByGenreWithDiscount(games, "rpg", 20));