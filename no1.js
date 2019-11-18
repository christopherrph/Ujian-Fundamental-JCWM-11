function lelang(menit){
    var harga = 10000
    for(var i=1; i<=menit; i++){
      if(i%4!=0){
        harga = harga * 1.20
        harga = Math.ceil(harga)
      }else{
        harga = harga * 1.10
        harga = Math.ceil(harga)
      }
    }
    if(harga < 30000000){
        return `Pada Menit ke-${menit}. Harga Barang Mencapai Rp.${harga.toLocaleString()}`
    }else{
        return `Pada Menit ke-${menit}. Barang Sudah Dibeli`
    }
}
console.log(lelang(49))
