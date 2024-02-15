const profilePhotos = document.querySelectorAll('.profile-photo');
setTimeout(function() {
    profilePhotos.forEach(function(photo) {
        photo.classList.add('animate');
    });
}, 250);
function typeWriter(elementId) {
    const nameText = document.getElementById(elementId).textContent;
    document.getElementById(elementId).textContent = "";
    
    let index = 0;

    function type() {
        if (index < nameText.length) {
            document.getElementById(elementId).textContent += nameText.charAt(index);
            index++;
            setTimeout(type, 60);
        }
    }

    type();
}
typeWriter("name1");
typeWriter("name2");
typeWriter("name3");
typeWriter("name4");