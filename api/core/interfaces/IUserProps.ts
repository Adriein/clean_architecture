export enum STATUS {
  active = 'active',
  inactive = 'inactive',
  pause = 'pause',
}

export enum ROL {
  admin = 'admin',
  user = 'user',
}

export enum PAYMENT {
  mensual = 'mensual',
  trimestral = 'trimestral',
  anual = 'anual',
}

export default interface IUserProps {
  id?: number;
  avatar?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  age?: number;
  level?: number;
  weight?: number;
  height?: number;
  objective?: string;
  notes?: string;
  injuries?: string;
  status?: STATUS;
  rol?: ROL;
  pending?: boolean;
  paymentType?: PAYMENT;
}
