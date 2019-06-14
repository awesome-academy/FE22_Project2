var arrayItemCartInfo = [];

$(document).ready(function () {
    showProducts();

    addItemCart();

    showItemCart();

    removeCartItem();
});

function getItemCart(id) {
    var url = "http://localhost:3000/products/"+id+"";
    axios.get(url)
        .then(function (res) {
            // handle success
            arrayItemCartInfo.push(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            renderCart();
        });
}

function renderCart() {
    let contentInfoCart = '';
    let total = 0;
    let totalAmount = 0;

    if (!arrayItemCartInfo) contentInfoCart = '';

    else {
        let arrItemCart = JSON.parse(localStorage.getItem("id-item--cart"));
        if (!arrItemCart) arrItemCart = {};

        if (arrItemCart) {
            for (var idx of arrItemCart) {
                totalAmount += idx.count;

                for (var item of arrayItemCartInfo) {

                    if (parseInt(idx.id) === parseInt(item.id)) {
                        total += (parseInt(item.price) * idx.count);
                        contentInfoCart += '<div class="item--sub--sub mt-lg-1 pt-lg-1 mt-2">\n' +
                            '      <div class="cart_item--show w-50"><span class="badge badge-pill badge-success">'+idx.count+'</span><img class="img-fluid" src="'+item.path+'" alt=""></div>\n' +
                            '      <div class="item--sub--sub--content"><span class="pl-2">'+item.titleGrid+'</span><span class="pl-2">'+item.price+'<sup>đ</sup></span></div><a href="#"><img class="cart-item--remove" value="'+item.id+'" src="./images/HOME/shopping-cart--icon--remove.png" alt=""></a>\n' +
                            '    </div>';
                    }
                }
            }
        }
    }

    let totalCart = '<span>Tổng số</span><span class="float-right">'+total+'.000<sup>đ</sup></span>';
    let contentAmount = '<img src="./images/HOME/shoppoing-cart.png" alt=""><span class="badge badge-pill badge-success">'+totalAmount+'</span>';


    $('.total--price').html(totalCart);
    $('.cart_item--sub').html(contentInfoCart);
    $('.show-amount-item').html(contentAmount);
}

function removeCartItem() {
    $(document).on('click','.cart-item--remove', function() {
        let arrItemRemove = [];
        arrItemRemove = JSON.parse(localStorage.getItem("id-item--cart"));


        let idx = arrItemRemove.findIndex(obj => obj.id === $(this).attr('value'));
        arrItemRemove.splice(idx, 1);

        localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));

        arrayItemCartInfo = [];
        showItemCart();

        arrayTablePages = [];
        showTableItemCart();
    });
}

function showItemCart() {
    let arrItemCart = JSON.parse(localStorage.getItem("id-item--cart"));

    if (arrItemCart) {
        if (arrItemCart.length <= 0) renderCart();
        else {
            for (var idx of arrItemCart) {
                getItemCart(idx.id);
            }
        }
    }
}

async function showProducts() {
    var url = "http://localhost:3000/products/";
    const res = await axios.get(url);
    loadData(res.data);
}

function addItemCart() {
    $(document).on('click','.btn--buy', function() {
        let countObject = JSON.parse(localStorage.getItem('id-item--cart'));

        if (!countObject) { // First Array Check Count Init
            countObject = [];
            countObject.push({id: $(this).val(), count: 1})
        }
        else { // Array Check Count exist
            let idx = countObject.findIndex(obj => obj.id === $(this).val()); // Get index of element in Array Check Count
            if (idx > -1) // Found element in Array Check Count
                countObject[idx].count += 1;
            else // Don't Found element in Array Check Count
                countObject.push({id: $(this).val(), count: 1})
        }
        localStorage.setItem('id-item--cart', JSON.stringify(countObject)); // Set LocalStorage for Array Check Count

        arrayItemCartInfo = [];
        showItemCart();
    });
}

function loadData(datas) {
    let listItem = '';
    for(var data of datas) {
        listItem += '<div class="item">\n' +
            '                    <div class="img-thumbnail"><img class="img-fluid p-4" src="'+data.path+'" alt="product 1"></div>\n' +
            '                    <div class="product_item--info text-center mt-3">\n' +
            '                      <div class="product--info--grid">\n' +
            '                        <h6>'+data.titleGrid+'</h6>\n' +
            '                        <h3 class="mb-4">'+data.contentGrid+'</h3>\n' +
            '                        <div class="product--price mb-3"><span>'+data.price+'<sup>đ</sup></span></div>\n' +
            '                        <div class="product--btn--buy pb-3">\n' +
            '                          <button class="btn btn-custom btn--buy" value="'+data.id+'">Mua hàng</button>\n' +
            '                          <button class="btn btn-custom ml-1"><img src="./images/HOME/heart.png" alt="heart"></button>\n' +
            '                          <button class="btn btn-custom ml-1"><img src="./images/HOME/reload.png" alt="reload"></button>\n' +
            '                        </div>\n' +
            '                      </div>\n' +
            '                      <div class="product--info--list">\n' +
            '                        <h3 class="pb-2">'+data.titleList+'</h3>\n' +
            '                        <div class="rating--like"><span><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i> ( 4 Lượt mua )</span>\n' +
            '                          <p class="pt-2">\n' +
            '                            '+data.contentList+'\n' +
            '                          </p>\n' +
            '                          <div class="product--price mb-3"><span>'+data.price+'<sup>đ</sup></span></div>\n' +
            '                          <div class="product--btn--buy pb-3">\n' +
            '                            <button class="btn btn-custom btn--buy" value="'+data.id+'">Mua hàng</button>\n' +
            '                            <button class="btn btn-custom ml-1"><img src="./images/HOME/heart.png" alt="heart"></button>\n' +
            '                            <button class="btn btn-custom ml-1"><img src="./images/HOME/reload.png" alt="reload"></button>\n' +
            '                          </div>\n' +
            '                        </div>\n' +
            '                      </div>\n' +
            '                    </div>\n' +
            '                  </div>';
    }

    $('#list-item_product').html(listItem)
}