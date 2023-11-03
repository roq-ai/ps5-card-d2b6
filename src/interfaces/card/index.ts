import { GameInterface } from 'interfaces/game';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CardInterface {
  id?: string;
  name: string;
  game_id: string;
  description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  game?: GameInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CardGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  game_id?: string;
  description?: string;
  user_id?: string;
}
