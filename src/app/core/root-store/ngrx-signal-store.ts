import { patchState, signalStore, withComputed, withLinkedState, withMethods, withProps, withState } from '@ngrx/signals';
import { INITIAL_STATE } from '.';

export const NGRX_SIGNAL_STORE = signalStore(
    { providedIn: 'root' }, 
    withState(INITIAL_STATE),
    // withProps(() => ({
    //     booksService: inject(BooksService),
    //     logger: inject(Logger),
    //   })),
    // withMethods(({ booksService, logger, ...store }) => ({
    //     async loadBooks(): Promise<void> {
    //       logger.debug('Loading books...');
    //       patchState(store, { isLoading: true });
          
    //       const books = await booksService.getAll();
    //       logger.debug('Books loaded successfully', books);
          
    //       patchState(store, { books, isLoading: false });
    //     },
    //   })),
    withComputed(()=>({})),
    withProps(()=>({})),
    withMethods((store)=>({
        updateSomeTh(param: boolean){
            patchState(store, (state) => ({...state,  isLoading: param}));
        }
    })),
    withLinkedState(()=>({})),
    // withMethods((store, booksService = inject(BooksService)) => ({
    //     /* ... */
    //     // 👇 Defining a method to load all books.
    //     async loadAll(): Promise<void> {
    //       patchState(store, { isLoading: true });
    
    //       const books = await booksService.getAll();
    //       patchState(store, { books, isLoading: false });
    //     },
    //   }))
    // withHooks({
    //     onInit(store) {
    //       // 👇 Increment the `count` every 2 seconds.
    //       interval(2_000)
    //         // 👇 Automatically unsubscribe when the store is destroyed.
    //         .pipe(takeUntilDestroyed())
    //         .subscribe(() => store.increment());
    //     },
    //     onDestroy(store) {
    //       console.log('count on destroy', store.count());
    //     },
    //   }),
    // withHooks((store) => {
    //     const logger = inject(Logger);
    //     let interval = 0;
    
    //     return {
    //       onInit() {
    //         interval = setInterval(() => store.increment(), 2_000);
    //       },
    //       onDestroy() {
    //         logger.info('count on destroy', store.count());
    //         clearInterval(interval);
    //       },
    //     };
    //   }),
    );
    // мне нужно ентитес и потом можно настроить слайсы для виджетов - signalStoreFeature, метод обертка, генератор среза, отображается в рут стор