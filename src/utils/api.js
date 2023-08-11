import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjRjZjQ5NzcxZDAwYjEyNDMwYWI5MzYzYWVhZTdiYiIsInN1YiI6IjY0YzBmNGY3MWNmZTNhMGViMzBiZGY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w_KPoka_F1AUhE5dDgkCxeCs1BKqnWcxO_XujGj2gsE"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

// export default fetchDataFromApi; 