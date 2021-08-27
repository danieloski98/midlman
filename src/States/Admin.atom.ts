import {atom} from 'recoil'
import { AdminModel } from '../models/Admin.model'

const adminModel: AdminModel = {};

export const AdminAtom = atom({
  key: 'AdminAtom',
  default: adminModel,
})

export const TokenAtom = atom({
  key: 'TokenAtom',
  default: '',
})
