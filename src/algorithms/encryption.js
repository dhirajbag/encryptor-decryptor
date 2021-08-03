import { get_count } from "./append";

export const encrypt = (msg_str, key_str) => {
    console.log(msg_str);
    console.log(key_str);

    if(msg_str.length===0 || key_str.length===0)
        return "";

    var result = ""
    for(let i=0; i<msg_str.length; i++){
        let c = msg_str.charCodeAt(i) - 32;
        let k = key_str.charCodeAt(i%key_str.length) - 32;
        let val = 32 + (c+k)%95;

        result += String.fromCharCode(val);
    }
    
    const append_count = get_count(key_str);

    var concat_left = "";
    var concat_right = "";
    for(let i=0; i<append_count; i++){
        concat_left += String.fromCharCode(32 + Math.floor(Math.random()*95));
        concat_right += String.fromCharCode(32 + Math.floor(Math.random()*95));
    }

    result = concat_left+result+concat_right;
    console.log(result);
    return result;
}