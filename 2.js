//deklarasi nilai
let nilai = [80,90,89,69]
    let total = 0;
        let x = nilai.length;
            if( x < 4){
        console.log("Semua Nilai harus diisi!!")
     return false;
} 

//menghitung nilai total
for(i = 0; i < x; i++){
    total += nilai[i]
}
    

//rata-rata
let rata = total/4;
    console.log(`Rata-rata = ${rata}`)

// grade
if(rata >= 90 && rata <=100) {
    console.log('Grade = A')
} else if(rata >=80 && rata <90 ) {
    console.log('Grade = B')
} else if(rata >=70 && rata < 80 ) {
    console.log('Grade = C')
} else if(rata >=60 && rata <70) {
    console.log('Grade = D')
} else {
    console.log('Grade = E')
}



