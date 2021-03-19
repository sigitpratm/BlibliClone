// icon kategori
$('#icon_kategori').mouseenter(function(){
    $('#black_overlay').show();
});
$('#id_segitiga_atas').mouseenter(function(){
    $('#black_overlay').show();
});
$('#icon_kategori').mouseleave(function(){
    $('#black_overlay').hide();
});
$('#id_bar_list_kategori').mouseenter(function(){
    $('#black_overlay').show();
});
$('#id_list_kategori').mouseenter(function(){
    $('#id_list_kategori_konten').show();
});
$('#id_bar_list_kategori').mouseleave(function(){
    $('#id_list_kategori_konten').hide();
    $('#black_overlay').hide();
});

// icon tas
$('#id_tas').mouseenter(function(){
    $('#black_overlay').show();
});
$('#id_segitiga_atas').mouseenter(function(){
    $('#black_overlay').show();
});
$('#id_tas').mouseleave(function(){
    $('#black_overlay').hide();
});

// cari kategori
document.getElementById("cari_kategori").addEventListener("click", function(){
    document.getElementById("id_cari_kategori_bar_konten").classList.toggle("show");
})
$('#cari_kategori').click(function(){
    $('#black_overlay').toggle();
});
window.onclick = function(e) {
    if (!e.target.matches('.cari_kategori')) {
        document.getElementById("black_overlay").style.display = "none";
        var x = document.getElementById("id_cari_kategori_bar_konten");
        if (x.classList.contains('show')) {
            x.classList.remove('show');
        }
    }
}



// Script Penawaran Section
$('#tombol-promo').click(function () {
    $('#tombol-promo').addClass('active');
    $('#tombol-bank').removeClass('active');
    $('#tombol-spesial').removeClass('active');
    
    $('#penawaran-section').show();
    $('#bank-section').hide();
    $('#spesial-section').hide();
});

$('#tombol-bank').click(function () {
    $('#tombol-bank').addClass('active');
    $('#tombol-promo').removeClass('active');
    $('#tombol-spesial').removeClass('active');
    
    $('#bank-section').show();
    $('#penawaran-section').hide();
    $('#spesial-section').hide();
});

$('#tombol-spesial').click(function () {
    $('#tombol-spesial').addClass('active');
    $('#tombol-promo').removeClass('active');
    $('#tombol-bank').removeClass('active');
    
    $('#spesial-section').show();
    $('#bank-section').hide();
    $('#penawaran-section').hide();
});
// End Script Penawaran Section

