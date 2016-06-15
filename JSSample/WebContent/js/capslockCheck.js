/**
 * author:Yui
 */


function tellOn() {
    const tellBox = document.getElementById('capsLockTell');
    if (CapsLock.isOn()) {
        tellBox.innerText = 'CapsLockがオンになっています';
    } else {
        tellBox.innerText ='';
    }
}