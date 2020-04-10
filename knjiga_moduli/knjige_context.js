let knjige = require('./knjige');
// console.log(knjigeRepo.get());

exports.sveKnjige = () => {
    return knjige.get();
}

exports.addKnjiga = (id, naziv, autor) => {
    let knjiga = { 
        id: id, 
        naziv: naziv, 
        autor: autor 
    };
    knjige.add(knjiga);
}

exports.getKnjiga = id => {
    return knjige.getById(id);
}

exports.postaviAutora = (naziv, autor) => {
    knjige.setAutor(naziv, autor);
}

exports.deleteKnjiga = id => {
    knjige.delete(id);
}

exports.getKnjigaByAuthor = autor => {
    return knjige.getByAutor(autor);
}