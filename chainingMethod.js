const angka = [-1,8,9,1,4,-5,-4,3,2,9]

// Cari angka > 5
// Kalikan 3
// Jumlahkan

const hasil = angka.filter((angkah) => {
    return angkah > 5
})
.map((angkah) => {
    return angkah * 3
})
.reduce((acc,cur) => {
    return acc + cur
})

console.log(hasil)