import { signalStore, withState } from '@ngrx/signals';

export const NGRX_SIGNAL_STORE = signalStore({ providedIn: 'root' }, withState(() => ({})));