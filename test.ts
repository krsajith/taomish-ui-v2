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

    subscribe(topics: string[]) {
        return this.observable.pipe(filter(n => topics.includes(n.type)));
    }
}


const ps = new PubSub();

ps.subscribe(['invoiceItem.rate','invoiceItem.qty']).subscribe(notification => {
    notification.form.patch(10);
    console.log(notification);
});

ps.publish({ type: 'invoiceItem.rate', payload: {form:'f1'} });

ps.publish({ type: 'invoiceItem.qty', payload: {form:'f1'} });

