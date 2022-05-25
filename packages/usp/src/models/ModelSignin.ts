import {BaseResponse} from "shared/utils/Model"
import { inputType } from '~/fetches/fetchIdTrouver';

export interface errorsType  { 
  errorLoginId: boolean
  errorName: boolean
  errorId: boolean
  errorBizno: boolean
  errorPassword: boolean
  errorEmail: boolean
}
export interface helperTextsType  { 
  helperTextName: string
  helperTextId: string
  helperTextBizno: string
  helperTextPassword: string
  helperTextEmail: string
  helperTextLoginId:string
  }
export interface labelsType {
  labelsLoginId:string
  labelsName: string
  labelsId: string
  labelsBizno: string
  labelsPassword: string
  labelsEmail: string
}

export interface ConditionType {
  id:string,
  name:string,
  label?:string,
  type:string,
  value:string,
  variant:string,
  fullWidth:boolean,
  helperText?: string,
  placeholder:string,
  error?: boolean,
  focused?:boolean,
  autoFocus?:boolean,
  required?:boolean,
  style?: React.CSSProperties | undefined,
}
export interface ConditionBoxs {
  name: ConditionType,
  id: ConditionType,
  biz: ConditionType,
  tel: ConditionType,
  email: ConditionType,
}

export interface PwState {
  amount: string;
  password: string;
  passOneRest:string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}
export interface LableState {
  passwordLable: string;
  passOneRestLable: string;
}

export interface ErrorState {
  passwordError: boolean;
  passOneRestError: boolean;
}

export type UserType = {
  loginId: string;
  passwd: string;
  errorId?:boolean, 
  errorPw?:boolean, 
  labelId?:string,
  labelPw?:string
};

export const intialLoginValues:UserType = { loginId: "", passwd: "", errorId:false, errorPw:false, labelId:"로그인",labelPw:"비밀번호"};
export const intialValues:inputType = { loginId:"",memberNm: "", birthday: "",bizrno: "",mobileNo: "",email: "",key:""};

export const iniNames = {id:'name', name:'userName', error: false, autoFocus:true, helperText: '',variant:'outlined', value:'', label:'이름', required: true ,type:'search', placeholder:'이름입력하세요', fullWidth:true }
export const iniId    = {id:'id',   name:'userId', error: false, autoFocus:false, helperText: '',variant:'outlined', value:'', label:'생녕월일', required: true ,type:'number', placeholder:'id입력하세요', fullWidth:true}
export const iniBiz   = {id:'biz',  name:'userBizno', error: false, autoFocus:false, helperText: '',variant:'outlined', value:'', label:'사업자번호', required: true ,type:'number', placeholder:'사업자 번호 입력하세요', fullWidth:true}
export const iniTel   = {id:'tel',  name:'userPassword', error: false, autoFocus:false, helperText: '',variant:'outlined', value:'', label:'핸드폰번호', required: true ,type:'password', placeholder:'핸드폰번호 입력하세요', fullWidth:true}
export const iniEmail = {id:'emall', name:'userEmail', error: false, autoFocus:false, helperText: '',variant:'outlined', value:'', label:'이메일', required: true ,type:'email', placeholder:'이메일 입력하세요', fullWidth:true }

export const intialValuesErrors:errorsType = {errorLoginId: false,errorName: false, errorId:false, errorBizno:false, errorPassword:false, errorEmail:false,};
export const intialValuesHptx:helperTextsType = {helperTextLoginId:'',helperTextName:'', helperTextId:'', helperTextBizno:'', helperTextPassword:'', helperTextEmail:'',};
export const intialValuesLab:labelsType = {labelsLoginId:'아이디',labelsName:'이름', labelsId:'생녕월일', labelsBizno:'사업자번호', labelsPassword:'핸드폰번호', labelsEmail:'이메일',};
export const intialValuesLabBiz:labelsType = {labelsLoginId:'아이디',labelsName:'사업자명', labelsId:'사업자명', labelsBizno:'사업자번호', labelsPassword:'핸드폰번호', labelsEmail:'이메일',};

export const  initSetErrors:errorsType = { errorLoginId: false,errorName: false, errorId:false, errorBizno:false, errorPassword:false, errorEmail:false};
export const  initSetLabels:labelsType = { labelsLoginId:'아이디',labelsName:'이름', labelsId:'생녕월일', labelsBizno:'사업자번호', labelsPassword:'핸드폰번호', labelsEmail:'이메일'};
export const initSetHelperTexts:helperTextsType = {helperTextLoginId:'', helperTextName:'', helperTextId:'', helperTextBizno:'', helperTextPassword:'', helperTextEmail:''};

export const steps = [ '약관동의/인증', '휴대폰 본인 인증', '가입정보 입력', '가입완료'];