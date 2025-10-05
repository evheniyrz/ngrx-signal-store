import { PartialStateUpdater } from "@ngrx/signals";

function incrementFirst(): PartialStateUpdater<{ count1: number }> {
    return (state) => ({ count1: state.count1 + 1 });
  }
  
  function incrementSecond(): PartialStateUpdater<{ count2: number }> {
    return (state) => ({ count2: state.count2 + 1 });
  }