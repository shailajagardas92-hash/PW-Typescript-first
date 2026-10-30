import {test, expect} from '@playwright/test'

test('To check assertion toHaveTitle()', async({page})=>
{
    await page.goto("https://playwright.dev/docs/intro")
    await expect(page).toHaveTitle(/playwright/i)
})

test('To check assertion toHaveURL()',async({page})=>
{
    await page.goto("https://flights.qedgetech.com/")
    await expect(page).toHaveURL(/qedgetech/i)
})

test('To check assertion toHaveText()', async({page})=>
{
    await page.goto("https://flights.qedgetech.com/")
    const linkelement = await page.getByRole("link",{name:'I forgot my password'})
    await expect(linkelement).toHaveText(/my/i)
})

test('To check assertion toHaveContains()', async({page})=>
{
    await page.goto("https://flights.qedgetech.com/")
    const linkelement = await page.getByRole("link",{name:'I forgot my password'})
    await expect(linkelement).toContainText("I")
})