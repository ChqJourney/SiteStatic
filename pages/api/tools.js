const fs = require("fs");

export default async function handler(req, res) {
  var file = await fs.readFileSync("./Users/tools.json", "utf-8");
  var jsObj = JSON.parse(file);
  res.status(200).json({ data: jsObj });
}
