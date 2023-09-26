interface User555 {
  name: string;
  surname: string;
}

interface Articles {
	title: string;
	author: string;
	content: string;
}

interface Params {
	query: {
		ex: string;
	}
}

export function makeRequest<Type>(url: string, returnedData: Type , params?: Params): Type | undefined {
	return returnedData;
}

// const myUser = makeRequest<User555>('/getUsers', {name});
//
// const user55: User555 = {
// 	name: 'qwe',
// 	surname: 'zxc',
// };

const articles: Articles = {
	title: 'qwe',
	author: 'asd',
	content: 'zxc',
};

const myArticles = makeRequest('/getArticles', articles);
