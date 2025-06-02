// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем на весь экран

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;
document.getElementById('username').textContent = user.username || 'Гость';
document.getElementById('user-photo').src = user.photo_url || 'default-avatar.png';

// Загрузка NFT (заглушка)
function loadNFTs() {
    const nfts = [
        { id: 1, name: "Rare Dragon", image: "nft1.png" },
        { id: 2, name: "Epic Sword", image: "nft2.png" }
    ];
    
    const container = document.getElementById('nft-container');
    nfts.forEach(nft => {
        const nftElement = document.createElement('div');
        nftElement.className = 'nft-card';
        nftElement.innerHTML = `
            <img src="${nft.image}" alt="${nft.name}">
            <p>${nft.name}</p>
        `;
        container.appendChild(nftElement);
    });
}

// Запуск при загрузке страницы
window.onload = () => {
    loadNFTs();
    tg.BackButton.show(); // Показываем кнопку "Назад"
    tg.BackButton.onClick(() => tg.close()); // Закрываем Mini App при нажатии
};
