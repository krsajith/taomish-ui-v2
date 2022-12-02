

class CtrmFucntions {
    constructor(pubsub:PubSub) {
        ps.subscribe(['invoiceItem.rate','invoiceItem.qty']).subscribe(notification => {
            notification.form.patch(10);
            console.log(notification);
        });
    }
}