import axios from "axios";

class MessageService {
    sendMessage(message: { name: string; email: string; subject: string; messageText: string; honeypot: string; }){
        return axios.post('https://backend.gmszm.com/send-message', message);
    }
}
export default new MessageService();