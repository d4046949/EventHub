import { EventTopic } from './EventTopic';

export class EventBus {
    listener: Array<EventTopic> = new Array<EventTopic>();

    trigger = (name: string, args): void => {
        let subscriptor = this.listener.find(x => x.eventName === name);
        if (subscriptor) {
            subscriptor.notify(args);
        }
    }

    subscribe = (topic: string, callback: any): number => {
        let uniquieId = this.generateRandom();
        let subscriptor = this.listener.find(x => x.eventName === topic);
        subscriptor
            ? subscriptor.add({ id: uniquieId, callback: callback })
            : this.listener.push(new EventTopic(topic, { id: uniquieId, callback: callback }));

        return uniquieId;
    }

    unsubscribe = (id: number): void => {
        this.listener.forEach(function (item: EventTopic) {
            item.remove(id);
        });
    }

   private generateRandom = (): number => Date.now();
}