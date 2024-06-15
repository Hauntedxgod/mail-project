document.addEventListener("DOMContentLoaded", function () {
   let btns = Array.from(document.getElementsByClassName('accordeon__button'));
    btns.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
            evt.preventDefault();
            let section = btn.closest("div")
            if (!section.classList.contains('accordeon__section--current')) {
                section.classList.add('accordeon__section--current');
                section.setAttribute('id', 'current');
            }
            else {
                section.classList.remove('accordeon__section--current');
                section.removeAttribute('id', 'current');
            }
        });
    });

    let sendAll = document.getElementById(['sendall']);
    sendAll.addEventListener('click', (evt) => {
        evt.preventDefault();

        let checked = document.getElementsByTagName("input");

        for (var i = 0, max = checked.length; i < max; i++){
            if (checked[i].type === 'checkbox')
                checked[i].checked = true;
        }
    })
  });


