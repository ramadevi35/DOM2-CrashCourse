var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem,);
//Filter Event
filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e) {
    e.preventDefault();
    console.log(1);

    //GET INPUT VALUE
    var newItem = document.getElementById('item').value;
    //Create New Li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button Element
    var deleteBtn = document.createElement('button');

    //add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);

}
//Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }

    }

}
//Filter Items
function filterItems(e) {

    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get lis

    var items = itemList.getElementsByTagName('li');

    //Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });


}