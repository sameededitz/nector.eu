$(document).ready(function () {
    $('.accord-title').click(function (e) {
        e.preventDefault();
        let $this = $(this);
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.accord-contant').removeClass('show');
            $this.parent().parent().find('.accord-contant').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
});


$(document).ready(function () {
    $(".tablinks").on("click", function () {
        var tabName = $(this).data("tab");
        var tabContent = $("#" + tabName);
        var allTabContent = $(".tabcontent");
        var allTabButtons = $(".tablinks");

        allTabContent.hide();

        allTabButtons.removeClass("b-active");

        tabContent.show();
        $(this).addClass("b-active");
    });

    $(".tablinks:first").click();
});


$(document).ready(function () {
    var passIcnHid = $('.pass-icn-hid')
    passIcnHid.hide();

    $('.pass-togle').on("click", function () {
        event.preventDefault();

        var targetId = $(this).data("target")
        var passwordInput = $('#' + targetId)
        var passIconHid = $(this).find('.eyeClosed')
        var passIconOn = $(this).find('.eyeOpen')
        var CurrentInType = passwordInput.attr("type")

        passwordInput.attr("type", CurrentInType === "password" ? "text" : "password");

        if(CurrentInType === "password"){
            passIconOn.hide();
            passIconHid.show();
        }else{
            passIconOn.show();
            passIconHid.hide();
        }
    })
});


$(document).ready(function () {
    $('.fu-tab').on('click',function () {
        var ftabName = $(this).data("tab")
        var ftabcontent = $("#" + ftabName)
        var fAlltabContent = $(".ftabcontent")
        var fAlltablinks = $(".fu-tab")

        fAlltabContent.hide();

        fAlltablinks.removeClass("f-active")

        ftabcontent.show();
        $(this).addClass("f-active")
    })
    $(".fu-tab:first").click();
})