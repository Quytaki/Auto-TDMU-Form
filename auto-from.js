(function() {
    // ✅ Radio ở cột 5*
    const radios = document.querySelectorAll('td:last-child input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = true;
        radio.click(); // bắt sự kiện Angular nếu cần
        radio.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // ✅ Input text và textarea
    const inputs = document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
        input.value = "không";
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    console.log("✅ Hoàn tất auto đánh giá.");
})();
