# Skill: Screenshot strony

Zrób screenshot aktualnej strony (`index.html`) i zapisz go w folderze `screenshots/` w katalogu projektu.

## Kroki

1. Upewnij się że folder `screenshots/` istnieje w katalogu projektu. Jeśli nie — utwórz go.

2. Sprawdź które przeglądarki są dostępne (w tej kolejności):
   - Microsoft Edge: `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`
   - Google Chrome: `C:/Program Files/Google/Chrome/Application/chrome.exe`

3. Wykonaj screenshot w trybie headless dla kilku rozdzielczości:
   - Desktop (1280×800) → `screenshots/desktop.png`
   - Tablet (768×1024) → `screenshots/tablet.png`
   - Mobile (390×844) → `screenshots/mobile.png`

   Komenda dla Edge/Chrome (dostosuj ścieżkę do przeglądarki):
   ```
   "ŚCIEŻKA_PRZEGLĄDARKI" --headless --screenshot="ŚCIEŻKA_PROJEKTU/screenshots/desktop.png" --window-size=1280,800 "file:///ŚCIEŻKA_PROJEKTU/index.html"
   ```

4. Po wykonaniu screenshotów wyświetl każdy plik użytkownikowi (Read tool na plikach PNG).

5. Podaj krótki komentarz: czy strona wygląda dobrze na każdej rozdzielczości, co ewentualnie rzuca się w oczy.

## Uwagi
- Ścieżka projektu: `c:/Users/tomci/Documents/Strona Elizee`
- Jeśli żadna przeglądarka nie jest dostępna pod standardowymi ścieżkami, sprawdź `where msedge` i `where chrome` przez Bash
- Screenshoty robione są z pliku lokalnego (`file://`), więc czcionki Google Fonts mogą nie załadować się bez internetu — to normalne
