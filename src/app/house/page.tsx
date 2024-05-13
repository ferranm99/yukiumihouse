import fs from "fs";

export default async function House() {
  async function getHouseHTML(): Promise<string> {
    "use server";
    return new Promise((resolve, reject) => {
      fs.readFile("./public/house/index.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          resolve("<div>Error fetching html</div>");
          return;
        }
        resolve(data);
      });
    });
  }

  const htmlContent = await getHouseHTML();

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
