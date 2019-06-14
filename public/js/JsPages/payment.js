$(document).ready(function () {
    var form = $("#example-basic");

    form.children('div').steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
        transitionEffectSpeed: 300,
        autoFocus: true,
        labels: {
            finish: "Finish",
            next: "Forward",
            previous: "Backward"
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if (currentIndex > newIndex)
            {
                return true;
            }
            let items = JSON.parse(localStorage.getItem('id-item--cart'));
            if (items.length <= 0) {
                alert("You don't have any items");
                return false;
            }

            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert('Submitted');
            localStorage.removeItem('customer');
            localStorage.removeItem('id-item--cart');
            localStorage.removeItem('total-price');

            location.href = "/FE22_Madala/payment.html";
        }
    });

    // Custom steps
    $('.wizard > .steps li').click(function(){
        $(this).addClass('checked');
        $(this).nextAll().removeClass('checked');
        $(this).prevAll().addClass('checked');
    });

    infoCustomer();
});

function showInfoCheck() {
    let dataCheck = JSON.parse(localStorage.getItem('customer'));
    let total = JSON.parse(localStorage.getItem('total-price'));

    if(!dataCheck.note) dataCheck.note = 'Không có ghi chú nào !!';

    let content = '<p><b>Tên: &nbsp;</b>'+dataCheck.name+'</p>\n' +
        '        <p><b>Sdt: &nbsp;</b>'+dataCheck.phone+'</p>\n' +
        '        <p><b>Địa chỉ: &nbsp;</b>'+dataCheck.address+'</p>\n' +
        '        <p><b>Ghi chú: &nbsp;</b>'+dataCheck.note+'</p>\n' +
        '        <p class="mb-5"><b>Tổng Tiền: &nbsp;</b>'+parseInt(total)+'.000<sup>đ</sup></p>';

    $('.cart_check--info').html(content);
}

function infoCustomer() {
    let customerData = {};

    $('#name').change(function () {
        let name = $(this).val();
        customerData.name = name;
        localStorage.setItem('customer', JSON.stringify(customerData));

        showInfoCheck();
    });
    $('#phone').change(function () {
        let phone = $(this).val();
        customerData.phone = phone;
        localStorage.setItem('customer', JSON.stringify(customerData));

        showInfoCheck();
    });
    $('#address').change(function () {
        let address = $(this).val();
        customerData.address = address;
        localStorage.setItem('customer', JSON.stringify(customerData));

        showInfoCheck();
    });
    $('#note').change(function () {
        let note = $(this).val();
        customerData.note = note;
        localStorage.setItem('customer', JSON.stringify(customerData));

        showInfoCheck();
    });
}