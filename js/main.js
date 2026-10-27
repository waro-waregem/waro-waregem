// E-mailadres pas in de browser samenstellen, zodat eenvoudige spamrobots het niet in de HTML vinden.
document.querySelectorAll("a.mail").forEach(function (a) {
  var adres = a.dataset.user + "@" + a.dataset.domain;
  a.href = "mailto:" + adres;
  a.textContent = adres;
});
