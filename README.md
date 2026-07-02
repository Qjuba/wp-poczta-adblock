# WP Poczta - Adblock

Userscript dla [poczta.wp.pl](https://poczta.wp.pl), który automatycznie pomija popup z ostrzeżeniem o adblocku i usuwa reklamowe divy ze strony.

<img width="445" height="314" alt="obraz" src="https://github.com/user-attachments/assets/8050716c-789d-4552-952c-d25f8989518f" />

---

## Co robi

- **Automatycznie klika** przycisk „Rozumiem ryzyko, przechodzę do poczty" — koniec z ręcznym zamykaniem przy każdej wizycie
- **Ukrywa reklamowe divy** wykrywając je po charakterystycznych kombinacjach klas CSS i ustawiając `display: none`
- **Działa dynamicznie** — używa `MutationObserver`, żeby wykrywać reklamy wczytywane po załadowaniu strony

> uBlock Origin nie wspiera tego typu reklam na WP Poczta — stąd potrzeba dodatkowego skryptu.

---

## Instalacja

1. Zainstaluj rozszerzenie do zarządzania userscriptami:
   - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (Firefox)
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari)

2. Utwórz nowy userscript i wklej zawartość pliku `wp-poczta-adblock.user.js`

3. Upewnij się, że skrypt jest włączony i odwiedź [poczta.wp.pl](https://poczta.wp.pl)

> Alternatywnie, możesz kliknąć w plik wp-poczta-adblock.user.js w widoku Raw na GitHubie — wtyczka automatycznie zaproponuje instalację.

---

## Licencja

MIT
