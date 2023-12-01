var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btnRemoveAll = document.querySelector('.remove-all')
var tags = ['Nodejs', 'Reactjs']

function render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li class="item">
                                ${tag}
                                <div><i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i></div>
                            </li>
                            `
    }
    content.appendChild(input)
    input.focus()
}

render()

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        // console.log(input.value.trim());
        tags.push(input.value.trim())
        input.value = ''
        render()
        // input.value
        // addTags
    }
})

function removeTag(index) {
    tags.splice(index, 1)
    render()
}

btnRemoveAll.addEventListener('click', function () {
    tags = []
    render()
})
