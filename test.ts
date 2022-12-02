import { filter, Observable, Subject } from "rxjs";

export interface Notification {
    type: string;
    payload: unknown;
}

class PubSub {
    subject = new Subject<Notification>();
    observable = this.subject.asObservable();

    publish(notification: Notification) {
        this.subject.next(notification);
    }

    subscribe(type: string) {
        return this.observable.pipe(filter(n => n.type === type));
    }
}


const ps = new PubSub();

ps.subscribe('a').subscribe(notification => {
    console.log(notification);
});

ps.publish({ type: 'a', payload: 'hello' });

ps.publish({ type: 'b', payload: 'hello' });

