import type { AnyRouter, AnyRouterDef, Router, RouterDef } from '../router';
/**
 * @internal
 */
export type MergeRouters<TRouters extends AnyRouter[], TRouterDef extends AnyRouterDef = RouterDef<TRouters[0]['_def']['_config'], {}>> = TRouters extends [
    infer Head extends AnyRouter,
    ...infer Tail extends AnyRouter[]
] ? MergeRouters<Tail, {
    _config: TRouterDef['_config'];
    router: true;
    procedures: Head['_def']['procedures'] & TRouterDef['procedures'];
    record: Head['_def']['record'] & TRouterDef['record'];
    queries: Head['_def']['queries'] & TRouterDef['queries'];
    mutations: Head['_def']['mutations'] & TRouterDef['mutations'];
    subscriptions: Head['_def']['subscriptions'] & TRouterDef['subscriptions'];
}> : Router<TRouterDef> & TRouterDef['record'];
export declare function mergeRouters<TRouters extends AnyRouter[]>(...routerList: [...TRouters]): MergeRouters<TRouters>;
//# sourceMappingURL=mergeRouters.d.ts.map