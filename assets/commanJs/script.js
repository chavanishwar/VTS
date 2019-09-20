validateNumber = function ($this, event, text) { 
    var regex = new RegExp("^[0-9]+$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $this[0].selectionStart == $this[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                   // $this.val(text);
                }
            }
        }
        if (notAllowed) {
            event.preventDefault();
        } //else { }

    }//else if(regex.test(str)){ $this.val(text)} 
}
$(document).on('keypress', '.validate-number', function (event) { var $this = $(this); validateNumber($this, event); });
$(document).on('paste', '.validate-number', function (event) {
    var $this = $(this), text = (event.originalEvent.clipboardData.getData('text/plain')).trim();
    if (text && text.length) { text.split('').forEach(function (data) { validateNumber($this, event, text); }); }
});

validateDecimalNumber = function ($this, event, text) {
    var regex = new RegExp("^[0-9.]+$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $this[0].selectionStart == $this[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                }
            }
        }
        if (notAllowed) {
            event.preventDefault();
        }
    }
    if (str == '.' && (number.toString().indexOf('.') > 0 || number.length == 0)) {
        event.preventDefault();
    }
    if (!isNaN(str) && number.toString().indexOf('.') > 0) {
        var decimal = number.toString().split('.');
        if (decimal[1].length >= 3) {
            event.preventDefault();
        }
    }
}
$(document).on('keypress', '.validate-decimal-number', function (event) { var $this = $(this); validateDecimalNumber($this, event); });
$(document).on('paste', '.validate-decimal-number', function (event) {
    var $this = $(this), text = event.originalEvent.clipboardData.getData('text/plain');
    if (text && text.length) { text.split('').forEach(function (data) { validateDecimalNumber($this, event, text); }); }
});

function ValidateIpAddress($this, event, text) {
    var regex = new RegExp("^[0-9.]+$");////
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $this[0].selectionStart == $this[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                }
            }
        }
        if (notAllowed) {
            event.preventDefault();
        }
    }
    if (str == '.' && (number.toString().indexOf('.') > 4 || number.length == 0)) {
        event.preventDefault();
    }
    //if (!isNaN(str) && number.toString().indexOf('.') > 0) {
    //    var decimal = number.toString().split('.');
    //    if (decimal[1].length >= 2) {
    //        event.preventDefault();
    //    }
    //}
}
$(document).on('keypress', '.validate-ipaddress', function (event) { var $this = $(this); ValidateIpAddress($this, event); });
$(document).on('paste', '.validate-ipaddress', function (event) {
    var $this = $(this), text = event.originalEvent.clipboardData.getData('text/plain');
    if (text && text.length) { text.split('').forEach(function (data) { ValidateIpAddress($this, event, text); }); }
});


validateQuantity = function ($this, event, text) {
    var regex = new RegExp("^[0-9.]+$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $this[0].selectionStart == $this[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                }
            }
        }
        if (notAllowed) {
            event.preventDefault();
        }
    }
    if (str == '.' && (number.toString().indexOf('.') > 0 || number.length == 0)) { event.preventDefault(); }
    if (!isNaN(str) && number.toString().indexOf('.') < 0 && number.length == 2) { event.preventDefault(); }
    if (!isNaN(str) && number.toString().indexOf('.') > 0) {
        var decimal = number.toString().split('.');
        if (decimal[1].length >= 2) {
            event.preventDefault();
        }
    }
}
$(document).on('keypress', '.validate-quantity', function (event) { var $this = $(this); validateQuantity($this, event); });
$(document).on('paste', '.validate-quantity', function (event) {
    event.preventDefault();
    //var $this = $(this), text = event.originalEvent.clipboardData.getData('text/plain');
    //if (text && text.length) { text.split('').forEach(function (data) { validateQuantity($this, event, text); }); }
});

