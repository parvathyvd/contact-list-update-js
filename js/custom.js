//Get input element and then  add event listener
let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('input', filterNames)

function filterNames(){
    //Get value of input

    let inputValue = filterInput.value.toUpperCase();

    let ul = document.getElementById('names');

    let li = ul.querySelectorAll('li.collection-item');

    for(let i=0; i< li.length; i++){

        let a = li[i].getElementsByTagName('a')[0];
        let aValue = a.innerHTML.toUpperCase();

        if(aValue.indexOf(inputValue) > -1)
        {
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }

    }

}
