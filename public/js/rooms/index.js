const element = (id) => {
    return document.getElementById(id)
};

const joinRoomBtn = element('join-room-button');

joinRoomBtn.addEventListener('click', (e) => {
    console.log(e.target)
})