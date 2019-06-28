This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Aby poprawnie uruchomić aplikację należy: 
1. W głównym folderze aplikacji uruchomić komendę: npm install
2. W głównym folderze aplikacji uruchomić komendę: npm start



Największy problem sprawiło mi poprawne zaimplementowanie Loadera - niestety nie udało mi się zrobić tego poprawnie.
Kolejny problem pojawił się przy próbie pobrania danych do organizacji, pomimo przekazywania Tokenu do autoryzacji server zwraca error 401.


Postanowiłem nie korzystać z reduxa, aby jak najbardziej ograniczyć potrzebę wykorzystywania dodatkowych bibliotek. 
Zamiast tego wykorzystałem Context który oferuje React w najnowszej wersjii dzięki Hook'om.

