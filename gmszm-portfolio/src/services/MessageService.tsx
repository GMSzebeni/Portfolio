import axios from "axios";

class MessageService {
    sendMessage(message: { name: string; email: string; subject: string; messageText: string; honeypot: string; }){
        return axios.post('http://localhost:8080/send-message', message);
    }
}
export default new MessageService();