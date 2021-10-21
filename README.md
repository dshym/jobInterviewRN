# jobInterviewRN
Project stworzony za pomocą "npx create-react-native-app -t with-typescript"
## Debugowanie
- Było robionie na: Pixel XL API 29; 1440x2560: 560dpi; Android 10.0
## Proces zbudowania i uruchomienia aplikacji
- git clone "repLink"
- npm install
- npm start
## Wykorzystane biblioteki i narzędzia
### Lista bibliotek:
- expo
- react-navigation (react-navigation-stack; react-native-screens; react-navigation-tabs;)
- react-native-elements
- redux; redux-thunk; react-redux
## Ewentualne elementy do poprawy/modyfikacji
- Optymalizacja rozwiązania z ładowaniem okładki dla componentu albumu. Struktura API jest taka że trzeba dla każdego componentu Album ładować listę zdjęć w nim zawartych, wybierać 
peirwsze i ustalać jako okładkę. Powoduję to wykonania dużej liczby zapytań i nie jest optymalne. Rozwiązaniem jest dodanie do obiektu "album" paramentru z linkiem do okładki.
- Rozszerzenie struktury typów i niterfejsów dla typescript (utworzenie class dla najczęściej uzywanych obiektów), by wszystkie przepływy danych były kontrolowane
- Rozszerzenie struktury i logiki error handlingu
- Eventualne doopracowanie stylów dla "landscape mode" i ogólnej adaptywności na różnych urządzeniach, używając Dimensions API i Platform API
