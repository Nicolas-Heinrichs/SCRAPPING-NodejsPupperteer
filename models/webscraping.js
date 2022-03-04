const puppeteer = require("puppeteer");
const { pageURL } = require("./data");
require('./data')

const webscraping = async pageURL => {
    const browser = await puppeteer.launch(
        { headless: true, args: ["--no-sandbox"] }
    );
    const page = await browser.newPage();

    try {
        await page.goto(pageURL);
        const muschrooms = await page.evaluate(() => {
            let arrayName = [];
            let arrayDesc = [];
            let arrayImg = [];
            let array = [];

            let elementsName = document.querySelectorAll("div.legend_title");
            elementsName.forEach((el) => arrayName.push({ name: el.innerHTML }));

            let elementsDesc = document.querySelectorAll("div.legende_excerpt");
            elementsDesc.forEach((el) => arrayDesc.push({ desc: el.textContent }));

            let elementsImg = document.querySelector("ul.thumb_list").childNodes;
            elementsImg.forEach((el) => arrayImg.push({ imgUrl: el.dataset.src }));

            for (i in arrayName) {
                array[i] = {
                    name: arrayName[i].name,
                    desc: arrayDesc[i].desc,
                    img: arrayImg[i].imgUrl
                };
            }


            return array;
        });
        dataObj = await muschrooms;
    } catch (e) {
        console.log(e);
    }

    browser.close();
    return dataObj
};


const data = webscraping(pageURL)

module.exports = data;







