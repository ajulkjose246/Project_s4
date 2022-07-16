$(document).ready(function () {

    // register form validation
    let logut_value = 0;

    let r_name,r_phone, name, uname, r_email, r_uname, pswd = 1, cpswd = 0;
    $("#reg_name").keyup(function () {
        name = document.getElementById("reg_name").value
        var c_name = /^[a-z ]{3,20}$/i;
        r_name = c_name.test(name)
        if (r_name == false) {
            $("#reg-name-err").text("Enter a valid Name");
        } else {
            $("#reg-name-err").text("");
            $(".error_msg").text("");

        }
    })

    $("#reg_email").keyup(function () {
        var email = document.getElementById("reg_email").value
        var c_email = /^[a-z0-9.]{3,}$/
        r_email = c_email.test(email)
        if (r_email == false) {
            $("#reg-email-err").text("Enter a valid Email");
        } else {
            $("#reg-email-err").text("");
            $(".error_msg").text("");
        }
    })
    $("#reg_phone").keyup(function () {
        var phone = document.getElementById("reg_phone").value
        var c_phone = /^[0-9]{10,10}$/;
        r_phone = c_phone.test(phone)
        if (r_phone == false) {
            $("#reg-phone-err").text("Enter a valid phone Number");
        } else {
            $("#reg-phone-err").text("");
            $(".error_msg").text("");
        }
    })
    $("#reg_uname").keyup(function () {
        var uname = document.getElementById("reg_uname").value
        var c_uname = /^[a-z_0-9]{3,20}$/
        r_uname = c_uname.test(uname)
        if (r_uname == false) {
            $("#reg-uname-err").text("Enter a valid Username");
        } else {
            $("#reg-uname-err").text("");
            $(".error_msg").text("");
        }
    })
    $("#reg_pswd").keyup(function () {
        pswd = document.getElementById("reg_pswd").value
        if (pswd.length >= 6) {
            $("#reg-pswd-err").text("");
        } else {
            $("#reg-pswd-err").text("password must be 6 characters");
        }
    })
    $("#reg_cpswd").keyup(function () {
        pswd = document.getElementById("reg_pswd").value
        cpswd = document.getElementById("reg_cpswd").value
        if (pswd.length >= 6) {
            if (cpswd != pswd) {
                $("#reg-cpswd-err").text("Passwords don't match");
            } else {
                $("#reg-cpswd-err").text("");
                $(".error_msg").text("");
            }
        } else {
            $("#reg-cpswd-err").text("password must be 6 characters");
        }
    })
    //end register form validation

    // login form validation
    $("#username").keyup(function () {
        uname = document.getElementById("username").value
        var c_uname = /^[a-z_0-9]{3,20}$/
        r_uname = c_uname.test(uname)
        if (r_uname == false) {
            $("#log-usr-err").text("Enter a valid Username");
        } else {
            $("#log-usr-err").text("");
            $(".error_msg").text("");
        }
    })
    $("#log_pass").keyup(function () {
        pswd = document.getElementById("log_pass").value
        if (pswd.length < 6) {
            $("#log-pswd-err").text("password must be 6 characters");
        } else {
            $("#log-pswd-err").text("");
            $(".error_msg").text("");
        }
    })
    // end login form validation

    // pincode-validation
    $("#pin_code").keyup(function () {
        var pincode = document.getElementById("pin_code").value
        var c_pincode = /^[0-9]{6,10}$/
        r_pincode = c_pincode.test(pincode)
        if (r_pincode==false) {
            $("#pincode-error").text("Pincode must be 6 Numbers");
        } else {
            $("#pincode-error").text("");
        }
    })


    $("#home-btn").click(function () {
        $("section").show();
        $(".xiaomi-sec").hide();
        $(".apple-sec").hide();
        $(".realme-sec").hide();
        $(".micromax-sec").hide();
        $(".samsung-sec").hide();
        $(".honor-sec").hide();
        $("#login_page").hide();
        $("#register_page").hide();
        $(".pro-buy-details").hide();
        $(".cart-section").hide();
    })

    $("#t_row2").hide();
    $("#m_row2").hide();
    $("#login_page").hide();
    $("#register_page").hide();
    $("#btn_logout").hide();
    logut_value = 0;
    $(".pro-buy-details").hide();
    $(".xiaomi-sec").hide();
    $(".apple-sec").hide();
    $(".realme-sec").hide();
    $(".micromax-sec").hide();
    $(".samsung-sec").hide();
    $(".honor-sec").hide();
    $(".cart-section").hide();

    $(".cart0").hide();
    $(".cart1").hide();
    $(".cart2").hide();
    $(".cart3").hide();
    $(".cart4").hide();

    $("#to_btn").click(function () {
        $("#t_row2").toggle();
    })
    $("#m_btn").click(function () {
        $("#m_row2").toggle();
    })

    $("#btn_login").click(function () {
        $("body").css("background-color", "#0575e6")
        $("section").hide();
        $("#login_page").show();
    })
    $("#btn-log-login").click(function () {
        if (r_uname && pswd.length >= 6) {
            $("body").css("background-color", "#f1f3f6")
            $("#t_row2").hide();
            $("#m_row2").hide();
            $("section").show();
            $("#login_page").hide();
            $("#btn_login").hide();
            $("#register_page").hide();
            $(".pro-buy-details").hide();
            $(".xiaomi-sec").hide();
            $(".apple-sec").hide();
            $(".realme-sec").hide();
            $(".micromax-sec").hide();
            $(".samsung-sec").hide();
            $(".honor-sec").hide();
            $("#btn_register").hide();
            $("#btn_logout").show();
            $(".cart-section").hide();
            $("#btn_profile_name").text(uname)
            logut_value = 1;
        }
        else {
            $(".error_msg").text("Fill in the all field");
        }


    })
    $("#btn_register").click(function () {
        $("body").css("background-color", "#0575e6")
        $("section").hide();
        $("#register_page").show();
    })
    $("#btn-log-register").click(function () {
        if (r_name && r_email && r_uname && pswd == cpswd && pswd.length >= 6 && cpswd.length >= 6) {
            $("body").css("background-color", "#f1f3f6")
            $("#t_row2").hide();
            $("#m_row2").hide();
            $("section").show();
            $("#login_page").hide();
            $(".pro-buy-details").hide();
            $("#btn_login").hide();
            $("#register_page").hide();
            $(".xiaomi-sec").hide();
            $(".apple-sec").hide();
            $(".realme-sec").hide();
            $(".micromax-sec").hide();
            $(".cart-section").hide();
            $(".samsung-sec").hide();
            $(".honor-sec").hide();
            $("#btn_register").hide();
            $("#btn_logout").show();
            $("#btn_profile_name").text(name)
            logut_value = 1;
        } else {
            $(".error_msg").text("Fill in the all field");
        }
    })

    $(".btn-buynow").click(function () {
        if (logut_value == 0) {
            $(".modal-body").text("Please Login")
        } else {
            if (r_name) {
                $(".modal-body").text("Hey " + name + " Something went wrong Sorry for the inconvenience")
            } else {
                $(".modal-body").text("Hey " + uname + " Something went wrong Sorry for the inconvenience")
            }

        }
    })
    $("#cart-proceed-btn").click(function () {
        if (logut_value == 0) {
            $(".modal-body").text("Please Login")
        } else {
            if (r_name) {
                $(".modal-body").text("Hey " + name + " Something went wrong Sorry for the inconvenience")
            } else {
                $(".modal-body").text("Hey " + uname + " Something went wrong Sorry for the inconvenience")
            }

        }
    })

    $("#xiaomi-btn").click(function () {
        fn_hide();
        $(".pro-buy-details").hide();
        $(".xiaomi-sec").show();
    })
    $("#apple-btn").click(function () {
        fn_hide();
        $(".pro-buy-details").hide();
        $(".apple-sec").show();
    })
    $("#realme-btn").click(function () {
        fn_hide();
        $(".pro-buy-details").hide();
        $(".realme-sec").show();
    })
    $("#micromax-btn").click(function () {
        fn_hide();
        $(".pro-buy-details").hide();
        $(".micromax-sec").show();
    })
    $("#samsung-btn").click(function () {
        fn_hide();
        $(".pro-buy-details").hide();
        $(".samsung-sec").show();
    })
    $("#honor-btn").click(function () {
        fn_hide();
        $(".pro-buy-details").hide();
        $(".honor-sec").show();
    })

    $("#cart-nav-btn").click(function () {
        fn_hide();
        $(".pro-buy-details").hide();
        $(".cart-section").show();
        switch (cart_number) {
            case 0:
                $(".cart0").hide();
                $(".cart1").hide();
                $(".cart2").hide();
                $(".cart3").hide();
                $(".cart4").hide();
                $(".cart-amount").hide()
                $("#cart-proceed-btn").hide()
                

                break;
            case 1:
                $(".cart0").show();
                $(".cart-amount").show()
                $("#cart-proceed-btn").show()

                break;
            case 2:
                $(".cart0").show();
                $(".cart1").show();
                $(".cart-amount").show()
                $("#cart-proceed-btn").show()

                break;
            case 3:
                $(".cart0").show();
                $(".cart1").show();
                $(".cart2").show();
                $(".cart-amount").show()
                $("#cart-proceed-btn").show()

                break;
            case 4:
                $(".cart0").show();
                $(".cart1").show();
                $(".cart2").show();
                $(".cart3").show();
                $(".cart-amount").show()
                $("#cart-proceed-btn").show()

                break;
            case 5:
                $(".cart0").show();
                $(".cart1").show();
                $(".cart2").show();
                $(".cart3").show();
                $(".cart4").show();
                $(".cart-amount").show()
                $("#cart-proceed-btn").show()
                break;
            default:
                $(".cart0").show();
                $(".cart1").show();
                $(".cart2").show();
                $(".cart3").show();
                $(".cart4").show();
                $(".cart-amount").show()
                $("#cart-proceed-btn").show()
        }
    })


    // mobile-details
    $("#mob-1").click(function () {
        fn_hide();
        products_details("./img/phones/pro_9.webp", "REDMI 10", "4.4", "1,13,452 Ratings &  58,524 Reviews", "10999", "14999", "64", "128", "4", "6", "Akshnav Online", "MZB0B6OIN", "10", "Pacific Blue")
        $(".pro-buy-details").show();
    })
    $("#mob-2").click(function () {
        fn_hide();
        products_details("./img/phones/pro_8.webp", "OPPO K10 ", "4.34", "1,93,180 Ratings &  58,514 Reviews", "14990", "18999", "64", "128", "6", "8", "XONIGHT E-Commerce", "CPH2373", "K10", "Black Carbon")
        $(".pro-buy-details").show();
    })
    $("#mob-3").click(function () {
        fn_hide();
        products_details("./img/phones/pro_11.webp", "MOTOROLA e40", "4.1", "1,36,148 Ratings &  23,125 Reviews", "9999", "10999", "32", "64", "4", "8", "TREASURE HAUL ONLINE", "PARL0010IN", "e40", "Carbon Gray")
        $(".pro-buy-details").show();
    })
    $("#mob-4").click(function () {
        fn_hide();
        products_details("./img/phones/pro_10.webp", "MOTOROLA G60", "4.2", "1,81,564 Ratings &  82,456 Reviews", "14999", "21999", "32", "64", "4", "8", "TREASURE HAUL ONLINE", "PANB0023IN", "G60", "Moonless")
        $(".pro-buy-details").show();
    })
    $("#mob-5").click(function () {
        fn_hide();
        products_details("./img/phones/pro_7.webp", "SAMSUNG Galaxy F12 ", "4.3", "1,83,110 Ratings &  18,524 Reviews", "11499", "12999", "64", "128", "4", "6", "TrueComRetail", "SM-F127GLBGINS", "Galaxy F12", "Sky Blue")
        $(".pro-buy-details").show();
    })
    $("#mob-6").click(function () {
        fn_hide();
        products_details("./img/phones/pro_2.webp", "Realme C20", "4.44", "2,83,610 Ratings &  13,534 Reviews", "7499", "7999", "64", "128", "4", "6", "PETILANTE Online", "RMX3063 / RMX3061", "C20", "Cool Blue")
        $(".pro-buy-details").show();
    })
    $("#mob-7").click(function () {
        fn_hide();
        products_details("./img/phones/pro_5.webp", "POCO F4 5G", "4.4", "1,83,110 Ratings &  18,524 Reviews", "27999", "32999", "128", "256", "8", "12", "ECOMTAMSINRetail", "MZB0BVEIN", "F4 5G", "Nebula Green")
        $(".pro-buy-details").show();
    })
    $("#mob-8").click(function () {
        fn_hide();
        products_details("./img/phones/pro_6.webp", "Realme Narzo 50i", "4.5", "1,81,170 Ratings &  11,561 Reviews", "7599", "7999", "32", "64", "2", "4", "BTPLD", "RMX3231", "Narzo 50i", "Mint Green")
        $(".pro-buy-details").show();
    })
    $("#mob-9").click(function () {
        fn_hide();
        products_details("./img/phones/pro_1.webp", "POCO C31", "4.44", "77,236 Ratings &  4,470 Reviews", "9499", "11999", "32", "64", "3", "4", "Truenet Commerce", "MZB0A0KIN", "C31", "Royal Blue")
        $(".pro-buy-details").show();
    })
    $("#mob-10").click(function () {
        fn_hide();
        products_details("./img/phones/pro_4.webp", "SAMSUNG Galaxy F22", "4.3", "1,83,110 Ratings &  18,524 Reviews", "11999", "14999", "64", "128", "4", "6", "TrueComRetail", "SM-E225FLBDINS", "Galaxy F22", "Denim Blue")
        $(".pro-buy-details").show();
    })
    $("#mob-11").click(function () {
        fn_hide();
        products_details("./img/phones/pro_3.webp", "Realme 9 5G", "4.5", "1,53,610 Ratings &  11,584 Reviews", "16049", "18999", "64", "128", "4", "6", "METHOMecom", "RMX3388", "9 5G", "Meteor Black")
        $(".pro-buy-details").show();
    })
    $("#mob-12").click(function () {
        fn_hide();
        products_details("./img/phones/pro_12.webp", "REDMI Note 10T 5G", "4.3", "1,39,100 Ratings &  18,421 Reviews", "13999", "18999", "64", "128", "4", "6", "Akshnav Online", "MZB09DZIN", "Note 10T 5G", "Metallic Blue")
        $(".pro-buy-details").show();
    })

    $("#tre-1").click(function () {
        fn_hide();
        products_details("./img/phones/pro_1.webp", "POCO C31", "4.44", "77,236 Ratings &  4,470 Reviews", "9499", "11999", "32", "64", "3", "4", "Truenet Commerce", "MZB0A0KIN", "C31", "Royal Blue")
        $(".pro-buy-details").show();
    })
    $("#tre-2").click(function () {
        fn_hide();
        products_details("./img/phones/pro_2.webp", "Realme C20", "4.44", "2,83,610 Ratings &  13,534 Reviews", "7499", "7999", "64", "128", "4", "6", "PETILANTE Online", "RMX3063 / RMX3061", "C20", "Cool Blue")
        $(".pro-buy-details").show();
    })
    $("#tre-3").click(function () {
        fn_hide();
        products_details("./img/phones/pro_3.webp", "Realme 9 5G", "4.5", "1,53,610 Ratings &  11,584 Reviews", "16049", "18999", "64", "128", "4", "6", "METHOMecom", "RMX3388", "9 5G", "Meteor Black")
        $(".pro-buy-details").show();
    })
    $("#tre-4").click(function () {
        fn_hide();
        products_details("./img/phones/pro_4.webp", "SAMSUNG Galaxy F22", "4.3", "1,83,110 Ratings &  18,524 Reviews", "11999", "14999", "64", "128", "4", "6", "TrueComRetail", "SM-E225FLBDINS", "Galaxy F22", "Denim Blue")
        $(".pro-buy-details").show();
    })
    $("#tre-5").click(function () {
        fn_hide();
        products_details("./img/phones/pro_5.webp", "POCO F4 5G", "4.4", "1,83,110 Ratings &  18,524 Reviews", "27999", "32999", "128", "256", "8", "12", "ECOMTAMSINRetail", "MZB0BVEIN", "F4 5G", "Nebula Green")
        $(".pro-buy-details").show();
    })
    $("#tre-6").click(function () {
        fn_hide();
        products_details("./img/phones/pro_6.webp", "Realme Narzo 50i", "4.5", "1,81,170 Ratings &  11,561 Reviews", "7599", "7999", "32", "64", "2", "4", "BTPLD", "RMX3231", "Narzo 50i", "Mint Green")
        $(".pro-buy-details").show();
    })
    $("#tre-7").click(function () {
        fn_hide();
        products_details("./img/phones/pro_7.webp", "SAMSUNG Galaxy F12 ", "4.3", "1,83,110 Ratings &  18,524 Reviews", "11499", "12999", "64", "128", "4", "6", "TrueComRetail", "SM-F127GLBGINS", "Galaxy F12", "Sky Blue")
        $(".pro-buy-details").show();
    })
    $("#tre-8").click(function () {
        fn_hide();
        products_details("./img/phones/pro_8.webp", "OPPO K10 ", "4.34", "1,93,180 Ratings &  58,514 Reviews", "14990", "18999", "64", "128", "6", "8", "XONIGHT E-Commerce", "CPH2373", "K10", "Black Carbon")
        $(".pro-buy-details").show();
    })
    $("#tre-9").click(function () {
        fn_hide();
        products_details("./img/phones/pro_9.webp", "REDMI 10", "4.4", "1,13,452 Ratings &  58,524 Reviews", "10999", "14999", "64", "128", "4", "6", "Akshnav Online", "MZB0B6OIN", "10", "Pacific Blue")
        $(".pro-buy-details").show();
    })
    $("#tre-10").click(function () {
        fn_hide();
        products_details("./img/phones/pro_10.webp", "MOTOROLA G60", "4.2", "1,81,564 Ratings &  82,456 Reviews", "14999", "21999", "32", "64", "4", "8", "TREASURE HAUL ONLINE", "PANB0023IN", "G60", "Moonless")
        $(".pro-buy-details").show();
    })
    $("#tre-11").click(function () {
        fn_hide();
        products_details("./img/phones/pro_11.webp", "MOTOROLA e40", "4.1", "1,36,148 Ratings &  23,125 Reviews", "9999", "10999", "32", "64", "4", "8", "TREASURE HAUL ONLINE", "PARL0010IN", "e40", "Carbon Gray")
        $(".pro-buy-details").show();
    })
    $("#tre-12").click(function () {
        fn_hide();
        products_details("./img/phones/pro_12.webp", "REDMI Note 10T 5G", "4.3", "1,39,100 Ratings &  18,421 Reviews", "13999", "18999", "64", "128", "4", "6", "Akshnav Online", "MZB09DZIN", "Note 10T 5G", "Metallic Blue")
        $(".pro-buy-details").show();
    })

    // apple products
    $("#apple-1").click(function () {
        fn_hide();
        products_details("./img/phones/apple/iphone-11.webp", "APPLE iPhone 11", "4.6", "83,110 Ratings &  8,524 Reviews", "46999", "49999", "64", "128", "4", "8", "TrueComRetail", "MHDA3HN/A", "iPhone 11", "Black")
        $(".pro-buy-details").show();
    })
    $("#apple-2").click(function () {
        fn_hide();
        products_details("./img/phones/apple/iphone-12.webp", "APPLE iPhone 12", "4.6", "1,83,110 Ratings &  18,824 Reviews", "65499", "70900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJA3HN/A", "iPhone 12", "Black")
        $(".pro-buy-details").show();
    })
    $("#apple-3").click(function () {
        fn_hide();
        products_details("./img/phones/apple/apple-iphone-se.webp", "APPLE iPhone 11", "4.6", "1,67,110 Ratings &  82,554 Reviews", "46999", "49900", "64", "128", "4", "8", "SuperComNet", "MHDD3HN/A", "iPhone 11", "Red")
        $(".pro-buy-details").show();
    })
    $("#apple-4").click(function () {
        fn_hide();
        products_details("./img/phones/apple/apple-iphone-12-mini.webp", "APPLE iPhone 12", "4.6", "1,74,110 Ratings &  11,534 Reviews", "65499", "70900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJF3HN/A", "iPhone 12", "Green")
        $(".pro-buy-details").show();
    })
    $("#apple-5").click(function () {
        fn_hide();
        products_details("./img/phones/apple/iphone-13-mini.webp", "APPLE iPhone 13 Mini", "4.5", "1,110 Ratings &  124 Reviews", "74389", "79900", "256", "512", "4", "8", "NGIVR RETAILS", "MLK53HN/A", "iPhone 13 Mini", "Midnight")
        $(".pro-buy-details").show();
    })
    $("#apple-6").click(function () {
        fn_hide();
        products_details("./img/phones/apple/iphone-13-pro.webp", "APPLE iPhone 13 Pro Max", "4.6", "1,601 Ratings &  137 Reviews", "178900", "179900", "512", "1TB", "4", "8", "NGIVR RETAILS", "MLLL3HN/A", "iPhone 13 Pro Max", "Silver")
        $(".pro-buy-details").show();
    })
    $("#apple-7").click(function () {
        fn_hide();
        products_details("./img/phones/apple/iphone-13-pro-graphite.webp", "APPLE iPhone 13 Pro Max", "4.6", "1,601 Ratings &  137 Reviews", "178900", "179900", "512", "1TB", "4", "8", "NGIVR RETAILS", "MLLK3HN/A", "iPhone 13 Pro Max", "Graphite")
        $(".pro-buy-details").show();
    })
    $("#apple-8").click(function () {
        fn_hide();
        products_details("./img/phones/apple/apple-iphone-12-pro-max-gold.webp", "APPLE iPhone 12 Pro Max", "4.6", "1,83,110 Ratings &  18,524 Reviews", "148900", "149900", "256", "512", "4", "8", "SuperComNet", "MGDK3HN/A", "iPhone 12 Pro Max", "Gold")
        $(".pro-buy-details").show();
    })
    $("#apple-9").click(function () {
        fn_hide();
        products_details("./img/phones/apple/apple-iphone-12-pro-max-pacific-blue.webp", "APPLE iPhone 12 Pro Max", "4.6", "1,83,110 Ratings &  18,524 Reviews", "148900", "149900", "256", "512", "4", "8", "SuperComNet", "MGDF3HN/A", "iPhone 12 Pro Max", "Pacific Blue")
        $(".pro-buy-details").show();
    })
    $("#apple-10").click(function () {
        fn_hide();
        products_details("./img/phones/apple/iphone-13-starlight.webp", "APPLE iPhone 13", "4.6", "3,110 Ratings &  524 Reviews", "105400", "109900", "256", "512", "4", "8", "NGIVR RETAILS", "MLQD3HN/A", "iPhone 13", "Starlight")
        $(".pro-buy-details").show();
    })
    $("#apple-11").click(function () {
        fn_hide();
        products_details("./img/phones/apple/iphone-12-mini-purple.webp", "APPLE iPhone 12 Mini", "4.5", "3,110 Ratings &  124 Reviews", "64999", "74900", "128", "256", "4", "8", "NGIVR RETAILS", "MJQH3HN/A", "iPhone 12 Mini", "Purple")
        $(".pro-buy-details").show();
    })
    $("#apple-12").click(function () {
        fn_hide();
        products_details("./img/phones/apple/apple-iphone-12-mini-red.webp", "APPLE iPhone 12 Mini", "4.5", "3,110 Ratings &  124 Reviews", "64999", "74900", "128", "256", "4", "8", "NGIVR RETAILS", "MGEC3HN/A", "iPhone 12 Mini", "Red")
        $(".pro-buy-details").show();
    })
    // end apple products

    // realme products
    $("#realme-1").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-9-Meteor-Black.webp", "Realme 9 5G", "4.2", "1,83,110 Ratings &  18,524 Reviews", "12999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MOSYDGD", "realme 9", "Meteor Black")
        $(".pro-buy-details").show();
    })
    $("#realme-2").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-9i-Prism-Blue.webpp", "Realme 9i", "4.44", "1,83,110 Ratings &  18,524 Reviews", "15999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MORYDGD", "realme 9i", "Prism Blue")
        $(".pro-buy-details").show();
    })
    $("#realme-3").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-Narzo-50i-Carbon-Black.webp", "Realme Narzo 50i", "4.44", "1,83,110 Ratings &  18,524 Reviews", "11999", "15999", "32", "64", "4", "8", "SuperComNet", "DGHFHGSF", "realme Narzo 50i", "Carbon Black")
        $(".pro-buy-details").show();
    })
    $("#realme-4").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-C35-Glowing-Black.webp", "Realme C35", "4.44", "1,83,110 Ratings &  18,524 Reviews", "18999", "21999", "32", "64", "4", "8", "SuperComNet", "FBFSJFF", "realme C35", "Glowing Black")
        $(".pro-buy-details").show();
    })
    $("#realme-5").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-C31-Dark-Green.webp", "Realme C31", "4.44", "1,83,110 Ratings &  18,524 Reviews", "24999", "29999", "32", "64", "4", "8", "NGIVR RETAILS", "NBFHSAF", "realme C31", "Dark Green")
        $(".pro-buy-details").show();
    })
    $("#realme-6").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-9-Pro-Aurora-Green.webp", "Realme 9 Pro+ 5G", "4.44", "1,83,110 Ratings &  18,524 Reviews", "28999", "29999", "32", "64", "4", "8", "SuperComNet", "FNMBSFH", "realme 9 Pro+ 5G", "Aurora Green")
        $(".pro-buy-details").show();
    })
    $("#realme-7").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-Narzo-50i-Carbon-Black.webp", "Realme Narzo 50i", "4.44", "1,83,110 Ratings &  18,524 Reviews", "11999", "15999", "32", "64", "4", "8", "SuperComNet", "DGHFHGSF", "realme Narzo 50i", "Carbon Black")
        $(".pro-buy-details").show();
    })
    $("#realme-8").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-C31-Dark-Green.webp", "Realme C31", "4.44", "1,83,110 Ratings &  18,524 Reviews", "24999", "29999", "32", "64", "4", "8", "NGIVR RETAILS", "NBFHSAF", "realme C31", "Dark Green")
        $(".pro-buy-details").show();
    })
    $("#realme-9").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-C35-Glowing-Black.webp", "Realme C35", "4.44", "1,83,110 Ratings &  18,524 Reviews", "18999", "21999", "32", "64", "4", "8", "SuperComNet", "FBFSJFF", "realme C35", "Glowing Black")
        $(".pro-buy-details").show();
    })
    $("#realme-10").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-9-Meteor-Black.webp", "Realme 9 5G", "4.2", "1,83,110 Ratings &  18,524 Reviews", "12999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MOSYDGD", "realme 9", "Meteor Black")
        $(".pro-buy-details").show();
    })
    $("#realme-11").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-9-Pro-Aurora-Green.webp", "Realme 9 Pro+ 5G", "4.44", "1,83,110 Ratings &  18,524 Reviews", "28999", "29999", "32", "64", "4", "8", "SuperComNet", "FNMBSFH", "realme 9 Pro+ 5G", "Aurora Green")
        $(".pro-buy-details").show();
    })
    $("#realme-12").click(function () {
        fn_hide();
        products_details("./img/phones/realme/realme-9i-Prism-Blue.webpp", "Realme 9i", "4.44", "1,83,110 Ratings &  18,524 Reviews", "15999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MORYDGD", "realme 9i", "Prism Blue")
        $(".pro-buy-details").show();
    })
    // end realme products

    // Honor products
    $("#Honor-1").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-9N-Sapphire-Blue.webp", "Honor 9N", "4.2", "1,83,110 Ratings &  18,524 Reviews", "12999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MOSYDGD", "Honor 9N", "Sapphire Blue")
        $(".pro-buy-details").show();
    })
    $("#Honor-2").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-9i-Prestige-Gold.webp", "Honor 9i", "4.44", "1,83,110 Ratings &  18,524 Reviews", "15999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MORYDGD", "Honor 9i", "Prestige Gold")
        $(".pro-buy-details").show();
    })
    $("#Honor-3").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-8X-Blue.webp", "Honor 8X", "4.44", "1,83,110 Ratings &  18,524 Reviews", "11999", "15999", "32", "64", "4", "8", "SuperComNet", "DGHFHGSF", "Honor 8X", "Blue")
        $(".pro-buy-details").show();
    })
    $("#Honor-4").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-7A-Gold.webp", "Honor 7A", "4.44", "1,83,110 Ratings &  18,524 Reviews", "18999", "21999", "32", "64", "4", "8", "SuperComNet", "FBFSJFF", "Honor 7A", "Gold")
        $(".pro-buy-details").show();
    })
    $("#Honor-5").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-6X-Grey.webp", "Honor 6X", "4.44", "1,83,110 Ratings &  18,524 Reviews", "24999", "29999", "32", "64", "4", "8", "NGIVR RETAILS", "NBFHSAF", "Honor 6X", "Grey")
        $(".pro-buy-details").show();
    })
    $("#Honor-6").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-8C-Blue.webp", "Honor 8C", "4.44", "1,83,110 Ratings &  18,524 Reviews", "28999", "29999", "32", "64", "4", "8", "SuperComNet", "FNMBSFH", "Honor 8C", "Blue")
        $(".pro-buy-details").show();
    })
    $("#Honor-7").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-8X-Blue.webp", "Honor 8X", "4.44", "1,83,110 Ratings &  18,524 Reviews", "11999", "15999", "32", "64", "4", "8", "SuperComNet", "DGHFHGSF", "Honor 8X", "Blue")
        $(".pro-buy-details").show();
    })
    $("#Honor-8").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-6X-Grey.webp", "Honor 6X", "4.44", "1,83,110 Ratings &  18,524 Reviews", "24999", "29999", "32", "64", "4", "8", "NGIVR RETAILS", "NBFHSAF", "Honor 6X", "Grey")
        $(".pro-buy-details").show();
    })
    $("#Honor-9").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-9N-Sapphire-Blue.webp", "Honor 9N", "4.2", "1,83,110 Ratings &  18,524 Reviews", "12999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MOSYDGD", "Honor 9N", "Sapphire Blue")
        $(".pro-buy-details").show();
    })
    $("#Honor-10").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-8C-Blue.webp", "Honor 8C", "4.44", "1,83,110 Ratings &  18,524 Reviews", "28999", "29999", "32", "64", "4", "8", "SuperComNet", "FNMBSFH", "Honor 8C", "Blue")
        $(".pro-buy-details").show();
    })
    $("#Honor-11").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-7A-Gold.webp", "Honor 7A", "4.44", "1,83,110 Ratings &  18,524 Reviews", "18999", "21999", "32", "64", "4", "8", "SuperComNet", "FBFSJFF", "Honor 7A", "Gold")
        $(".pro-buy-details").show();
    })
    $("#Honor-12").click(function () {
        fn_hide();
        products_details("./img/phones/honor/Honor-9i-Prestige-Gold.webp", "Honor 9i", "4.44", "1,83,110 Ratings &  18,524 Reviews", "15999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MORYDGD", "Honor 9i", "Prestige Gold")
        $(".pro-buy-details").show();
    })
    // end Honor products

    // Micromax products
    $("#Micromax-1").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-Infinity-N12-Red-Velvet.webp", "Micromax Infinity N12", "4.6", "83,110 Ratings &  8,524 Reviews", "20999", "26999", "64", "128", "4", "8", "TrueComRetail", "GHDA3HN", "Infinity N12", "Red Velvet")
        $(".pro-buy-details").show();
    })
    $("#Micromax-2").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-Evok-Note-Champagne.webp", "Micromax Evok Note", "4.6", "1,83,110 Ratings &  18,824 Reviews", "29499", "25900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJA3HN/A", "Evok Note", "Champagne")
        $(".pro-buy-details").show();
    })
    $("#Micromax-3").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-1-Purple.webp", "Micromax IN", "4.6", "1,67,110 Ratings &  82,554 Reviews", "46999", "49900", "64", "128", "4", "8", "SuperComNet", "MHDD3A", "Micromax IN", "Purple")
        $(".pro-buy-details").show();
    })
    $("#Micromax-4").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-2C-Brown.webp", "Micromax IN 2C", "4.6", "1,74,110 Ratings &  11,534 Reviews", "25499", "30900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJF3HN", "Micromax IN 2C", "Brown")
        $(".pro-buy-details").show();
    })
    $("#Micromax-5").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-Note-1-Green.webp", "Micromax IN Note 1", "4.5", "1,110 Ratings &  124 Reviews", "24389", "29900", "256", "512", "4", "8", "NGIVR RETAILS", "MLK53HN", "Micromax IN Note 1", "Green")
        $(".pro-buy-details").show();
    })
    $("#Micromax-6").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-Note-2-Black.webp", "Micromax IN Note 2", "4.6", "1,601 Ratings &  137 Reviews", "28900", "29900", "64", "128", "4", "8", "NGIVR RETAILS", "MLLL3HN", "Micromax IN Note 2", "Black")
        $(".pro-buy-details").show();
    })
    $("#Micromax-7").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-1-Purple.webp", "Micromax IN", "4.6", "1,67,110 Ratings &  82,554 Reviews", "46999", "49900", "64", "128", "4", "8", "SuperComNet", "MHDD3A", "Micromax IN", "Purple")
        $(".pro-buy-details").show();
    })
    $("#Micromax-8").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-Note-2-Black.webp", "Micromax IN Note 2", "4.6", "1,601 Ratings &  137 Reviews", "28900", "29900", "64", "128", "4", "8", "NGIVR RETAILS", "MLLL3HN", "Micromax IN Note 2", "Black")
        $(".pro-buy-details").show();
    })
    $("#Micromax-9").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-Note-1-Green.webp", "Micromax IN Note 1", "4.5", "1,110 Ratings &  124 Reviews", "24389", "29900", "256", "512", "4", "8", "NGIVR RETAILS", "MLK53HN", "Micromax IN Note 1", "Green")
        $(".pro-buy-details").show();
    })
    $("#Micromax-10").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-Evok-Note-Champagne.webp", "Micromax Evok Note", "4.6", "1,83,110 Ratings &  18,824 Reviews", "29499", "25900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJA3HN/A", "Evok Note", "Champagne")
        $(".pro-buy-details").show();
    })
    $("#Micromax-11").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-IN-2C-Brown.webp", "Micromax IN 2C", "4.6", "1,74,110 Ratings &  11,534 Reviews", "25499", "30900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJF3HN", "Micromax IN 2C", "Brown")
        $(".pro-buy-details").show();
    })
    $("#Micromax-12").click(function () {
        fn_hide();
        products_details("./img/phones/micromax/Micromax-Infinity-N12-Red-Velvet.webp", "Micromax Infinity N12", "4.6", "83,110 Ratings &  8,524 Reviews", "20999", "269999", "64", "128", "4", "8", "TrueComRetail", "GHDA3HN", "Infinity N12", "Red Velvet")
        $(".pro-buy-details").show();
    })
    // end Micromax products

    // Samsung products
    $("#Samsung-1").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/samsung-galaxy-f13-waterfall-blue.webp", "SAMSUNG Galaxy F13", "4.6", "83,110 Ratings &  8,524 Reviews", "20999", "269999", "64", "128", "4", "8", "TrueComRetail", "GHDA3HN", "Galaxy F13", "Waterfall Blue")
        $(".pro-buy-details").show();
    })
    $("#Samsung-2").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-S21-White.webp", "SAMSUNG Galaxy S21 FE 5G", "4.6", "1,83,110 Ratings &  18,824 Reviews", "29499", "25900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJA3HN/A", "Galaxy S21", "White")
        $(".pro-buy-details").show();
    })
    $("#Samsung-3").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-F23-Copper-Blush.webp", "SAMSUNG Galaxy F23 5G", "4.6", "1,67,110 Ratings &  82,554 Reviews", "46999", "49900", "64", "128", "4", "8", "SuperComNet", "MHDD3A", "Galaxy F23", "Copper Blush")
        $(".pro-buy-details").show();
    })
    $("#Samsung-4").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-A73-Awesome-White.webp", "SAMSUNG Galaxy A73 5G", "4.6", "1,74,110 Ratings &  11,534 Reviews", "25499", "30900", "128", "256", "4", "8", "TREASURE HAUL ONLINE", "MGJF3HN", "Galaxy A73", "Awesome White")
        $(".pro-buy-details").show();
    })
    $("#Samsung-5").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-A33-Awesome-Black.webp", "SAMSUNG Galaxy A33", "4.5", "1,110 Ratings &  124 Reviews", "24389", "29900", "256", "512", "4", "8", "NGIVR RETAILS", "MLK53HN", "Galaxy A33", "Awesome Black")
        $(".pro-buy-details").show();
    })
    $("#Samsung-6").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-A73-Awesome-Mint.webp", "SAMSUNG Galaxy A73 5G", "4.6", "1,601 Ratings &  137 Reviews", "28900", "29900", "64", "128", "4", "8", "NGIVR RETAILS", "MLLL3HN", "Galaxy A73", "Awesome Mint")
        $(".pro-buy-details").show();
    })
    $("#Samsung-7").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-M32-Light-Blue.webp", "SAMSUNG Galaxy M32", "4.6", "1,601 Ratings &  137 Reviews", "28900", "29900", "64", "128", "4", "8", "NGIVR RETAILS", "MLLK3HN", "Galaxy M32", "Light Blue")
        $(".pro-buy-details").show();
    })
    $("#Samsung-8").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-M52-Icy-Blue.webp", "SAMSUNG Galaxy M52 5G", "4.6", "1,83,110 Ratings &  18,524 Reviews", "48900", "49900", "256", "512", "4", "8", "SuperComNet", "MGDK3HN/A", "Galaxy M52", "Icy Blue")
        $(".pro-buy-details").show();
    })
    $("#Samsung-9").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-F13-Nightsky-Green.webp", "SAMSUNG Galaxy F13", "4.6", "1,83,110 Ratings &  18,524 Reviews", "38900", "39900", "256", "512", "4", "8", "SuperComNet", "MGDF3HN/A", "Galaxy F13", "Nightsky Green")
        $(".pro-buy-details").show();
    })
    $("#Samsung-10").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-S21-FE-Olive.webp", "SAMSUNG Galaxy S21 FE 5G", "4.6", "3,110 Ratings &  524 Reviews", "25400", "29900", "256", "512", "4", "8", "NGIVR RETAILS", "MLQD3HN/A", "Galaxy S21", "Olive")
        $(".pro-buy-details").show();
    })
    $("#Samsung-11").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/samsung-galaxy-f13-waterfall-blue.webp", "SAMSUNG Galaxy A33", "4.5", "3,110 Ratings &  124 Reviews", "24999", "25900", "128", "256", "4", "8", "NGIVR RETAILS", "MJQH3HN/A", "Galaxy A33", "Awesome Blue")
        $(".pro-buy-details").show();
    })
    $("#Samsung-12").click(function () {
        fn_hide();
        products_details("./img/phones/samsung/SAMSUNG-Galaxy-S21-FE-Graphite.webp", "SAMSUNG Galaxy S21 FE 5G", "4.5", "3,110 Ratings &  124 Reviews", "24999", "25900", "128", "256", "4", "8", "NGIVR RETAILS", "MGEC3HN/A", "Galaxy S21", "Graphite")
        $(".pro-buy-details").show();
    })
    // end Samsung products

    // Xiaomi products
    $("#Xiaomi-1").click(function () {
        fn_hide();
        products_details("./img/phones/mi/redmi-9a-sport-9a-metallic-blue.webp", "Redmi 9A Sport", "4.2", "1,83,110 Ratings &  18,524 Reviews", "12999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MOSYDGD", "Redmi 9A", "Metallic Blue")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-2").click(function () {
        fn_hide();
        products_details("./img/phones/mi/REDMI-10A-Slate-grey.webp", "REDMI 10A", "4.44", "1,83,110 Ratings &  18,524 Reviews", "15999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MORYDGD", "Redmi 10A", "Slate grey")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-3").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Redmi-Note-11-Space-Black.webp", "Redmi Note 11", "4.44", "1,83,110 Ratings &  18,524 Reviews", "11999", "15999", "32", "64", "4", "8", "SuperComNet", "DGHFHGSF", "Redmi NOTE 11", "Space Black")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-4").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Redmi-Note-11S-Space-Black.webp", "Redmi Note 11S", "4.44", "1,83,110 Ratings &  18,524 Reviews", "18999", "21999", "32", "64", "4", "8", "SuperComNet", "FBFSJFF", "Redmi NOTE 11S", "Space Black")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-5").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Xiaomi-11T-Pro-Hyperphone-Moonlight-White.webp", "Xiaomi 11T Pro 5G Hyperphone", "4.44", "1,83,110 Ratings &  18,524 Reviews", "24999", "29999", "32", "64", "4", "8", "NGIVR RETAILS", "NBFHSAF", "Xiaomi 11T", "Moonlight White")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-6").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Redmi-Note-11-PRO-Plus-PHANTOM-WHITE.webp", "Redmi Note 11 PRO Plus 5G", "4.44", "1,83,110 Ratings &  18,524 Reviews", "28999", "29999", "32", "64", "4", "8", "SuperComNet", "FNMBSFH", "Xiaomi 11T", "PHANTOM WHITE")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-7").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Xiaomi-11T-Pro-Hyperphone-Moonlight-White.webp", "Xiaomi 11T Pro 5G Hyperphone", "4.44", "1,83,110 Ratings &  18,524 Reviews", "24999", "29999", "32", "64", "4", "8", "NGIVR RETAILS", "NBFHSAF", "Xiaomi 11T", "Moonlight White")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-8").click(function () {
        fn_hide();
        products_details("./img/phones/mi/redmi-9a-sport-9a-metallic-blue.webp", "Redmi 9A Sport", "4.2", "1,83,110 Ratings &  18,524 Reviews", "12999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MOSYDGD", "Redmi 9A", "Metallic Blue")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-9").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Redmi-Note-11-PRO-Plus-PHANTOM-WHITE.webp", "Redmi Note 11 PRO Plus 5G", "4.44", "1,83,110 Ratings &  18,524 Reviews", "28999", "29999", "32", "64", "4", "8", "SuperComNet", "FNMBSFH", "Xiaomi 11T", "PHANTOM WHITE")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-10").click(function () {
        fn_hide();
        products_details("./img/phones/mi/REDMI-10A-Slate-grey.webp", "REDMI 10A", "4.44", "1,83,110 Ratings &  18,524 Reviews", "15999", "19999", "32", "64", "4", "8", "NGIVR RETAILS", "MORYDGD", "Redmi 10A", "Slate grey")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-11").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Redmi-Note-11S-Space-Black.webp", "Redmi Note 11S", "4.44", "1,83,110 Ratings &  18,524 Reviews", "18999", "21999", "32", "64", "4", "8", "SuperComNet", "FBFSJFF", "Redmi NOTE 11S", "Space Black")
        $(".pro-buy-details").show();
    })
    $("#Xiaomi-12").click(function () {
        fn_hide();
        products_details("./img/phones/mi/Redmi-Note-11-Space-Black.webp", "Redmi Note 11", "4.44", "1,83,110 Ratings &  18,524 Reviews", "11999", "15999", "32", "64", "4", "8", "SuperComNet", "DGHFHGSF", "Redmi NOTE 11", "Space Black")
        $(".pro-buy-details").show();
    })
    // end Xiaomi products

    function fn_hide() {
        $("#login_page").hide();
        $("#register_page").hide();
        $(".img-scroll").hide();
        $(".xiaomi-sec").hide();
        $(".apple-sec").hide();
        $(".realme-sec").hide();
        $(".micromax-sec").hide();
        $(".samsung-sec").hide();
        $(".honor-sec").hide();
        $(".home-page").hide();
        $(".cart-section").hide();


    }

    function products_details(pro_img, pro_name, rate_star, rate_no, pro_price, old_pro_price, phone_storage_1, phone_storage_2, phone_ram_1, phone_ram_2, pro_seller, model_number, model_name, pro_color) {
        $("#pro_name").text(pro_name);
        document.getElementById("pro_img").src = pro_img;
        $("#rate_star").text(rate_star);
        $("#rate_no").text(rate_no);
        $("#pro_price").text(pro_price);
        $("#old_pro_price").text(old_pro_price);
        var pro_offer = ((old_pro_price - pro_price) / old_pro_price) * 100;
        $("#pro_offer").text(pro_offer.toFixed(1) + "% off");
        $("#phone_storage_1").text(phone_storage_1);
        $("#phone_storage_2").text(phone_storage_2);
        $("#phone_ram_1").text(phone_ram_1);
        $("#phone_ram_2").text(phone_ram_2);
        $("#pro_seller").text(pro_seller);
        $("#model_number").text(model_number);
        $("#model_name").text(model_name);
        $("#pro_color").text(pro_color);

    }
    let cart_number = 0;
    let total_amount=0;
    let price_amount=0;
    let discount_amount=0;
    $("#cart-btn").click(function () {
        cart_number = cart_number + 1;
        var product_img = document.getElementById("pro_img").src;
        var product_name = document.getElementById("pro_name").textContent;
        var product_color = document.getElementById("pro_color").textContent;
        var product_new_price = Number(document.getElementById("pro_price").textContent);
        var product_old_price = Number(document.getElementById("old_pro_price").textContent);
        if (cart_number < 6) {
            total_amount=total_amount+product_new_price;
            price_amount=price_amount+product_old_price;
            discount_amount=discount_amount+(product_old_price-product_new_price);
            $(".empty-cart").hide()
            
            document.getElementById("cart-img" + cart_number).src = product_img;
            $("#cart_pro_name" + cart_number).text(product_name)
            $("#cart_pro_color" + cart_number).text(product_color)
            $("#cart_pro_old_price" + cart_number).text(product_old_price)
            $("#cart_pro_new_price" + cart_number).text(product_new_price)
            $("#price-amount").text("₹"+price_amount)
            $("#discount-amount").text("- ₹"+discount_amount)
            $("#total-amount").text("₹"+total_amount)
            $(".modal-body").text("Successfully added to cart")
        } else {
            $(".modal-body").text("Cart is full")
        }
    })
})
