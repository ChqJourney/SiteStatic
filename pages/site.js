

function Site({menus}){

    return (
        <div>site info</div>
    )
}
export default Site

export async function getServerSideProps({locale}) {
    const fs=require('fs')
    var file=await fs.readFileSync('./Users/site.json','utf-8')
    
      var jsObj=JSON.parse(file)
      console.log(jsObj)
    return {
      props: {
        ...await serverSideTranslations(locale, ['common', 'footer','header']),
        menus:jsObj
      }, // will be passed to the page component as props
    }
  }