export class ClassUser {
	name: string;
	surname: string;
	private secretMessage: string;

	constructor(props: {name: string; surname: string}) {
		this.name = props.name;
		this.surname = props.surname;
		this.secretMessage = `${props.name} secret message`;
	}

	printFullName(): string {
		return `${this.name} ${this.surname}`;
	}

	printSecretMessage(password: number): string | null {
		if (password === 123) {
			return this.secretMessage;
		}

		return null;
	}
}

const mySuperCustomer = new ClassCustomer({
	name: 'Mr.Anderson',
	surname: 'Chosen one',
});

mySuperCustomer.printFullName();

class ClassCustomer extends ClassUser {
	bill: number;

	constructor() {
		super();
	}
}
