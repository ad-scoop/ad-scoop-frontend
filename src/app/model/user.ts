import { AbstractId } from './abstractid';

export class User extends AbstractId {

  public email: string;
  public password: string;
  public firstname: string;
  public middelname: string;
  public lastname: string;
  public labels: string[];

  constructor(model: any) {
    super();
    this.email = model.email;
    this.password = model.password;
    this.firstname = model.firstname;
    this.middelname = model.middlename;
    this.lastname = model.lastname;
    this.labels = model.labels;
  }

}
