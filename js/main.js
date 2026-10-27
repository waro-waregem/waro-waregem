// E-mailadres pas in de browser samenstellen, zodat eenvoudige spamrobots het niet in de HTML vinden.
document.querySelectorAll("a.mail").forEach(function (a) {
  var adres = a.dataset.user + "@" + a.dataset.domain;
  a.href = "mailto:" + adres;
  a.textContent = adres;
});

// Lightbox: klik op een foto (a.lightbox) om ze groot te bekijken.
// Zonder JavaScript opent de link gewoon de foto zelf.
(function () {
  if (!document.querySelector("a.lightbox") || typeof HTMLDialogElement !== "function") return;

  var dialoog = document.createElement("dialog");
  dialoog.className = "lightbox-dialog";
  dialoog.innerHTML =
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button type="button" class="lb-close" aria-label="Sluiten">&times;</button>' +
    '<button type="button" class="lb-prev" aria-label="Vorige foto">&#8249;</button>' +
    '<button type="button" class="lb-next" aria-label="Volgende foto">&#8250;</button>';
  document.body.appendChild(dialoog);

  var foto = dialoog.querySelector("img");
  var tekst = dialoog.querySelector("figcaption");
  var reeks = [];
  var huidig = 0;

  function toon(i) {
    huidig = (i + reeks.length) % reeks.length;
    var link = reeks[huidig];
    var figuur = link.closest("figure");
    var credit = figuur && figuur.querySelector("figcaption");
    foto.src = link.href;
    foto.alt = link.querySelector("img").alt;
    tekst.textContent = foto.alt + (credit ? " – " + credit.textContent : "");
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest("a.lightbox");
    if (!link) return;
    e.preventDefault();
    var groep = link.closest("[data-gallery]") || link.parentNode;
    reeks = Array.prototype.slice.call(groep.querySelectorAll("a.lightbox"));
    dialoog.classList.toggle("single", reeks.length < 2);
    toon(reeks.indexOf(link));
    dialoog.showModal();
  });

  dialoog.querySelector(".lb-close").addEventListener("click", function () { dialoog.close(); });
  dialoog.querySelector(".lb-prev").addEventListener("click", function () { toon(huidig - 1); });
  dialoog.querySelector(".lb-next").addEventListener("click", function () { toon(huidig + 1); });
  dialoog.addEventListener("click", function (e) { if (e.target === dialoog) dialoog.close(); });
  dialoog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") toon(huidig - 1);
    if (e.key === "ArrowRight") toon(huidig + 1);
  });
})();
