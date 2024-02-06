import axios from "axios";

class MessageService {
    sendMessage(message: { name: string; email: string; subject: string; messageText: string; honeypot: string; }){
        return axios.post('https://gmszm-portfolio-mail.onrender.com/send-message', message);
    }
}
export default new MessageService();