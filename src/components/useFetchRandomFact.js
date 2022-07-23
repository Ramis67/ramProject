
export default function useFetchRandomFact(){

    function get(url){
        return fetch(url).then(response => response.json());
    }
    return { get }
}
