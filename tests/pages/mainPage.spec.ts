import { test, expect } from '../fixtures/mainPage';
import { MainPage } from '../models/MainPage';

test.describe('Тесты главной страницы', () => {
  test('Проверка отображения элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsVisability();
  });

  test('Проверка названий элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsText();
    mainPage;
  });

  test('Проверка атрибута href элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Проверка атрибута переключения light мода', async ({ mainPage }) => {
    await test.step('Нажатие на ионку и переключение лайт мода', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });

    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });

  test('Проверка стилей со светлой темой', async ({ mainPage }) => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });

    await test.step('Скриншотная проверка светлой темы', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });
  test('Проверка стилей с темной темой', async ({ mainPage }) => {
    await test.step('Установка темной темы', async () => {
      await mainPage.setDarkMode();
    });

    await test.step('Скриншотная проверка темной темы', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
