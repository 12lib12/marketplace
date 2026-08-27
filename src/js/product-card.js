function renderCard(p) {
  const diskon = hitungDiskon(p.price, p.originalPrice);
  return `<a
            href="#"
            class="group flex flex-col h-full bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div class="relative aspect-square bg-gray-100 overflow-hidden">
              <img
                src="${p.image}"
                alt="${p.name}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span
                class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded"
              >
                -${diskon}%
              </span>
              <button
                type="button"
                aria-label="Tambah ke wishlist"
                class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white"
              >
                <i class="fa-regular fa-heart text-gray-600 text-xs"></i>
              </button>
            </div>
            <div class="p-2 sm:p-3 flex flex-col flex-1">
              <p
                class="text-xs sm:text-sm text-gray-800 leading-snug line-clamp-2 flex-1 mb-1.5"
              >
                ${p.name}
              </p>
              <div class="flex items-baseline gap-1.5 mb-1">
                <span class="text-sm sm:text-base font-semibold text-gray-900"
                  >${formatRupiah(p.price)}</span
                >
                <span class="text-[11px] text-gray-400 line-through"
                  >${formatRupiah(p.originalPrice)}</span
                >
              </div>
              <div
                class="flex items-center gap-1 text-[11px] text-gray-500 mb-1.5"
              >
                <i class="fa-solid fa-star text-amber-400 text-[10px]"></i>
                <span>${p.rating}</span>
                <span class="text-gray-300">&middot;</span>
                <span>${p.sold} Terjual</span>
              </div>
              <div class="flex items-center gap-1">

                  ${renderBadges(p.badges)}
              </div>
            </div>
          </a>`;
}
const renderFlashSaleCard = (p) => {
  return `
    <a href="#" class="group flex-shrink-0 snap-start w-28 sm:w-36 md:w-40 flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div class="relative aspect-square bg-gray-100 overflow-hidden">
        <img src="${p.gambar}" alt="${p.nama}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        <span class="absolute top-1.5 left-1.5 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">${p.persenDiskon}</span>
        <button
          type="button"
          aria-label="Tambah ke wishlist"
          class="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white"
        >
          <i class="fa-regular fa-heart text-gray-600 text-xs"></i>
        </button>
      </div>
      <div class="p-1.5 sm:p-2 flex flex-col flex-1">
        <p class="text-[11px] sm:text-xs text-gray-800 leading-snug line-clamp-1 mb-1">${p.nama}</p>
        <div class="flex items-baseline gap-1 mb-1">
          <span class="text-xs sm:text-sm font-bold text-red-600">${p.hargaDiskon}</span>
          <span class="text-[10px] text-gray-400 line-through">${p.hargaAsli}</span>
        </div>
        <p class="text-[9px] sm:text-[10px] text-gray-500 mt-auto">Terjual ${p.Terjual}</p>
      </div>
    </a>`;
};
function renderMainProduk() {
  const rowMainProduk = document.getElementById("main-produk");
  if (rowMainProduk) {
    rowMainProduk.innerHTML = mainProduk.map(renderCard).join("");
  }
}
function renderFlashSale() {
  const rowFlashSale = document.getElementById("flash-sale-card");
  if (rowFlashSale) {
    rowFlashSale.innerHTML = produkSale.map(renderFlashSaleCard).join("");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderFlashSale();
  renderMainProduk();
});
