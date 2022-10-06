import { User } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User>{
	eventsMap(): {[key: string]: () => void} {
		return {
			'click:.set-name': this.onSetNameClick,
			'click:.set-age': this.onSetAgeClick,
			'click:.save-model': this.onSaveClick,
		};
	}

	onSaveClick = (): void => {
		this.model.save()
	}

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input')! as HTMLInputElement;
		const name = input.value;
		this.model.set({name});
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	template(): string {
		return `
            <div>
                <input type="text" placeholder="${this.model.get('name')}"/>
				<button class='set-name'>Change Name</button>
				<button class='set-age'>Set Random Age</button>
				<button class='save-model'>Save User</button>
			</div>
        `;
	}
}
