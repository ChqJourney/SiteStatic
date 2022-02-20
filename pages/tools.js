import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ToolCard } from "../components/layouts/toolcard";
import tools from '../public/site/tools.json'


function Tools() {
  return (
    
    <div className="container mx-auto mt-12 h-full">
      <div className="grid grid-cols-4 gap-4">
        {tools.map((m) => (
          <ToolCard key={m.id} tool={m} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({locale}) {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    }, 
  };
}
export default Tools