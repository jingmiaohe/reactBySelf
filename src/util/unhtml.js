
export default function unHtml(str) {
    return str ? str.replace(/[<">']/g, (a) => {
       return {
               '<': '&lt;',
               '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
        }[a]
    }) : '';

}