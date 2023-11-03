import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  established_at?: any;
  location?: string;
  industry?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  team?: TeamInterface[];

  _count?: {
    team?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  name?: string;
  tenant_id?: string;
}
