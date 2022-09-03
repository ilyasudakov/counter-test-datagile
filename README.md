# Тест задание со счетчиками для Datagile

## [Демонстрация на Vercel](https://counter-test-datagile.vercel.app/)

## Инструкция для установки npm package

```
npm i counter-test-datagile
```

В приложении:

```javascript
import Counter from 'counter-test-datagile';
import 'counter-test-datagile/dist/style.css';

const MyComponent = () => {
  return (
    <>
      <Counter />
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
