import { test, expect, Page, Locator } from '@playwright/test';
import { MainPage } from '../models/MainPage';

let mainPage: MainPage;

test.describe('Тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test('Проверка отображения элементов навигации хедера', async () => {
    await mainPage.checkElementsVisability();
  });

  test('Проверка названий элементов навигации хедера', async () => {
    await mainPage.checkElementsText();
  });

  test('Проверка атрибута href элементов навигации хедера', async () => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Проверка атрибута переключения light мода', async () => {
    await test.step('Нажатие на ионку и переключение лайт мода', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });

    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });

  test('Проверка стилей со светлой темой', async () => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });

    await test.step('Скриншотная проверка светлой темы', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test('Проверка стилей с темной темой', async () => {
    await test.step('Установка темной темы', async () => {
      await mainPage.setDarkMode();
    });

    await test.step('Скриншотная проверка темной темы', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
