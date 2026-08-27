function hitungDiskon(price, originalPrice) {
  if (originalPrice <= 0) {
    return 0;
  }
  const diskon = ((originalPrice - price) / originalPrice) * 100;
  return Math.round(diskon);
}

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function renderBadges(badgeKeys) {
  const badgeHtml = badgeKeys.map(function (key) {
    const config = badgeConfig[key];
    if (!config) {
      return "";
    }
    return `
      <span class="inline-flex items-center gap-1 text-[10px] ${config.className} px-1.5 py-0.5 rounded">
        <i class="fa-solid ${config.icon} text-[9px]"></i>
        ${config.label}
      </span>`;
  });
  return badgeHtml.join("");
}