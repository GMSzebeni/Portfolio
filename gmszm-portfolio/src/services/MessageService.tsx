import axios from "axios";

class MessageService {
    sendMessage(message: { name: string; email: string; subject: string; messageText: string; honeypot: string; }){
        return axios.post('https://www.gmszm.hu/send-message', message);
    }
}
export default new MessageService();