import { PartialStateUpdater } from "@ngrx/signals";
import { ChatMember } from "./ngrx-signal-store.config";

function addMemberUpdater(): PartialStateUpdater<ChatMember> {
    return (state) => ({});
  }
  
  function incrementSecond(): PartialStateUpdater<{ count2: number }> {
    return (state) => ({ count2: state.count2 + 1 });
  }