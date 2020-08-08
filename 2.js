//deklarasi nilai
let mtk = 80;
let bInd =89;
let bIng = 90;
let ipa = 69;
let nilai = [mtk,bInd,bIng,ipa] 
let x = nilai.length;  //untuk membuat rata2 menyesuaikan jumlah mapel yg diinput
//menghitung nilai total
let total = 0;
for(i = 0; i < x; i++){
    total += nilai[i]
}

//validasi harus diinput & input harus number
if(typeof total !== 'number' || mtk === 0 || bInd === 0 || bIng === 0 || ipa === 0 ){
    console.log("Input harus number dan Harus diisi!!")
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
