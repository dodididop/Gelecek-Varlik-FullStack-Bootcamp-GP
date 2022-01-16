import axios from "axios";

const FLAT_API_BASE_URL ="http://localhost:5000/api/Flats"
class FlatService {
    getFlats(){
        return axios.get(FLAT_API_BASE_URL);
    }

    createFlat(flat){
        return axios.post(FLAT_API_BASE_URL, flat);
    }

    getFlatById(flatId){
        return axios.get(FLAT_API_BASE_URL + '/' + flatId);
    }

    updateFlat(flat){
        return axios.put(FLAT_API_BASE_URL , flat);
    }

    deleteFlat(flatId){
        return axios.delete(FLAT_API_BASE_URL + '/' + flatId);
    }
}
export default new FlatService()