document.addEventListener("DOMContentLoaded", function () {
  var productCards = document.querySelectorAll(".col");

  document.getElementById("find").addEventListener("input", function () {
    var searchQuery = this.value.toLowerCase();

    productCards.forEach(function (card) {
      var title = card.querySelector(".card-text").textContent.toLowerCase();
      var display = title.includes(searchQuery) ? "block" : "none";

      card.style.display = display;
    });

    var container = document.querySelector(".row.row-cols-md-3");
    var sortedCards = Array.from(productCards).sort(function (a, b) {
      var aDisplay = a.style.display === "block" ? 0 : 1;
      var bDisplay = b.style.display === "block" ? 0 : 1;

      return aDisplay - bDisplay;
    });

    container.innerHTML = "";
    sortedCards.forEach(function (card) {
      container.appendChild(card);
    });
  });
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector('.card-img-top').src;
    let harga = parent.querySelector('.harga').innerHTML;
    let judul = parent.querySelector('.card-text').innerHTML;
    let deskripsi = parent.querySelector('.deskripsi')? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia</i>';

    let tombolModal = document.querySelector('.btnModal');
    tombolModal.click();

    document.querySelector('.modalTitle').innerHTML = judul;
    let image = document.createElement('img');
    image.src = gambar;
    image.classList.add('w-100')
    document.querySelector('.modalImage').innerHTML = '';
    document.querySelector('.modalImage').appendChild(image);
    document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
    document.querySelector('.modalHarga').innerHTML = harga;

    const nohp ='628992860528';
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Hallo%20Minn,%20Saya%20mauu%20pesan%20produk%20ini%20${gambar}`;

    document.querySelector('.btnBeli').href = pesan;

  });
});

