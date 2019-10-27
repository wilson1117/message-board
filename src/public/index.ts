declare var io: any;
declare var window: any;
declare var document: any;
window.onload = () => {
    var token:string = (new Date() + "").match(/\d+:\d+:\d+/)[0].replace(/:/g, "") + Math.random().toString(36).substr(2);
    var link = io.connect(document.location.origin);
    console.log(token);
}