validateLatlong = function ($this, e, text) {
    
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!e.charCode ? e.which : e.charCode);
    //var charCode = !event.charCode ? event.which : event.charCode;
   // if (e.keyCode == 32 || e.keyCode != 8 && isNaN(str) && e.keyCode != 46) { e.preventDefault(); }
   
     if (navigator.userAgent.search("Chrome") == -1) {
         if (e.keyCode !==8) {
             if (e.charCode == 32 || (e.charCode != 8 || e.keyCode != 8) && isNaN(str) && e.charCode != 46) { e.preventDefault(); }
             else if (length >= limit && limit > 0) { e.preventDefault(); }
             if (e.charCode != 46 && length >= 2 && number.toString().indexOf('.') < 0) { e.preventDefault(); }
             if (e.charCode == 46 && number.toString().indexOf('.') > 0) { e.preventDefault(); }
         }
    }
    else {
         if (e.keyCode == 32 || e.keyCode != 8 && isNaN(str) && e.keyCode != 46) { e.preventDefault(); }
         else if (length >= limit && limit > 0) { e.preventDefault(); }
    if (e.keyCode != 46 && length >= 2 && number.toString().indexOf('.') < 0) { e.preventDefault(); }
    if (e.keyCode == 46 && number.toString().indexOf('.') > 0) { e.preventDefault(); }
    }
    if (!isNaN(str) && number.toString().indexOf('.') > 0) {
        var decimal = number.toString().split('.');
        //if (decimal[1].length >= 8) {
        //    event.preventDefault();
        //}
    }
}
$(document).on('keypress', '.validate-latlong', function (e) {
    var $this = $(this); validateLatlong($this, e);
});
$(document).on('paste', '.validate-latlong', function (event) {
    var $this = $(this), text = event.originalEvent.clipboardData.getData('text/plain');
    if (text && text.length) { text.split('').forEach(function (data) { validateLatlong($this, event, text); }); }
});
validateLength = function ($this, event, text) {
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (length >= limit && limit > 0) { event.preventDefault(); }
}
$(document).on('keypress', '.validate-length', function (event) { var $this = $(this); validateLength($this, event); });
$(document).on('paste', '.validate-length', function (event) {
    var $this = $(this), text = event.originalEvent.clipboardData.getData('text/plain');
    if (text && text.length) { text.split('').forEach(function (data) { validateLength($this, event, text); }); }
});
validateAlphanumeric = function ($this, event, text) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $this[0].selectionStart == $this[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                }
            }
        }
        if (notAllowed) { event.preventDefault(); }
    }
    // $this.css('text-transform', 'uppercase');
}
$(document).on('keypress', '.validate-alphanumeric', function (event) { var $this = $(this); validateAlphanumeric($this, event); });
$(document).on('paste', '.validate-alphanumeric', function (event) {
    var $this = $(this), text = event.originalEvent.clipboardData.getData('text/plain');
    if (text && text.length) { text.split('').forEach(function (data) { validateAlphanumeric($this, event, text); }); }
});
validateAlphabets = function ($this, event, text) {    
    var regex = new RegExp("^[a-zA-Z ]+$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $this[0].selectionStart == $this[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'" || str == ' ' && number[$this[0].selectionStart - 1] != ' ' && $this[0].selectionStart == $this[0].selectionEnd && length < limit - 1 && length > 0) {
                    notAllowed = false;
                }
            }
        }
        if (notAllowed) {
            event.preventDefault();
        }
    }
    $this.css('text-transform', 'capitalize');
}
$(document).on('keypress', '.validate-alphabets', function (event) { var $this = $(this); validateAlphabets($this, event); });
$(document).on('paste', '.validate-alphabets', function (event) {
      var $this = $(this), text = (event.originalEvent.clipboardData.getData('text/plain')).trim();
    if (text && text.length) { text.split('').forEach(function (data) { validateAlphabets($this, event, text); }); }
});
validateAlphabetsWoSpace = function ($this, event, text) {     
    var regex = new RegExp("^[a-zA-Z ]+$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = typeof text != 'undefined' && text.length ? text : String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $this.val();
    var length = number.length;
    var limit = parseInt($this.attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $this[0].selectionStart == $this[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                }
            }
        }
        if (notAllowed) {
            event.preventDefault();
        }
    }
    $this.css('text-transform', 'uppercase');
}
$(document).on('keypress', '.validate-alphabetsWoSpace', function (event) { var $this = $(this); validateAlphabetsWoSpace($this, event); });
$(document).on('paste', '.validate-alphabetsWoSpace', function (event) {
    var $this = $(this), text = event.originalEvent.clipboardData.getData('text/plain');
    if (text && text.length) { text.split('').forEach(function (data) { validateAlphabetsWoSpace($this, event, text); }); }
});


