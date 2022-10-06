import { User } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User>{

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>
                    <p>User Name: ${this.model.get('name')}</p>
                    <p>User Age: ${this.model.get('age')}</p>
                </div>
            </div>
        `
    }
}