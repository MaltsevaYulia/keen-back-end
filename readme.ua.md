## BackEnd for Keenethics

Це серверна частина програми на основі REST-api для виконання операцій CRUD з базою даних для компанії, яка надає послуги бронювання велосипедів

Докладніше про клієнтську сторону https://github.com/MaltsevaYulia/keen-front-end

Виконайте форк цього репозиторію

## Технології

- _Back-end_: Node.js / Express / Mongoose
- _Database_: MongoDB

### Встановлення залежностей

- `npm i`

### Додйте необхідні ключі до .env:

- MONGO_URL=
- PORT=

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок
