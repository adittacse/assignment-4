// isJavaScriptFile

function isJavaScriptFile(fileName) {
    let extension = fileName.slice(-3);  //slice -3 means the last 3 char of a string.  
    if (extension == ".js") {
        return true;
    }
    else {
        return false;
    }
}

