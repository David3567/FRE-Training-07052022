//* ~~~~~~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~~~~~~
const Api = (() => {
	// const baseUrl = "https://jsonplaceholder.typicode.com";
  const baseUrl = 'http://localhost:4232';
	const path = "todos";

	const getTodos = () =>
		fetch([baseUrl, path].join("/")).then((response) => response.json());

	const deleteTodo = (id) =>
		fetch([baseUrl, path, id].join("/"), {
			method: "DELETE",
		});

	const addTodo = (newTodo) =>
		fetch([baseUrl, path].join("/"), {
			method: "POST",
			body: JSON.stringify(newTodo),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());

	return {
		getTodos,
		deleteTodo,
		addTodo,
	};
})();

//* ~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const domstr = {
		todosContainer: "#todolist_container",
		deletebtn: ".dltbtn",
		inputbox: ".todolist__input",
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((todo) => {
			tmp += `
        <li>
          <span>${todo.id} - ${todo.title}</span>
          <button class="dltbtn" id="${todo.id}">X</button>
        </li>
      `;
		});
		return tmp;
	};

	return {
		render,
		createTmp,
		domstr,
	};
})();

//* ~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {
	class Todo {
		constructor(title) {
			this.userId = 2;
			this.title = title;
			this.completed = false;
		}
	}
	class State {
		#todos = [];

		get todolist() {
			return this.#todos;
		}
		set todolist(todos) {
			this.#todos = [...todos];

			const todosContainer = document.querySelector(view.domstr.todosContainer);
			const tmp = view.createTmp(this.#todos);
			view.render(todosContainer, tmp);
		}
	}

	const { getTodos, deleteTodo, addTodo } = api;

	return {
		getTodos,
		deleteTodo,
		State,
		addTodo,
		Todo,
	};
})(Api, View);

//* ~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
	const state = new model.State();

	const deleteTodo = () => {
		const todosContainer = document.querySelector(view.domstr.todosContainer);
		todosContainer.addEventListener("click", (event) => {
			if (event.target.className === "dltbtn") {
				state.todolist = state.todolist.filter(
					(todo) => +todo.id !== +event.target.id
				);
				model.deleteTodo(event.target.id);
			}
		});
	};

	const addTodo = () => {
		const inputbox = document.querySelector(view.domstr.inputbox);
		inputbox.addEventListener("keyup", (event) => {
			if (event.code === "Enter" && event.target.value.trim() !== "") {
				const newTodo = new model.Todo(event.target.value);

        model.addTodo(newTodo).then(todo => {
          state.todolist = [todo, ...state.todolist];
        });
        event.target.value = '';
			}
		});
	};

	const init = () => {
		model.getTodos().then((todos) => {
			state.todolist = [...todos.reverse()];
		});
	};

	const bootstrap = () => {
		init();
		deleteTodo();
		addTodo();
	};

	return { bootstrap };
})(Model, View);

Controller.bootstrap();
