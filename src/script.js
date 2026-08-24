// ========================================
// DATA DUMMY FLASH SALE
// ========================================

const produkSale = [
  {
    id: 1,
    gambar: "https://placehold.co/300x300/e5e7eb/9ca3af?text=Produk+1",
    persenDiskon: "-45%",
    nama: "Kaos Polos katun combed",
    hargaDiskon: "Rp39rb",
    hargaAsli: "Rp70Rb",
    Terjual: 78,
  },
  {
    id: 2,
    gambar: "https://placehold.co/300x300/fecdd3/9f1239?text=Produk+2",
    persenDiskon: "-30%",
    nama: "Sepatu Lari Pria",
    hargaDiskon: "Rp299rb",
    hargaAsli: "Rp429rb",
    Terjual: 142,
  },
  {
    id: 3,
    gambar: "https://placehold.co/300x300/dbeafe/1d4ed8?text=Produk+3",
    persenDiskon: "-25%",
    nama: "Tas Selempang Wanita",
    hargaDiskon: "Rp149rb",
    hargaAsli: "Rp199rb",
    Terjual: 96,
  },
  {
    id: 4,
    gambar: "https://placehold.co/300x300/ddd6fe/6d28d9?text=Produk+4",
    persenDiskon: "-50%",
    nama: "Jaket Hoodie Unisex",
    hargaDiskon: "Rp249rb",
    hargaAsli: "Rp499rb",
    Terjual: 210,
  },
  {
    id: 5,
    gambar: "https://placehold.co/300x300/fef3c7/d97706?text=Produk+5",
    persenDiskon: "-20%",
    nama: "Jam Tangan Analog",
    hargaDiskon: "Rp199rb",
    hargaAsli: "Rp249rb",
    Terjual: 65,
  },
  {
    id: 6,
    gambar: "https://placehold.co/300x300/ccfbf1/0f766e?text=Produk+6",
    persenDiskon: "-35%",
    nama: "Celana Chino Pria",
    hargaDiskon: "Rp169rb",
    hargaAsli: "Rp259rb",
    Terjual: 118,
  },
  {
    id: 7,
    gambar: "https://placehold.co/300x300/fce7f3/be185d?text=Produk+7",
    persenDiskon: "-40%",
    nama: "Dress Casual Wanita",
    hargaDiskon: "Rp219rb",
    hargaAsli: "Rp365rb",
    Terjual: 84,
  },
  {
    id: 8,
    gambar: "https://placehold.co/300x300/e0f2fe/0284c7?text=Produk+8",
    persenDiskon: "-55%",
    nama: "Headphone Wireless",
    hargaDiskon: "Rp179rb",
    hargaAsli: "Rp399rb",
    Terjual: 154,
  },
  {
    id: 9,
    gambar: "https://placehold.co/300x300/ecfccb/4d7c0f?text=Produk+9",
    persenDiskon: "-15%",
    nama: "Botol Minum Stainless",
    hargaDiskon: "Rp89rb",
    hargaAsli: "Rp105rb",
    Terjual: 320,
  },
  {
    id: 10,
    gambar: "https://placehold.co/300x300/fee2e2/b91c1c?text=Produk+10",
    persenDiskon: "-60%",
    nama: "Sandal Sport Unisex",
    hargaDiskon: "Rp99rb",
    hargaAsli: "Rp249rb",
    Terjual: 275,
  },
];

