# black-dragon
Teashop app

http://77.246.98.129:8081/swagger - документация backend
https://www.maxidom.ru/search/catalog/?q=hexrf&amount= - пример пагинации
Фон в webstorm: Settings > Editor > Font

Библиотека для валидации https://react-hook-form.com/get-started

loginData:
email: syuraev_anton@mail.ru
password: Qwerty123!
phoneNumber: 89999999999

Нужно исправить:
1) TODO: [@asiuraev 24.03.2024]Нужно здесь указать TableItem (2-й релиз)
2) TODO: [@asiuraev 03.04.2024]Проблема, что я использую size для ширины и высоты. Т.к. иконки могут быть не квадратными (2-й релиз)
3) Кнопку наверх у таблицы товаров (2-й релиз)
4) Виртуализация элементов таблицы (2-й релиз)
5) Раскрывать несколько карточек товаров (2-й релиз)
6) При клике на логотип идут постоянные запросы. Нужна задержка и дизейбл (2-й релиз)

Для запуска лучше использовать docker-compose:

```shell
docker compose -f docker-compose.yaml up
```

Работать будет по ```http://localhost:3001/``` (ну или ip сервера)


```bash
docker build -t tywinlanni/black-dragon-frontend .
```
