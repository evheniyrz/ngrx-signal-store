import { FormControl } from "@angular/forms";

export interface RegisterForm {
    nikName: FormControl<string>;
    avatar: FormControl<{name: string; url:string;}>;
    uId: FormControl<string>;
}