var cur_id = 0;
const data = [
    {
        "id": 1,
        "name": "김충훈"
    },
    {
        "id": 2,
        "name": "김충훈2"
    },
    {
        "id": 3,
        "name": "김충훈3"
    },
];
const table = document.querySelector('#name-table tbody');
console.log(table);

const addButton = document.querySelector('button#add-child');
const cancelButton = document.querySelector('button#edit-cancel');
    
addButton.addEventListener('click', function(e){
    var name = document.querySelector('input#add-name').value;
    if (name == '' || name == null) {
        alert("이름을 입력해주세요!")
    } else {
        const no = data.length+1;
        addTableChild(no,name);
        data.push({"id":no,"name":name});
        document.querySelector('input#add-name').value = '';
    }
}
);
cancelButton.addEventListener('click', function(e){
    document.querySelector('input#edit-name').value = '';
    document.querySelector('div#edit-container').style.display = 'none';
    document.querySelector('div#add-container').style.display = 'inline-flex';
}
);

document.addEventListener('keydown', function(e){
    if (e.key=="Enter") {
        var name = document.querySelector('input#add-name').value;
        if (name == '' || name == null) {
            alert("이름을 입력해주세요!")
        } else {
            const no = data.length+1;
            addTableChild(no,name);
            data.push({"id":no,"name":name});
            document.querySelector('input#add-name').value = '';
        }
    }
    
}
);

function addTableChild(id, name) {
    var new_child = document.createElement('tr');
    new_child.className="items";
    var new_id = document.createElement('td');
    var new_name = document.createElement('td');
    new_id.innerText = id;
    new_name.innerText = name;
    new_child.appendChild(new_id);
    new_child.appendChild(new_name);
    new_child.addEventListener('click', function(e){
        selectTableChild(id,name);
    })
    table.appendChild(new_child);
}

function updateTable() {
    const childs = table.children()
    for (i = 0; i < childs.length; i++) {
        table.removeChild(childs[i]);
    }
    for (i = 0; i < data.length; i++) {
        addTableChild(data[i].id, data[i].name);
    } 
}

function selectTableChild(id, name) {
    cur_id = id;
    document.querySelector('input#edit-name').value = name;
    document.querySelector('div#add-container').style.display = 'none';
    document.querySelector('div#edit-container').style.display = 'inline-flex';
}

function editTableChild() {
    var name = document.querySelector('input#edit-name').value;
    document.querySelector('div#add-container').style.display = 'inline-flex';
    document.querySelector('div#edit-container').style.display = 'none';
}

for (i = 0; i < data.length; i++) {
    addTableChild(data[i].id, data[i].name);
}
