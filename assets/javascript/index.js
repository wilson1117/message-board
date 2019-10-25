window.onload = () => {
    var token = new Date();
    token = (token + "").match(/\d+:\d+:\d+/)[0].replace(/:/g, "") + Math.random().toString(36).substr(2);
    var link = io.connect(document.location.origin);
    console.log(token);
}