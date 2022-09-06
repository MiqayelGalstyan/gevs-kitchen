import { useSearchParams } from "react-router-dom";

export interface IQueryObject {
  [key: string]: string | string[] | number | IQueryObject;
}

const useQueryParams = () => {
  const setQueries = useSearchParams()[1];

  const getQueries = (): IQueryObject => {
    const queryString = decodeURIComponent(window.location.search).replaceAll('+', ' ');
    if (!queryString) {
      return {} as IQueryObject;
    }
    const queriesObject: IQueryObject = {};

    const queriesArray = queryString.slice(1).split("&");
    queriesArray.forEach((item) => {
      const [key, value] = item.split("=");
      queriesObject[key]
        ? typeof queriesObject[key] === "string"
          ? (queriesObject[key] = [queriesObject[key] as string, value])
          : (queriesObject[key] = [...(queriesObject[key] as string[]), value])
        : (queriesObject[key] = value);
    });
    return queriesObject as IQueryObject;
  };

  const clearAndSetQueries = (queries: any, options: any = {replace: true}) => {
    for (let query in queries) {
      !queries[query] && delete queries[query];
    }
    setQueries(queries, options);
  };

  return { getQueries, setQueries: clearAndSetQueries };
};

export default useQueryParams;
