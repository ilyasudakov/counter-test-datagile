# Тест задание со счетчиками для Datagile

## [Демонстрация на Vercel](https://counter-test-datagile.vercel.app/)

## Инструкция для установки npm package

```
npm i counter-test-datagile
```

В приложении:

```javascript
import { Counters } from 'counter-test-datagile';

const MyComponent = () => {
  return (
    <>
      <Counters />
    </>
  );
};
```

## Инструкция для репозитория

```
git clone https://github.com/ilyasudakov/counter-test-datagile.git

cd counter-test-datagile

npm run start
```

## Стек

- React / Typescript
- Redux
- Tailwind

Решил разбить компонент Counter на базовый (`BasicCounter`) и дочерние (`CounterWithInterval`, `CounterWithControls`) в соответствии с Liskov principle из `SOLID`.
