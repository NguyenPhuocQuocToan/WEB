function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var companyName = document.getElementById("companyName").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var address = document.getElementById("address").value;
    var address2 = document.getElementById("address2").value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var cityRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10,11}$/;
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    var addressRegex = /^[a-zA-Z0-9\s]+$/;

    if (firstName.trim() === "" || lastName.trim() === "" || companyName.trim() === "" || city.trim() === "" || email.trim() === "" || phone.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" || address.trim() === "" || address2.trim() === "") {
        showError("Vui lòng điền đầy đủ thông tin.");
        return false;
    }

    if (!firstName.match(nameRegex)) {
        showError("Họ chỉ được nhập các chữ cái tiếng Việt, tiếng Anh và dấu cách.");
        return false;
    }

    if (!lastName.match(nameRegex)) {
        showError("Tên chỉ được nhập các chữ cái tiếng Việt, tiếng Anh và dấu cách.");
        return false;
    }

    if (!companyName.match(nameRegex)) {
        showError("Tên công ty chỉ được nhập các chữ cái tiếng Việt, tiếng Anh và dấu cách.");
        return false;
    }

    if (!city.match(cityRegex)) {
        showError("Thành phố chỉ được nhập các chữ cái tiếng Việt, tiếng Anh và dấu cách.");
        return false;
    }

    if (!email.match(emailRegex)) {
        showError("Email không hợp lệ.");
        return false;
    }

    if (!phone.match(phoneRegex)) {
        showError("Số điện thoại không hợp lệ.");
        return false;
    }

    if (!password.match(passwordRegex)) {
        showError("Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ, số và ký tự đặc biệt.");
        return false;
    }

    if (password !== confirmPassword) {
        showError("Xác nhận mật khẩu không khớp.");
        return false;
    }

    if (!address.match(addressRegex) || !address2.match(addressRegex)) {
        showError("Địa chỉ không hợp lệ.");
        return false;
    }

    return true; // Form hợp lệ
}

function showError(message) {
    alert(message);
}

document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    validateForm();
});
