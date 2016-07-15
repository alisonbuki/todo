//Model

var todos = [
	{
		text: 'hello',
		complete: false
	},
	{
		text: 'world',
		complete: false
	}
	
];


//View

function renderToDos() {
	$('#todoList').html('');
	var source = $('#todo-template').html();
	var template = Handlebars.compile(source);

	for (var i=0; i<todos.length; i++) {
		var listItem = template(todos[i]);
		$('#todoList').append(listItem);
		}
	}

//Controller

function setup() {
	renderToDos();
	$('#submit').on('click', addToDo);
	$('#todoList').on('click', '.complete', completeToDo);
}

function addToDo() {
	var input = $('#todoInput').val();
	todos.push({
		text:input,
		complete: false
		});

	renderToDos();
}

function completeToDo() {
	var todoIndex = $(this).parent().index();
	todos[todoIndex].complete = true;

	renderToDos();
}


$(document).ready(setup);



