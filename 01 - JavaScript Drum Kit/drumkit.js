window.addEventListener('keydown', function(e) {const audio = document.querySelector(`audio[data-key="{e.keyCode}"]`);
audio.currentTime = 0;
audio.play();
})


const items = document.querySelectorAll('.key');

function clickTrigger() {
    let key=(this.dataset.key);
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const items=this;
    items.classList.add('play');
    audio.currentTime = 0;
    audio.play();
}

function unclickTrigger() {
    this.classList.remove('play');
}
items.forEach(item=>item.addEventListener('mousedown', clickTrigger));
items.forEach(item=>item.addEventListender('mouseup', unclickTrigger));