//deklarasi nilai
let nilai = [90,90,90,90]

// validasi inputan harus diisi
        let x = nilai.length;
            if( x < 4){
        console.log("Semua Nilai harus diisi!!")
     return false;
} 

//menghitung nilai total
let total = 0;
for(i = 0; i < x; i++){
    total += nilai[i]
}

// validasi input harus number 
if(isNaN(total)){
    console.log("Nilai Harus number")
    return false;
}
//rata-rata
let rata = total/x;
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


//note 
// rata2 akan menyesuaikan dengan jumlah inputan nilai
// inputan nilai minimal harus 4 yaitu b.indo,mtk,b.inggris dan ipa
// inputan harus number
