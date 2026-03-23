# System wizualny — Design Tokens

## Paleta kolorów

| Token CSS         | Wartość    | Zastosowanie                        |
|-------------------|------------|-------------------------------------|
| `--cream`         | `#FAF7F4`  | Tło główne, sekcje naprzemienne     |
| `--blush`         | `#F2C4CE`  | Akcenty, gwiazdki, ikony, numbery   |
| `--blush-light`   | `#FADADD`  | Tło subtelne, hover stany, hero     |
| `--nude`          | `#E8D5B7`  | Tło gradient hero, karty nude       |
| `--charcoal`      | `#2C2C2C`  | Tekst główny, przyciski dark, footer|
| `--mid`           | `#6B6B6B`  | Tekst pomocniczy, labele, tagi      |
| `--border`        | `#E5DDD6`  | Linie separatorów, obramowania pól  |

## Typografia

| Rola        | Font                                    | Użycie                         |
|-------------|-----------------------------------------|--------------------------------|
| Display     | `Playfair Display` (400, 400i, 500)     | H1–H3, cytaty, logo            |
| Body        | `Inter` (300, 400, 500)                 | Akapity, labele, przyciski     |

**Ładowanie:** Google Fonts przez `<link>` w `<head>` (preconnect + stylesheet)

## Skala typografii

- `section-tag`: `0.75rem`, `letter-spacing: .18em`, uppercase, kolor `--mid`
- `section-title`: `clamp(2rem, 4vw, 3rem)`, Playfair Display, weight 400
- Body text: `0.9375rem`, line-height `1.8`
- Small labels: `0.75–0.8rem`, letter-spacing `.08–.14em`, uppercase

## Styl ogólny

- **Charakter:** minimalistyczny, premium, kobiecy
- **Narożniki:** `border-radius: 2px` (prawie kwadratowe — subtelna elegancja)
- **Przejścia:** `0.3s cubic-bezier(.4, 0, .2, 1)` dla wszystkich animacji
- **Siatka:** `gap: 2px` między kartami (linie przez tło `--border`)
- **Brak cieni** — separacja przez kolor tła, nie box-shadow

## Przyciski

| Klasa          | Tło               | Tekst      | Border              |
|----------------|-------------------|------------|---------------------|
| `btn--dark`    | `--charcoal`      | `#fff`     | `--charcoal`        |
| `btn--light`   | `rgba(255,255,255,.85)` | `--charcoal` | transparent   |
| `btn--outline` | transparent       | `--charcoal` | `--charcoal`      |

Padding: `0.75rem 1.75rem` · Font: body · Uppercase · Letter-spacing `.06em`
