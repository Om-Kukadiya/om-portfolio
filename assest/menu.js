document.getElementById('menu_btn_j').addEventListener('click', function() {
    var menu = document.getElementById('fields_of_menu_j');
    if (menu.classList.contains('unhidden_for_menu')) {
        menu.classList.remove('unhidden_for_menu');
    } else {
        menu.classList.add('unhidden_for_menu');
    }
});
