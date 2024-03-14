function KiemTra()
{
    var ten = document.getElementById("ten").value;
    var ho = document.getElementById("ho").value;
    var mail = document.getElementById("mail").value;
    var sdt = document.getElementById("sdt").value;
    var cty = document.getElementById("cty").value;
    var dc1 = document.getElementById("dc1").value;
    var dc2 = document.getElementById("dc2").value;
    var tp = document.getElementById("tp").value;
    var pass = document.getElementById("pass").value;
    var xnp = document.getElementById("xnp").value;
    var regexTen = /^[A-Za-zÀ-ỹ\s]+$/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexSdt = /^[0-9]{10,11}$/;
    var regexMK = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var regexDC = /^[A-Za-z0-9\s,]+$/;

    if(ten.length==0||ho.length==0||mail.length==0||sdt.length==0
        ||cty.length==0||dc1.length==0||dc2.length==0||tp.length==0
        ||pass.length==0||xnp.length==0)
        {
            alert("Tất cả các thông tin không được để trống!")
            return false;
        }

    if(!regexTen.test(ho)||!regexTen.test(ten)||!regexTen.test(cty)
        ||!regexTen.test(tp))
    {
        alert("Chỉ được nhập các chữ cái tiếng Việt, tiếng Anh, dấu cách")
        return false;
    }

    if(!regexEmail.test(mail))
    {
        alert("Email không đúng định dạng")
        return false;
    }

    if(regexSdt.test(sdt))
    {
        alert("Sdt không đúng định dạng")
        return false;
    }

    if(regexMK.test(pass))
    {
        alert("Mật khẩu bao gồn chữ, số, các ký tự đặc biệt")
        return false;
    }

    if(pass != xnp)
    {
        alert("Mật khẩu xác nhận không khớp")
        return false;
    }

    if(!regexDC.test(dc1) || !regexDC.test(dc2))
    {
        alert("Địa chỉ, địa chỉ 2: gồm các ký tự chữ và số")
        return false;
    }

    return true;
}