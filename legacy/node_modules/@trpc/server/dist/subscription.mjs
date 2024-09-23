import { g as getTRPCErrorFromUnknown } from './TRPCError-98d44758.mjs';
import { o as observable } from './observable-ade1bad8.mjs';
import './getCauseFromUnknown-2d66414a.mjs';

/**
 * @deprecated
 * This functionality is deprecated and will be removed in the next major version.
 */ function subscriptionPullFactory(opts) {
    let timer;
    let stopped = false;
    async function _pull(emit) {
        /* istanbul ignore next -- @preserve */ if (stopped) {
            return;
        }
        try {
            await opts.pull(emit);
        } catch (err /* istanbul ignore next -- @preserve */ ) {
            emit.error(getTRPCErrorFromUnknown(err));
        }
        /* istanbul ignore else -- @preserve */ if (!stopped) {
            timer = setTimeout(()=>_pull(emit), opts.intervalMs);
        }
    }
    return observable((emit)=>{
        _pull(emit).catch((err)=>{
            emit.error(getTRPCErrorFromUnknown(err));
        });
        return ()=>{
            clearTimeout(timer);
            stopped = true;
        };
    });
}

export { subscriptionPullFactory };
