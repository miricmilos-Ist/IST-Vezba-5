let context = require('./knjiga_moduli/knjige_context');

// sve knjige
console.log("Sve knjige: ");
console.log(context.sveKnjige());

// dodavanje
context.addKnjiga(6,"Gospodar Prstenova","Dz.R.R. Tolkin");
console.log("Nakon dodavanja knjige");
console.log(context.sveKnjige());

// dohv. po ID-u
console.log("Dohvatanje po ID-u: ");
console.log(context.getKnjiga(4));

// promena autora
console.log("Nakon promene autora:");
context.postaviAutora("Seobe","Branko Copic");
console.log(context.sveKnjige());

// brisanje
console.log("Nakon brisanja jedne knjige:");
context.deleteKnjiga(2);
console.log(context.sveKnjige());

// dohv. po autoru
console.log("Dohvatanje po autoru");
console.log(context.getKnjigaByAuthor('Ivo Andric'));