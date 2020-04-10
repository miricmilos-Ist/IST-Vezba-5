const knjige =
    [
        {
            id: 1,
            naziv: "Travnicka Hronika",
            autor: "Ivo Andric"
        },
        {
            id: 2,
            naziv: "Seobe",
            autor: "Milos Crnjanski"
        },
        {
            id: 3,
            naziv: "Ime Ruze",
            autor: "Umberto Eko"
        },
        {
            id: 4,
            naziv: "Znakovi pored puta",
            autor: "Ivo Andric"
        },
        {
            id: 5,
            naziv: "Povratak Mracnog Viteza",
            autor: "Frenk Miler"
        }
    ];

exports.get = () => {
    return knjige;
}

exports.add = knjiga => {
    knjige.push(knjiga);
}

exports.getById = id => {
    // Vraca prvi element kolekcije
    return knjige.find(k => k.id === id);
}

exports.setAutor = (naziv, autor) => {
    for(let k of knjige) {
        if(k.naziv == naziv) {
            k.autor = autor;
        }
    }
}

exports.delete = id => {
    let knjiga = knjige.find(k => k.id === id);
    knjige.splice(knjige.indexOf(knjiga), 1);
}

exports.getByAutor = autor => {
    return knjige.filter(k => k.autor == autor);
}