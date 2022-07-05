
export default function useFetchRandomFact(){

    function get(url){
        return fetch(url).then(response => response.text());
    }

    return { get }
}
