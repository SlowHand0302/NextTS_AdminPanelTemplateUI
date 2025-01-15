export enum PaymentState {
    PENDING = 'pending',
    SUCCEED = 'succeed',
    FAILED = 'failed',
}

export enum PaymentProvider {
    CASH = 'cash',
    STRIPE = 'stripe',
}

export type Payment = {
    _id: string;
    orderId: string;
    amount: number;
    currency: string;
    paymentMethod: string;
    status: PaymentState;
    provider?: PaymentProvider;
    trasactionId?: string;
    metadata?: string;
};
