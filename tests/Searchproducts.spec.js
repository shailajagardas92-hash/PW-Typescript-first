import {test} from '@playwright/test'

 test('Amazon search by auto suggestion',async({page})=>
{
    await page.goto("http://www.Amazon.in")
    let pagetitle = await page.title()
    console.log(pagetitle)
    let pageurl = await page.url()
    console.log(pageurl)
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill("book")  
    const searchitem = await page.locator('.left-pane-results-container').locator('//div')
    const count = await searchitem.count()
    for(let i=0;i<count;i++)
    {
        const item = await searchitem.nth(i).innerText()
        if( await item.includes("bookshelf"))
        {
            await searchitem.nth(i).click()
            break
        }
    }
})

test.only('flipkart search by auto suggestion',async({page})=>
{
    await page.goto("https://www.flipkart.com/")
    await page.getByRole('button', { name: '✕' }).click()
    const pagetitl = await page.title()
    console.log(pagetitl)
    const purl = await page.url()
    console.log(purl)
    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill("watches")
    const searchproducts = await page.locator("//ul").locator("//li")
    const searchproductsnames = await page.locator("//ul").locator("//li").allTextContents()
    const products = await searchproducts.count()
    console.log(products)
    console.log(searchproductsnames)
    for(let i=0;i<products;i++)
    {
        const productsname = await searchproducts.nth(i).innerText()
        if(await productsname.includes("Trending Now"))
        {
            await searchproducts.nth(i).click()
            break
        }
    }

})