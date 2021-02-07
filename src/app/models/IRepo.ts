import { IUser } from 'src/app/models/IUser';
export interface IRepo {
    id :string;
    name :string;
    full_name : string;
    html_url:string;
    owner: IUser;
}