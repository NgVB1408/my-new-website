document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.getElementById('spin');
    const messageElement = document.getElementById('message');
    
    // Thay đổi thời gian và thông điệp tùy theo nhu cầu
    const oneDay = 24 * 60 * 60 * 1000; // 24 giờ tính bằng mili giây
    const today = new Date().toDateString();
    
    // Lấy thông tin từ LocalStorage
    const lastPlayedDate = localStorage.getItem('lastPlayedDate');

    // Kiểm tra nếu người dùng đã chơi trong ngày hôm nay
    if (lastPlayedDate === today) {
        messageElement.textContent = 'Bạn đã chơi vòng quay may mắn hôm nay rồi!';
        spinButton.disabled = true;
    } else {
        messageElement.textContent = 'Chúc bạn may mắn!';
        
        spinButton.addEventListener('click', () => {
            // Xử lý logic vòng quay may mắn tại đây
            alert('Vòng quay đang quay...');
            
            // Lưu thông tin vào LocalStorage sau khi người dùng tham gia
            localStorage.setItem('lastPlayedDate', today);
            messageElement.textContent = 'Cảm ơn bạn đã tham gia!';
            spinButton.disabled = true;
        });
    }
});

