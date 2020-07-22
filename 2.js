let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Tepung", harga: 20000, jumlah: 2},
    {nama: "minyak goreng", harga: 9000, jumlah: 10},
]

let berastotal = barang[0].harga * barang[0].jumlah; 
let gulatotal = barang[1].harga * barang[1].jumlah; 
let tepungtotal = barang[2].harga * barang[2].jumlah; 
let minyaktotal = barang[3].harga * barang[3].jumlah; 

let totalharga = berastotal + gulatotal + tepungtotal + minyaktotal;

console.log("Bu Astuti harus membayar dengan total harga " + totalharga);
