import Layout from "../components/layouts/layout";
import { ToolCard } from "../components/layouts/toolcard";

function Tools({ tools,menus }) {
  return (
    <Layout menus={menus}>
    <div className="container mx-auto mt-12 h-full">
      <div className="grid grid-cols-4 gap-4">
        {tools.map((m) => (
          <ToolCard key={m.id} tool={m} />
        ))}
      </div>
    </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const fs = require("fs");
  var file = await fs.readFileSync("./Users/tools.json", "utf-8");
  var file1 = await fs.readFileSync("./Users/site.json", "utf-8");
  var tools = JSON.parse(file);
  var menus=JSON.parse(file1)
  return {
    props: {
      tools: tools,
      menus:menus
    }, 
  };
}
export default Tools