$(document).on('keypress', '.validate-password', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9@$!%*#?&]+$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $(this).val();
    var length = number.length;
    var limit = parseInt($(this).attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $(this)[0].selectionStart == $(this)[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                }
            }
        }
        if (notAllowed) {
            event.preventDefault();
        }
    }
    $(this).css('text-transform', 'uppercase');
});
$(document).on('paste', '.validate-password', function (e) { e.preventDefault(); e.stopPropagation(); });
isValidPassword = function (password) {
    if (typeof password == 'string' && password.length) {
        if (password.length >= 8) {
            if (/[A-Z]/.test(password)) {
                if (/[0-9]/.test(password)) {
                    if (/[@$!%*#?&]/.test(password)) {
                        return true;
                    } return 'Password should have at least 1 special character(@$!%*#?&).';
                } return 'Password should have at least 1 number(0-9).';
            } return 'Password should have at least 1 capital alphabet(A-Z).';
        } return 'Password should have at least 8 characters.';
    } return false;
}
$(document).on('paste', '.fromDate, .toDate, .UpToTodaysDate, .Date, .periodFrom, .periodTo', function (e) { e.preventDefault(); e.stopPropagation(); });
$(document).on('keydown', '.fromDate, .toDate,.UpToTodaysDate, .Date, .periodFrom, .periodTo', function (event) {
    var notAllowed = true;
    if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
        if (event.keyCode == '9' && event.keyCode != '0') {
            notAllowed = false;
        }
    }
    if (notAllowed) {
        event.preventDefault();
    }
    if ((event.keyCode == '8' || event.keyCode == '46') && $(this).hasClass('eDate')) {
        $(this).val('');
    }
});
$(document).on('keypress', '.validate-email', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9@._]+$");
    var character = new RegExp("^[a-zA-Z]+$");
    var specialCharacter = new RegExp("^[.@_]+$");
    //var regex = new RegExp("^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$");
    var allowChar = ['8', '9', '37', '38', '39', '40', '46'];
    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var number = $(this).val();
    var length = number.length;
    var limit = parseInt($(this).attr('length')) || 0;
    if (!regex.test(str) || length >= limit && limit > 0 && $(this)[0].selectionStart == $(this)[0].selectionEnd) {
        var notAllowed = true;
        if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
            for (var i in allowChar) {
                if (allowChar[i] == event.keyCode && event.keyCode != '0' && str != '.' && str != "'") {
                    notAllowed = false;
                }
            }
        }
        if (str == "'") {
            notAllowed = true;
        }
        if (notAllowed) {
            event.preventDefault();
        }
    }
    else if (!character.test(str) && length == 0) {
        event.preventDefault();
    }
    else if (specialCharacter.test(str)) {
        if (specialCharacter.test(number[length - 1])) {
            event.preventDefault();
        }
        if (number.indexOf('@') > 0) {
            if (str == '@' || str == '_') {
                event.preventDefault();
            }
            var text2 = number.split('@')[1];
            var count = text2.split('.').length - 1;
            if (count >= 2) {
                event.preventDefault();
            }
        }
    }
    else if (number.indexOf('@') > 0) {
        var text2 = number.split('@')[1];
        var count = text2.split('.').length - 1;
        if (count >= 1 && !character.test(str)) {
            event.preventDefault();
        }
    }
    $(this).css('text-transform', 'lowercase');
});
checkEmail = function (email) {
    if (email.indexOf('@') >= 0) {
        var text2 = email.split('@')[1];
        if (text2.indexOf('.') >= 0) {
            var dotFind = text2.split('.');
            for (var i in dotFind) {
                if (dotFind[i].length < 2) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}
$(document).on('blur', '.validate-GSTIN', function (e) {
    
    var value = $(this).val();
    //let GSTINFormat = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    var GSTINFormat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');

    if (value) {
        if (value.match(GSTINFormat)) { return true; } else { alert("You have entered an invalid GST No!"); $this.val(''); return false; }



    }

})
$(document).on('blur', '.validateEmail', function (event) {
    var $this = $(this);
    var text = $(this).val();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (text) {
        if (text.match(mailformat)) { return true; } else { loading("You have entered an invalid email address!", false); $this.val(''); return false; }
    } else { }

})
