var arrayTablePages = [];

$(document).ready(function () {
    showTableItemCart();

    changeValueInput();

    clickRemoveItem();
});

function clickRemoveItem() {
    $(document).on('click', '.item_icon--remove', function () {
        let arrItemRemove = [];
        arrItemRemove = JSON.parse(localStorage.getItem("id-item--cart"));


        let idx = arrItemRemove.findIndex(obj => obj.id === $(this).attr('data--id'));
        arrItemRemove.splice(idx, 1);

        localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));

        arrayItemCartInfo = [];
        showItemCart();

        arrayTablePages = [];
        showTableItemCart();
    })
}

function changeValueInput() {
    $(document).on('change', '.input--value', function () {
        let countProducts = JSON.parse(localStorage.getItem('id-item--cart'));
        let idx = countProducts.findIndex(obj => obj.id == $(this).attr('data--id'));
        countProducts[idx].count = parseInt($(this).val());

        localStorage.setItem('id-item--cart', JSON.stringify(countProducts));

        arrayTablePages = [];
        showTableItemCart();
        showInfoCheck();
    });
}

function loadCartTable(id) {
    var url = "http://localhost:3000/products/"+id+"";
    axios.get(url)
        .then(function (res) {
            // handle success
            arrayTablePages.push(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            layoutTable();
        });
}

function layoutTable() {
    let content = '';
    let countProducts = JSON.parse(localStorage.getItem('id-item--cart'));
    let total = 0;

    for (let c of countProducts) {
        for (let d of arrayTablePages) {
            if (c.id == parseInt(d.id)) {
                content += '<tr>\n' +
                    '                <td class="text-center"><img class="img-fluid" src="'+d.path+'" alt="product-bought"></td>\n' +
                    '                <td class="text-uppercase text-center">\n' +
                    '                  <div class="table--item content--cart"><span>'+d.titleGrid+'</span></div>\n' +
                    '                </td>\n' +
                    '                <td class="text-center">\n' +
                    '                  <div class="table--item"><span>'+d.price+'đ</span></div>\n' +
                    '                </td>\n' +
                    '                <td class="text-center">\n' +
                    '                  <div class="table--item">\n' +
                    '                    <input class="input--value" data--id="'+c.id+'" type="number" value="'+c.count+'">\n' +
                    '                  </div>\n' +
                    '                </td>\n' +
                    '                <td class="text-center">\n' +
                    '                  <div class="table--item"><span>'+(c.count * d.price)+'.000đ</span></div>\n' +
                    '                </td>\n' +
                    '                <td>\n' +
                    '                  <div class="table--item text-center"><img data--id="'+c.id+'" class="item_icon--remove" src="./images/Shopping-cart/remove--icon.png" alt="remove-icon"></div>\n' +
                    '                </td>\n' +
                    '              </tr>';

                total += (c.count * d.price);
            }
        }
    }
    localStorage.setItem('total-price', JSON.stringify(total));

    $('.tinfo_cart').html(content);
}

function showTableItemCart() {
    let arrItemCart = JSON.parse(localStorage.getItem("id-item--cart"));

    if (arrItemCart != null) {
        for (var idx of arrItemCart) {
            loadCartTable(idx.id);
        }
    }
}

