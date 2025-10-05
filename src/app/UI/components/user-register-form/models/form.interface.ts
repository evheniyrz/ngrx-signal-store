import { FormControl } from "@angular/forms";

export interface RegisterForm {
    nikName: FormControl<string>;
    avatar: FormControl<string>;
    uId: FormControl<string>;
}