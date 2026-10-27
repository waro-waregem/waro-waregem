# waro-waregem

# WARO-Waregem website

Dit is de website van **Foto- en Diaclub WARO-Waregem**, fotoclub sinds 1965.
Live op: [www.waro-waregem.be](https://www.waro-waregem.be)

De site was eerst gemaakt met WordPress. Ze wordt nu herschreven als een
**statische website** in gewone HTML, CSS en zo weinig mogelijk JavaScript.

## Waarom geen WordPress meer?

- Geen plugins meer die steeds updates nodig hebben.
- Geen beveiligingslekken (CVE's) via verouderde plugins.
- Geen database en geen PHP nodig.
- De site is sneller en eenvoudiger te onderhouden.

## Pagina's

| Pagina | Bestand |
| --- | --- |
| Home | `index.html` |
| Waro, het verhaal | `verhaal.html` |
| Lidmaatschap | `lidmaatschap.html` |
| Galerij | `galerij.html` |
| Contact | `contact.html` |

## Structuur

```
waro-waregem/
├── index.html
├── verhaal.html
├── lidmaatschap.html
├── galerij.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js        (spambescherming e-mail en lightbox)
├── images/            (logo, favicon en foto's)
└── README.md
```

## Afspraken

- **Geen frameworks** en geen externe scripts. Alles staat in deze repo.
- **Eén gedeeld CSS-bestand** voor alle pagina's.
- **Responsive:** de site moet goed werken op gsm, tablet en computer.
- **Taal:** Nederlands (`lang="nl"`).
- **Foto's:** gecomprimeerd, met `loading="lazy"` en een `alt`-tekst.
- **Fotocredits:** vermeld altijd de naam van de fotograaf bij een foto.
- **Nooit wachtwoorden, sleutels of privégegevens** in deze repo zetten.

## Lokaal bekijken

1. Kloon de repo:
   ```
   git clone https://github.com/<account>/waro-waregem.git
   ```
2. Open `index.html` in je browser.

Er is geen build-stap nodig.

## Iets aanpassen

1. Maak een nieuwe branch.
2. Pas de HTML- of CSS-bestanden aan.
3. Controleer het resultaat in je browser, ook op gsm-formaat.
4. Maak een pull request en merge naar `main`.

## Online zetten

> Nog te beslissen: GitHub Pages of de bestaande hosting bij one.com.

**Optie A – GitHub Pages**
- De site wordt gratis gehost vanuit de branch `main`.
- Het domein `waro-waregem.be` wijst via DNS naar GitHub Pages.
- **Let op:** pas alleen de records voor de website aan (A/CNAME).
  Raak de **MX-records niet aan**, anders werkt de club-e-mail niet meer.

**Optie B – one.com via SFTP**
- Upload alleen de websitebestanden naar de map `/www`.
- Upload **nooit** de map `.git` naar de server.
- Eventueel automatisch via een GitHub Action met SFTP.
  Het wachtwoord staat dan als *secret* in GitHub, nooit in de code.

## Contactformulier

Een statische site kan zelf geen e-mail versturen. Mogelijkheden:

- een formulierdienst zoals Formspree of Web3Forms, of
- alleen de contactgegevens tonen (mail en telefoon).

## Externe links

- Facebook: [facebook.com/warowaregem](https://www.facebook.com/warowaregem)
- YouTube: [@warowaregem7345](https://www.youtube.com/@warowaregem7345)
- Fotoalbums: [waro-waregem.jalbum.net](https://waro-waregem.jalbum.net)

## Beheer

Beheerd door Astrid voor fotoclub WARO-Waregem.
