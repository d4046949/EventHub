import { IEventDetails } from './IEventDetails';

export class EventTopic {

    private subscribers: Array<IEventDetails> = new Array<IEventDetails>();

    constructor(public eventName: string, event: IEventDetails) {
        this.subscribers.push(event);
    }

    notify = (args): void => {
        this.subscribers.forEach(function (item: IEventDetails) {
            item.callback(args);
        });
    }

    add = (eventDetails: IEventDetails): void => { this.subscribers.push(eventDetails); }

    remove = (id: number): void => {
        var subscription = this.subscribers.findIndex((x: IEventDetails) => x.id === id);

        if (subscription !== -1) {
            this.subscribers.splice(subscription, 1);
        } else {
            console.warn('cant find id');
        }
    }
}