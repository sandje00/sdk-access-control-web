import { email, required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

const rules = [
  {
    name: 'email',
    rule: {
      ...email,
      message: 'This field requires valid email'
    }
  },
  {
    name: 'required',
    rule: {
      ...required,
      message: 'This filed is required'
    }
  }
];

export const extendRules = () => {
  rules.forEach(({ name, rule }) => extend(name, rule));
};
