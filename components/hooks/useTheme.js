import useSWR from "swr"

const fetcher=({...arg})=>fetch(...arg).then(data=>data.json())

export const useThemes=()=>{
    const { data, error } = useSWR('/api/site', fetcher)

    return {
      menus: data,
      isLoading: !error && !data,
      isError: error,
    }
}