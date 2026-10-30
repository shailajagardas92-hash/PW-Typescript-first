import {test} from '@playwright/test'

test("amazon search dropdown by label", async({page})=>
{
    await page.goto("https://www.amazon.in/")
    await page.locator("//select[@id='searchDropdownBox']").selectOption({label:'Books'})
    
})
test("amazon search dropdown by index", async({page})=>
{
    await page.goto("https://www.amazon.in/")
    await page.locator("//select[@id='searchDropdownBox']").selectOption({index:2})
    
})
test("amazon search dropdown by print product names", async({page})=>
{
    await page.goto("https://www.amazon.in/")
    const product = await page.locator("//select[@id='searchDropdownBox']")
    const pnames = await product.locator("option")

    for(let i=0;i<await pnames.count();i++)
    {
        const itemnames = await pnames.nth(i).textContent()
        console.log(itemnames)
    }
})

test("amazon search dropdown by print product names using alltextcontext", async({page})=>
{
    await page.goto("https://www.amazon.in/")
    const product = await page.locator("//select[@id='searchDropdownBox']")
    await page.waitForLoadState()
    const pnames = await product.locator("option").allTextContents()
    console.log(pnames)    
})
