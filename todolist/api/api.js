//* ~~~~~~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~~~~~~
export const Api = (() => {
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