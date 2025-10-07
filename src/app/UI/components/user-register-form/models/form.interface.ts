import { FormControl } from "@angular/forms";

export interface RegisterForm {
    nikName: FormControl<string>;
    avatar: FormControl<{name: string; url:string;}>;
}

export interface RegisterFormValue {
    nikName: string;
    avatar: {name: string; url:string;};
}