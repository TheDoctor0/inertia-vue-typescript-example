import Vue from 'vue';
import { Inertia } from '~/node_modules/@inertiajs/inertia';
import Page from '@/types/Page';

declare module 'vue/types/vue' {
    interface Vue {
        readonly $inertia: Inertia;
        readonly $page: Page;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        layout?: any;
    }
}

export default Vue;
