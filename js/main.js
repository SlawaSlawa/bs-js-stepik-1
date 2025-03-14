'use strict'

if (!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify([]))
}

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

document.querySelector('button.add_new').addEventListener('click', function(evt) {
    let name = document.getElementById('good_name').value
    let price = document.getElementById('good_price').value
    let count = document.getElementById('good_count').value

    if (name && price && count) {
        document.getElementById('good_name').value = ''
        document.getElementById('good_price').value = ''
        document.getElementById('good_count').value = '1'

        let goods = JSON.parse(localStorage.getItem('goods'))
        console.log(goods);
        goods.push(['good_'] + goods.length, name, price, count, 0, 0, 0)
        localStorage.setItem('goods', JSON.stringify(goods))
        // update_goods()
        myModal.hide()
    } else {
        Swal.fire({
            title: "Ошибка",
            text: "Заполните все поля!",
            icon: "error"
        })
    }
})