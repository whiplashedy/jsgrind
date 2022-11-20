(() => {
    const $inputEl = document.querySelector('input');
    const $submitButtonEl = document.querySelector('#submit');
    const $todoListEl = document.querySelector('ul');

    function addTask(label) {
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.textContent = label
        li.appendChild(span)
        let button = document.createElement("button")
        button.textContent = "Delete"
        li.appendChild(button)
        $todoListEl.appendChild(li)
    }

    function deleteTask (item) {
        item.remove()
    }
    $submitButtonEl.addEventListener('click', () => {
        addTask($inputEl.value);
        // Reset the input so that new tasks can be added.
        $inputEl.value = '';
    });
    $todoListEl.addEventListener('click', (event) => {
        deleteTask(event.target.parentNode)
    });
})()