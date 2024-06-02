function scrollToBottom() {
    // Select the body element
    const body = document.body

    // Scroll the body to the bottom
    body.scrollTo({
        top: body.scrollHeight,
        behavior: 'smooth'
    });
}

function goToProducts(){
    window.location.href = "products.html"
}

function goToMj(){
    const targetElement = document.getElementById('mj');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}
function goToSean(){
    const targetElement = document.getElementById('sean');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}
