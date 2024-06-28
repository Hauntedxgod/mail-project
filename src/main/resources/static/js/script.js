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

    // let sendAll = document.getElementById(['sendall']);
    // sendAll.addEventListener('click', (evt) => {
    //     evt.preventDefault();
    //
    //     let checked = document.getElementsByTagName("input");
    //
    //     for (let i = 0, max = checked.length; i < max; i++){
    //         if (checked[i].type === 'checkbox')
    //             checked[i].checked = true;
    //     }
    // })

    let accordeon = document.getElementById('accordeon')
    accordeon.addEventListener('click' , (evt) => {
        if(evt.target.classList.contains('email-list__button')) {
            let btn = evt.target
            let currentBlock = btn.closest('div.accordeon__section')
            let currentInputs = Array.from(currentBlock.getElementsByClassName('email-list__input'));

            btn.addEventListener('click', () => {
            currentInputs.forEach((i)=> {
                if(!i.hasAttribute('checked')) {
                    i.setAttribute('checked','checked')
                }
                else {
                    i.removeAttribute('checked')
                }
            });

            })

        }
        else {
        return
        }
  });
});

