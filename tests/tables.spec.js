import {test} from '@playwright/test'

test("tables selections",async({page})=>
{
await page.goto("https://flights.qedgetech.com/")
await page.getByPlaceholder("Email ID").fill("shailajagardas92@gmail.com")
await page.getByPlaceholder("Password").fill("shailaja")
await page.getByRole("button",{name:'Sign In'}).click()
const flighttoedit = 15712
await page.getByRole("link",{name:' Flight Bookings '}).click()
const flighttable = await page.locator(".flights_table")
const row = flighttable.getByRole('row')
for(let i=1;i<await row.count();i++)
{
    const column = await row.nth(i).getByRole('cell')
    const orderid = await column.first().textContent()
    if(orderid === flighttoedit)
    {
        await column.last().getByRole("link",{name:'View'}).click()
        break
    }
    
}

})
test('table selction edit button ',async({page})=>
{
    await page.goto("https://flights.qedgetech.com/")
await page.getByPlaceholder("Email ID").fill("shailajagardas92@gmail.com")
await page.getByPlaceholder("Password").fill("shailaja")
await page.getByRole("button",{name:'Sign In'}).click()
const flighttoedit = 15714
await page.getByRole("link",{name:' Flight Bookings '}).click()
const flighttable = await page.locator(".flights_table")
const row = flighttable.getByRole('row')
for(let i=1;i<await row.count();i++)
{
    const column = await row.nth(i).getByRole('cell')
    const orderid = await column.first().textContent()
    if(orderid === flighttoedit)
    {
        await column.last().getByRole("link",{name:'Edit'}).click()
        break
    }
    
}
}
)

test('table selction delete button ',async({page})=>
{
    await page.goto("https://flights.qedgetech.com/")
await page.getByPlaceholder("Email ID").fill("shailajagardas92@gmail.com")
await page.getByPlaceholder("Password").fill("shailaja")
await page.getByRole("button",{name:'Sign In'}).click()
const flighttoedit = 15715
await page.getByRole("link",{name:' Flight Bookings '}).click()
const flighttable = await page.locator(".flights_table")
const row = flighttable.getByRole('row')
for(let i=1;i<await row.count();i++)
{
    const column = await row.nth(i).getByRole('cell')
    const orderid = await column.first().textContent()
    if(orderid === flighttoedit)
    {
        await column.last().getByRole("link",{name:'Delete'}).click()
        break
    }
    
}
}
)