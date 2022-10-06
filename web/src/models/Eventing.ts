
type Callback = () => void;

export class Eventing {
    events: {[key: string]: Callback[]} = {};
    
    on(eventName: string, callback: Callback): void {
		const handler = this.events[eventName] || [];
		handler.push(callback);
		this.events[eventName] = handler;
	}

    trigger(eventName: string): void {
        const handler = this.events[eventName]

        if(!handler || handler.length === 0) return

        handler.forEach(callback => {
            callback()
        });
    }

}