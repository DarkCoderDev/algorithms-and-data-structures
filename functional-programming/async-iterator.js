async function* getUsers(quantity) {
    quantity ||= 1;

    const TODO_API = 'https://jsonplaceholder.typicode.com/users/';

    do {
        const todoUrl = `${TODO_API}${quantity}`;

        const response = await fetch(todoUrl);
        const deserializedData = await response.json();
        yield deserializedData;

        quantity--;
    } while (quantity > 0);
}

for await (const user of getUsers(10)) {
    console.log(user);
}
