function myFunction() {
    // kullanıcıdan veri alınan kısım
    var veri = document.getElementById("veriGirisi").value;
    
    // encod ile kodlanan kısım
    var encodeText = btoa(veri);
// yukarıdaki var değişkeni "btoa" tekniği ile Metin'i kodluyor ve kodlanmış Metin'e dönüştürüyor

//  aşağıda ise kodlanmış Metin document get elemen by ID ile HTML'ye yazdırılıyor   
    var sonucDiv = document.getElementById("sonuc");
    sonucDiv.textContent = encodeText;
}

