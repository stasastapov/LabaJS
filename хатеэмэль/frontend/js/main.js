function returnUsersArray() {
    const users = [
        {
            id: 1,
            name: 'Винников Даниил Юрьевич',
            login: '12-34-1111'
        },
        {
            id: 2,
            name: 'Некрасов Игорь Сергеевич',
            login: '12-34-1112'
        },
        {
            id: 3,
            name: 'Митин Илья Николаевич',
            login: '12-34-1113'
        },
        {
            id: 4,
            name: 'Симонян Артур Артакович',
            login: '12-34-1114'
        },
        {
            id: 5,
            name: 'Бутусов Андрей Андреевич',
            login: '12-34-1115'
        },
        {
            id: 6,
            name: 'Учитель Данила Алексеевич',
            login: '12-34-1116'
        }
    ];

    return users;
}

function renderUsersToTable() {
    let buffer = "";
    let usersArray = returnUsersArray();

    usersArray.forEach((item) => {
        buffer += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.login}</td></tr>`;
    });
    return buffer
}

function appendDataToTable() {
    const tbodyTable = document.querySelector(".main__table__content");
    tbodyTable.innerHTML = renderUsersToTable();
}

function searchUser() {
    let userArray = returnUsersArray();
    let loginInput = document.querySelector(".login__input").value;
    let result = ""
    let searchFielder = document.querySelector(".search__field");

    userArray.forEach((item) => {
        if (loginInput == item.login) {
            result = `Здравствуйте, ${item.name}!`
        }
    });

    if (result) {
        searchFielder.innerHTML = result;
    } else {
        searchFielder.innerHTML = "Пользователь не найден!"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    appendDataToTable();

    const executeButton = document.querySelector('.execute__button');

    executeButton.addEventListener("click", () => {
        searchUser();
    });
});