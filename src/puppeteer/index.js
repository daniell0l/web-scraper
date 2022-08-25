import { launch } from "puppeteer";
import { writeFile } from "fs";

const product = [];

(async () => {
  const browser = await launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
  );

  const links = await page.$$eval(".caption > h4 > a", (el) =>
    el.map((link) => {
      return link.href;
    })
  );

  for (const link of links) {
    await page.goto(link);
    console.log(link);

    const title = await page.evaluate(() => {
      const title = document.querySelector(
        "body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div > div.col-lg-10 > div.caption > h4:nth-child(2)"
      );
      if (!title) return null;
      return title.innerHTML;
    });

    if (title.includes("Lenovo")) {
      const description = await page.evaluate(() => {
        const description = document.querySelector(".description");
        if (!description) return null;
        return description.innerHTML;
      });

      const price = await page.evaluate(() => {
        const price = document.querySelector(".price");
        if (!price) return null;
        return price.innerHTML;
      });

      const reviews = await page.evaluate(() => {
        const reviews = document.querySelector(
          "body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div > div.col-lg-10 > div.ratings"
        );
        if (!reviews) return null;
        return reviews.innerText;
      });

      const obj = {};
      obj.description = description;
      obj.price = price;
      obj.reviews = reviews;
      obj.title = title;

      product.push(obj);
    }
  }

  writeFile(
    "src/database/data.json",
    JSON.stringify(product, null, 2),
    (err) => {
      if (err) throw new Error("error");

      console.log("ok");
    }
  );

  await browser.close();
})();