const mainProduk = [
  {
    id: 1,
    name: "Kemeja Linen Pria Lengan Panjang",
    image: "https://placehold.co/400x400/e5e7eb/9ca3af?text=Kemeja+Linen",
    price: 95000,
    originalPrice: 140000,
    rating: 4.9,
    sold: 500,
    location: "Jakarta Barat",
    badges: ["gratisOngkir", "bestSeller"],
  },
  {
    id: 2,
    name: "Smartwatch AMOLED Tahan Air IP68",
    image: "https://placehold.co/400x400/dbeafe/1d4ed8?text=Smartwatch",
    price: 249000,
    originalPrice: 399000,
    rating: 4.7,
    sold: 1200,
    location: "Jakarta Selatan",
    badges: ["gratisOngkir", "baru"],
  },
  {
    id: 3,
    name: "French Press Kopi Manual 600ml",
    image: "https://placehold.co/400x400/fef3c7/d97706?text=French+Press",
    price: 127000,
    originalPrice: 150000,
    rating: 5.0,
    sold: 89,
    location: "Bandung",
    badges: ["gratisOngkir"],
  },
  {
    id: 4,
    name: "Tas Ransel Laptop 15 Inch Anti Air",
    image: "https://placehold.co/400x400/ddd6fe/6d28d9?text=Tas+Ransel",
    price: 178500,
    originalPrice: 250000,
    rating: 4.8,
    sold: 320,
    location: "Jakarta Barat",
    badges: ["gratisOngkir", "bestSeller"],
  },
  {
    id: 5,
    name: "Sepatu Sneakers Pria Casual",
    image: "https://placehold.co/400x400/fce7f3/be185d?text=Sneakers",
    price: 219000,
    originalPrice: 349000,
    rating: 4.6,
    sold: 740,
    location: "Surabaya",
    badges: ["bestSeller", "cod"],
  },
  {
    id: 6,
    name: "Blender Portable USB 6 Mata Pisau",
    image: "https://placehold.co/400x400/ccfbf1/0f766e?text=Blender",
    price: 89000,
    originalPrice: 135000,
    rating: 4.8,
    sold: 1500,
    location: "Tangerang",
    badges: ["gratisOngkir", "cod"],
  },
  {
    id: 7,
    name: "Dress Midi Wanita Motif Floral",
    image: "https://placehold.co/400x400/fecdd3/9f1239?text=Dress+Midi",
    price: 159000,
    originalPrice: 225000,
    rating: 4.9,
    sold: 280,
    location: "Depok",
    badges: ["baru", "gratisOngkir"],
  },
  {
    id: 8,
    name: "Headphone Wireless Noise Cancelling",
    image: "https://placehold.co/400x400/e0f2fe/0284c7?text=Headphone",
    price: 329000,
    originalPrice: 499000,
    rating: 4.7,
    sold: 610,
    location: "Jakarta Pusat",
    badges: ["bestSeller", "cod"],
  },
  {
    id: 9,
    name: "Lampu Meja LED dengan Pengisi Daya",
    image: "https://placehold.co/400x400/ecfccb/4d7c0f?text=Lampu+Meja",
    price: 119000,
    originalPrice: 175000,
    rating: 4.8,
    sold: 195,
    location: "Yogyakarta",
    badges: ["baru", "cod"],
  },
  {
    id: 10,
    name: "Botol Minum Stainless Steel 750ml",
    image: "https://placehold.co/400x400/fee2e2/b91c1c?text=Botol+Minum",
    price: 89000,
    originalPrice: 125000,
    rating: 4.9,
    sold: 980,
    location: "Bekasi",
    badges: ["gratisOngkir", "bestSeller"],
  },
  {
    id: 11,
    name: "Celana Chino Pria Slim Fit",
    image: "https://placehold.co/400x400/e5e7eb/374151?text=Celana+Chino",
    price: 169000,
    originalPrice: 249000,
    rating: 4.6,
    sold: 430,
    location: "Semarang",
    badges: ["gratisOngkir", "cod"],
  },
  {
    id: 12,
    name: "Rak Organizer Serbaguna 4 Susun",
    image: "https://placehold.co/400x400/f3e8ff/7e22ce?text=Rak+Organizer",
    price: 145000,
    originalPrice: 199000,
    rating: 4.7,
    sold: 365,
    location: "Malang",
    badges: ["baru", "gratisOngkir"],
  },
];
const badgeConfig = {
  gratisOngkir: {
    label: "Gratis Ongkir",
    icon: "fa-truck",
    className: "text-green-700 bg-green-50"
  },
  bestSeller: {
    label: "Best Seller",
    icon: "fa-fire",
    className: "text-orange-700 bg-orange-50"
  },
  baru: {
    label: "Baru",
    icon: "fa-sparkles",
    className: "text-blue-700 bg-blue-50"
  },
  cod: {
    label: "Bisa COD",
    icon: "fa-money-bill-wave",
    className: "text-purple-700 bg-purple-50"
  }
};
// ========================================
// FUNGSI RENDER: FLASH SALE CARD
// (disesuaikan dengan struktur field produkSale)
// ========================================

function renderFlashSaleCard(p) {
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
}

// ========================================
// RENDER KE HALAMAN
// ========================================

function renderFlashSale() {
  const rowFlashSale = document.getElementById("flash-sale-card");
  if (rowFlashSale) {
    rowFlashSale.innerHTML = produkSale.map(renderFlashSaleCard).join("");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderFlashSale();
});
