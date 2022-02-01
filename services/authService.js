import useSWR from "swr"

export const fetcher=(...args)=>fetch(...arg).then(data=>data.json())
export const useUser=()=>{
    const { data, mutate, error } = useSWR("api_user", fetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
}
