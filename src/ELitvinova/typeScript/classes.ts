interface IClassUser {
	name: string;
	surname: string;
}

export class ClassUser {
	name: string;
	surname: string;
	private secretMessage: string;

	constructor(props: IClassUser) {
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

const mySuperUser = new ClassUser({
	name: 'Mr.Anderson',
	surname: 'Chosen one',
});

mySuperUser.printFullName();

interface IClassCustomer extends IClassUser {
	bill: number;
}

export class ClassCustomer extends ClassUser {
	bill: number;

	constructor(props: IClassCustomer) {
		super({
			name: props.name,
			surname: props.surname,
		});

		this.bill = props.bill;
	}
}

const mySuperCustomer = new ClassCustomer({
	name: 'Mr.Anderson',
	surname: 'Boba',
	bill: 777,
});

console.log(mySuperCustomer);
