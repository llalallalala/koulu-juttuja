class opiskelija{
    constructor(nimi, ika, kurssi)
    {
        this.nimi = nimi;
        this.ika = ika;
        this.kurssi = kurssi;
    }

    tulosta()
    {
        console.log(`Nimi: ${this.nimi} \tIkä: ${this.ika} \tKurssi: ${this.kurssi}`)
    }
}

class Auto{
    constructor(merkki, malli, vuosimalli)
    {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;
    }

    tulosta()
    {
        console.log(`Merkki: ${this.merkki} \tMalli: ${this.malli} \tVuosimalli: ${this.vuosimalli}`)
    }
}

function kirjaMalli(nimi, kirjailija, vuosi)
{
    return {'nimi': nimi, 'kirjailija': kirjailija, 'vuosi': vuosi}
}

let kirjat = []
kirjat.push(kirjaMalli('hyvä kirja', 'minä', 20250))
kirjat.push(kirjaMalli('parempi kirja', 'minä', 20260))
kirjat.push(kirjaMalli('paras kirja', 'minä', 20350))

////
const testi1 = new opiskelija("Mbmbmb", 94, "Matematiikka")

////
const auto1 = new Auto("mcdonalds", "mcdonalds", "mcdonalds")
const auto2 = new Auto("burgerking", "burgerking", "burgerking")

////
testi1.tulosta()

//--

auto1.tulosta()
auto2.tulosta()

//--

kirjat.forEach(k=>{
    console.log(k)
})



////////// tein vahingossa luokkia vaikka piti tehdä olioita lol

const auto1Olio = {'merkki': "mcdonal", 'malli': 'mcronald,', 'vuosimalli': 'joo'}

console.log(auto1Olio.merkki)