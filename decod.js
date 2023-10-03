function myFunction2() {
    // Kullanıcıdan Metin'i al
    var decodeText = document.getElementById("veriGirisi2").value;
    
    // kodlanmış Metin'i ana Metin'e dönüştür
    var mainText = atob(decodeText);


    // document get element By Id komutu ile HTML'ye yazdır
    var sonucDiv = document.getElementById("sonuc2");
    sonucDiv.textContent = mainText;
}
