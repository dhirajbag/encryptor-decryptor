import { get_count } from "./append";

export const decrypt = (msg_str, key_str) => {
    if(msg_str.length===0 || key_str.length===0)
        return "";
    
    const append_count = get_count(key_str);
    const msg_len = msg_str.length - 2*append_count;

    var msg = "";
    for(let i=0; i<msg_len; i++){
        let val = msg_str.charCodeAt(append_count+i) - 32;
        let k = key_str.charCodeAt(i%key_str.length) - 32;
        let c = 32 + ((val - k) + 95)%95;
        msg += String.fromCharCode(c);
    }

    return msg;
}