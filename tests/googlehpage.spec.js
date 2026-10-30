import {test} from '@playwright/test'

test("Google home page links", async({page})=>
{
    await page.goto("http://google.com")
    const countlink = await page.getByRole("link")
   
}
)

