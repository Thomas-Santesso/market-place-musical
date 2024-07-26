let beatName;

function comprarBeat(name) {
    beatName = name;
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function finalizarCompra(format, platform) {
    const message = `Olá, estou interessado no beat ${beatName} e no formato ${format}.`;

    if (platform === 'whatsapp') {
        const phoneNumber = '5511999999999'; // Substitua pelo número do WhatsApp do produtor
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else if (platform === 'instagram') {
        const instagramUrl = 'https://www.instagram.com/produtor_exemplo/'; // Substitua pelo perfil do Instagram do produtor
        window.open(instagramUrl, '_blank');
        alert(message); // Alerta a mensagem para facilitar a cópia pelo usuário
    }

    fecharModal();
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (modal && event.target == modal) {
        fecharModal();
    }
};
