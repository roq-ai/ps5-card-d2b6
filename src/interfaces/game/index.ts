import { CardInterface } from 'interfaces/card';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  name: string;
  publisher: string;
  release_date: any;
  genre: string;
  rating: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  card?: CardInterface[];
  user?: UserInterface;
  _count?: {
    card?: number;
  };
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  publisher?: string;
  genre?: string;
  user_id?: string;
}
