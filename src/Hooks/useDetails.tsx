import React from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import { AdminModel } from '../models/Admin.model';
import { AdminAtom, TokenAtom } from '../States/Admin.atom';

interface IReturnType {
  adminDetails: AdminModel,
  setAdminDetails: SetterOrUpdater<AdminModel>;
  token: string;
  setToken: SetterOrUpdater<string>;
}

export default function useDetails(): IReturnType {
  const [adminDetails, setAdminDetails] = useRecoilState(AdminAtom);
  const [token, setToken] = useRecoilState(TokenAtom);

  return {
    adminDetails,
    token,
    setAdminDetails,
    setToken,
  }
}
