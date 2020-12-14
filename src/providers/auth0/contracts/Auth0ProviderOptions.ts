import { Oauth2SchemeOptions } from '../../../schemes/oauth2'
import { ProviderOptions } from '../../index'

export interface Auth0ProviderOptions
  extends ProviderOptions,
    Oauth2SchemeOptions {
  domain: string
}

export default Auth0ProviderOptions
