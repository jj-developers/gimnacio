import axios from "axios";

const URL_BASE = "http://localhost:8080/miembros";

class MiembroServicio {
    findAll() {
        return axios.get(URL_BASE);
    }

    create(miembro) {
        return axios.post(URL_BASE, miembro);
    }

    findByID(idMiembro){
        return axios.get(URL_BASE +'/'+ idMiembro);
}
        update(idMiembro,miembro){
        return axios.put(URL_BASE +'/' +idMiembro,miembro);
        }

        delete( idPersona){
        return axios.delete(URL_BASE+ '/' +idPersona) ;
        }
}


export default new MiembroServicio();