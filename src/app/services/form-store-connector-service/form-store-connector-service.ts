import { Injectable, inject } from '@angular/core';
import { AbstractRegisterFormService } from '../../UI/components/user-register-form/service/register-form/register-form';
import { RegisterFormValue } from '../../UI/components/user-register-form/models/form.interface';
import { Dispatcher } from '@ngrx/signals/events';
import { currentMemberAPIEvents } from '../../core/root-store/ngrx-store-events';
import { ChatMember } from '../../core/root-store';
import { GenerateIdService } from '../generate-id/generate-id';


@Injectable()
export class FormStoreConnectorService implements AbstractRegisterFormService {
  #nanoId = inject(GenerateIdService);
  #dispatcher = inject(Dispatcher);
  sendFormData(formValue: RegisterFormValue): void {
    const member: ChatMember = {
      nikName: formValue.nikName,
      uId: this.#nanoId.generateID(),
      avatar: formValue.avatar.url,
      messages:{
        count:0,
        list:[]
      }
    };

    this.#dispatcher.dispatch(currentMemberAPIEvents.addMember(member))
  }
  
}
