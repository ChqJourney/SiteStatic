import Layout from "../components/layouts/layout";
import { ToolCard } from "../components/layouts/toolcard";

export default function Tools({ data }) {
  return (
    <div className="container mx-auto mt-12 h-screen">
      <div className="grid grid-cols-4 gap-4">
        {data.map((m) => (
          <ToolCard key={m.id} tool={m} />
        ))}
      </div>
    </div>
  );
}
Tools.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const fs = require("fs");
  var file = await fs.readFileSync("./Users/tools.json", "utf-8");
  var jsObj = JSON.parse(file);
  console.log(jsObj);
  return {
    props: {
      data: jsObj,
    }, // will be passed to the page component as props
  };
}
