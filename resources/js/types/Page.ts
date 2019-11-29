import User from '@/types/User';

export default interface Page {
    auth: {
        user: User;
    };
    flash: {
        message: string;
    };
    errors: any;
}
