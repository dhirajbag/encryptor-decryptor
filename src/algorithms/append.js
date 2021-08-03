const max_num_append = 37;

export const get_count = (key_str) => {
    var num_append = 0;
    for(let i=0; i<key_str.length; i++){
        num_append += 1+key_str.charCodeAt(i) - 32;
        num_append %= max_num_append;
    }
    return num_append;
}