/**
 * @param {string} string
 * @param {string} query
 * @return {string}
 */

/*
In browsers, we are able to find specific words or phrases within a webpage by using Ctrl + F (Windows, Linux) or ⌘ + F
(Mac) and entering the search term. Matches which appear will be highlighted in yellow.
 */
export default function textSearch(string, query) {
    if (string.trim() === '' || query.trim() === '') {
        return string
    }
    let boldChars = Array.from({length: string.length}, () => 0)
    for (let i = 0; i < string.length;) {
        let substr = string.slice(i, i + query.length)
        if (substr.toLowerCase() === query.toLowerCase()){
            boldChars.fill(1, i, i + query.length)
            i = i + query.length
        }else{
            i++
        }
    }
    let highlightedText = ''
    for(let i = 0; i < string.length; i++) {
        let char = string[i]
        let shouldAddOpeningTag = boldChars[i] === 1 && boldChars[i-1] !== 1
        let shouldAddCloseTag = boldChars[i] === 1 && boldChars[i+1] === 0
        if (shouldAddOpeningTag) char = '<b>' + char
        if (shouldAddCloseTag) char =  char + '</b>'
        highlightedText += char
    }
    return highlightedText
}

textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');