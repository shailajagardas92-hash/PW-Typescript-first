import {test} from '@playwright/test'

test("handling iframes",async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/nested_frames")
    const framename = await page.frame("frame-middle").locator("#content").textContent()
    console.log(framename)
})
test("handling frames", async({page})=>
{
    await page.goto("")
    const bottomframe = await page.frame("frame-bottom").textContent()
    console.log(bottomframe)
}) 