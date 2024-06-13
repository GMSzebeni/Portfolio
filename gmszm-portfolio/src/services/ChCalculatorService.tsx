import axios from "axios";

class ChCalculatorService {
    calculatePortion(portion: { chIn100Gram: number; foodInGram: number; }) {
        //return axios.post('https://www.backend.gmszm.hu/ch-calculator/portion', portion);
        return axios.post('http://localhost:8080/ch-calculator/portion', portion);
    }
    calculateTarget(target: { chIn100Gram: number; chYouWantToEat: number; }) {
        //return axios.post('https://www.backend.gmszm.hu/ch-calculator/target', target);
        return axios.post('http://localhost:8080/ch-calculator/target', target);
    }
}
export default new ChCalculatorService();